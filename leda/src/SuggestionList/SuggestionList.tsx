import * as React from 'react';
import { isNil, isObject } from 'lodash';
import { SomeObject } from '../../commonTypes';
import { LedaContext } from '../../components/LedaProvider';
import { Loader } from '../../components/Loader';
import { Div, DivRefCurrent } from '../../components/Div';
import { Li } from '../../components/Li';
import { Ul } from '../../components/Ul';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { useAdaptivePosition, useElement, useTheme } from '../../utils';
import { getSuggestionItemProps, getText, scrollToSuggestion } from './helpers';
import { SuggestionItem } from './SuggestionItem';
import { SuggestionListProps, GroupedSomeObject, Value } from './types';
import { NoSuggestions } from './NoSuggestions';

export const SuggestionList = (props: SuggestionListProps): React.ReactElement | null => {
  const {
    boundingContainerRef,
    compareObjectsBy,
    data,
    groupBy,
    groupLabelRender,
    groupWrapperRender,
    highlightedSuggestion,
    selectedSuggestion,
    isLoading,
    isOpen,
    itemRender,
    listRender,
    noSuggestionsRender,
    onClick,
    placeholder,
    shouldAllowEmpty,
    textField,
    theme: themeProp,
    value,
  } = props;

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.suggestionList);

  const { renders: { [COMPONENTS_NAMESPACES.suggestionList]: suggestionRenders } } = React.useContext(LedaContext);

  const List = useElement(
    'List',
    Ul,
    listRender || suggestionRenders.listRender,
    props,
  );

  const GroupLabel = useElement(
    'GroupLabel',
    Li,
    groupLabelRender || suggestionRenders.groupLabelRender,
    props,
  );

  const GroupWrapper = useElement(
    'GroupWrapper',
    Div,
    groupWrapperRender || suggestionRenders.groupWrapperRender,
    props,
  );

  const NoSuggestionsComponent = useElement(
    'NoSuggestions',
    NoSuggestions,
    noSuggestionsRender || suggestionRenders.noSuggestionsRender,
    props,
  );

  const wrapperRef = React.useRef<DivRefCurrent | null>(null);

  const containerRef = React.useRef<HTMLElement | null>(null);
  const suggestionRef = React.useRef<HTMLElement | null>(null);

  const [resultedData, setResultedData] = React.useState<Value[] | GroupedSomeObject[]>([]);

  const classMap = React.useMemo(() => ({
    top: theme.containerTop,
    visible: theme.containerVisible,
  }), [theme.containerTop, theme.containerVisible]);

  useAdaptivePosition({
    elRef: wrapperRef,
    isOpen,
    classNames: classMap,
    boundingContainerRef,
  });

  React.useEffect((): void => {
    // скроллим эффективно
    scrollToSuggestion(containerRef, suggestionRef);
  }, [isOpen, value, selectedSuggestion, highlightedSuggestion]);

  // group suggestion list items if required
  React.useEffect((): void => {
    // used to keep track of key and indexes in the result array
    const indexByKey = new Map();
    let currentResultIndex = 0;
    const result: Value[] | GroupedSomeObject[] = data?.reduce((accumulator: Value[] | GroupedSomeObject[], dataItem: Value) => {
      const key = groupBy ? groupBy(dataItem) : undefined;
      if (!isNil(key)) {
        if (indexByKey.get(key) === undefined) {
          indexByKey.set(key, currentResultIndex);
          accumulator.push({
            key,
            dataItems: [],
          });
          currentResultIndex += 1;
        }
        (accumulator[indexByKey.get(key)] as GroupedSomeObject).dataItems.push(dataItem as SomeObject);
      } else {
        (accumulator as Value[]).push(dataItem);
      }
      return accumulator;
    }, []) ?? [];

    setResultedData(result);
  }, [data, groupBy, value]);

  if (!isOpen) return null;

  if (isLoading) {
    return (
      <Div className={theme.container} onMouseDown={(ev) => ev.preventDefault()} ref={wrapperRef}>
        <Loader />
      </Div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Div className={theme.container} onMouseDown={(ev) => ev.preventDefault()} ref={wrapperRef}>
        <NoSuggestionsComponent className={theme.noSuggestions} />
      </Div>
    );
  }

  const suggestions: (Value | GroupedSomeObject)[] = !isNil(placeholder) && shouldAllowEmpty
    ? [placeholder, ...resultedData]
    : resultedData;

  return (
    <Div className={theme.container} onMouseDown={(ev) => ev.preventDefault()} ref={wrapperRef}>
      <List
        className={theme.list}
        ref={(component) => {
          containerRef.current = component && component.wrapper;
        }}
      >
        {suggestions?.map((suggestion: GroupedSomeObject | Value) => {
          if (!isNil((suggestion as GroupedSomeObject).key)) {
            return (
              <GroupWrapper className={theme.group}>
                <GroupLabel className={theme.groupLabel}>
                  {(suggestion as GroupedSomeObject).key}
                </GroupLabel>

                {(suggestion as GroupedSomeObject).dataItems.map((dataItem: Value) => {
                  const suggestionItemComputedProps = getSuggestionItemProps({
                    compareObjectsBy,
                    highlightedSuggestion,
                    placeholder,
                    selectedSuggestion,
                    suggestion: dataItem,
                    textField,
                  });

                  return (
                    <SuggestionItem
                      itemRender={itemRender}
                      onClick={onClick}
                      suggestionRef={suggestionRef}
                      textField={textField}
                      theme={theme}
                      {...suggestionItemComputedProps}
                    />
                  );
                })}
              </GroupWrapper>
            );
          }

          const suggestionItemComputedProps = getSuggestionItemProps({
            compareObjectsBy,
            highlightedSuggestion,
            placeholder,
            selectedSuggestion,
            suggestion,
            textField,
          });

          return (
            <SuggestionItem
              itemRender={itemRender}
              onClick={onClick}
              suggestionRef={suggestionRef}
              textField={textField}
              theme={theme}
              {...suggestionItemComputedProps}
            />
          );
        })}
      </List>
    </Div>
  );
};

SuggestionList.displayName = 'SuggestionList';
