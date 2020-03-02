import * as React from 'react';
import { LedaContext } from '../../components/LedaProvider';
import { Loader } from '../../components/Loader';
import { Div, DivRefCurrent } from '../../components/Div';
import { Ul } from '../../components/Ul';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  useAdaptivePosition,
  useElement,
  useTheme,
} from '../../utils';
import { scrollToSuggestion, getSuggestionItemProps } from './helpers';
import { SuggestionItem } from './SuggestionItem';
import { SelectAll } from './SelectAll';
import { SuggestionListProps, GroupedSomeObject, Value } from './types';
import { NoSuggestions } from './NoSuggestions';
import { GroupLabel } from './GroupLabel';

export const SuggestionList = (props: SuggestionListProps): React.ReactElement | null => {
  const {
    resultedData,
    boundingContainerRef,
    canSelectAll,
    canSelectGroup,
    compareObjectsBy,
    data,
    groupLabelRender,
    groupWrapperRender,
    hasCheckBoxes,
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

  const GroupWrapper = useElement(
    'GroupWrapper',
    Ul,
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

  if (!isOpen) return null;

  if (isLoading) {
    return (
      <Div className={theme.container} onMouseDown={(ev) => ev.preventDefault()} ref={wrapperRef}>
        <Loader />
      </Div>
    );
  }

  if (!data?.length) {
    return (
      <Div className={theme.container} onMouseDown={(ev) => ev.preventDefault()} ref={wrapperRef}>
        <NoSuggestionsComponent className={theme.noSuggestions} />
      </Div>
    );
  }

  const suggestions: (Value | GroupedSomeObject)[] = placeholder !== undefined && shouldAllowEmpty
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
        <SelectAll
          canSelectAll={canSelectAll}
          compareObjectsBy={compareObjectsBy}
          data={data}
          hasCheckBoxes={hasCheckBoxes}
          highlightedSuggestion={highlightedSuggestion}
          selectedSuggestion={selectedSuggestion}
          itemRender={itemRender}
          onClick={onClick}
          placeholder={placeholder}
          suggestionRef={suggestionRef}
          suggestions={suggestions}
          textField={textField}
          theme={theme}
          value={value}
        />

        {suggestions?.map((suggestion: GroupedSomeObject | Value, index: number) => {
          if ((suggestion as GroupedSomeObject)?.key) {
            return (
              <GroupWrapper className={theme.group} key={index}>
                <GroupLabel
                  canSelectGroup={canSelectGroup}
                  compareObjectsBy={compareObjectsBy}
                  groupLabelRender={groupLabelRender}
                  hasCheckBoxes={hasCheckBoxes}
                  highlightedSuggestion={highlightedSuggestion}
                  selectedSuggestion={selectedSuggestion}
                  itemRender={itemRender}
                  onClick={onClick}
                  placeholder={placeholder}
                  suggestionRef={suggestionRef}
                  suggestionRenders={suggestionRenders}
                  suggestion={suggestion}
                  textField={textField}
                  theme={theme}
                  value={value}
                />

                {(suggestion as GroupedSomeObject)?.dataItems?.map((dataItem: Value) => {
                  const suggestionItemComputedProps = getSuggestionItemProps({
                    compareObjectsBy,
                    highlightedSuggestion,
                    placeholder,
                    selectedSuggestion,
                    suggestion: dataItem,
                    textField,
                  });

                  const isChosen: boolean | undefined = (value as Value[])?.includes(dataItem);
                  return (
                    <SuggestionItem
                      isChosen={isChosen}
                      itemRender={itemRender}
                      onClick={onClick}
                      suggestionRef={suggestionRef}
                      textField={textField}
                      theme={theme}
                      hasCheckBoxes={hasCheckBoxes}
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

          const isItemChosen: boolean | undefined = hasCheckBoxes && (value as Value[])?.includes(suggestion);
          return (
            <SuggestionItem
              isChosen={isItemChosen}
              itemRender={itemRender}
              onClick={onClick}
              suggestionRef={suggestionRef}
              textField={textField}
              theme={theme}
              hasCheckBoxes={hasCheckBoxes}
              {...suggestionItemComputedProps}
            />
          );
        })}
      </List>
    </Div>
  );
};

SuggestionList.displayName = 'SuggestionList';
