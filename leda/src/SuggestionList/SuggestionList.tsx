import * as React from 'react';
import { isObject } from 'lodash';
import { LedaContext } from '../../components/LedaProvider';
import { Loader } from '../../components/Loader';
import { Div, DivRefCurrent } from '../../components/Div';
import { Li } from '../../components/Li';
import { Ul } from '../../components/Ul';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { useAdaptivePosition, useElement, useTheme } from '../../utils';
import { getSuggestionItemProps, scrollToSuggestion, getText } from './helpers';
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
    hasCheckboxes,
    highlightedSuggestion,
    selectedSuggestion,
    isLoading,
    isOpen,
    isSelectAllButton,
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
    // grouping data

    setResultedData(groupData(data, groupBy));
  }, [data, groupBy, value]);

  const renderSuggestion = React.useCallback((suggestionProp: Value | GroupedSomeObject) => {
    const suggestionItemComputedProps = getSuggestionItemProps({
      compareObjectsBy,
      highlightedSuggestion,
      placeholder,
      selectedSuggestion,
      suggestion: suggestionProp,
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
  }, [compareObjectsBy, highlightedSuggestion, itemRender, onClick, placeholder, selectedSuggestion, textField, theme]);

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
        {isSelectAllButton && (() => {
          const text = 'Выбрать все';
          const suggestionsCount = suggestions.reduce((accumulator: number, suggestion) => ((suggestion as GroupedSomeObject)?.dataItems ? (accumulator + (suggestion as GroupedSomeObject)?.dataItems.length) : (accumulator + 1)), 0);
          const isSemi = (value as Value[]).length > 0 && (value as Value[]).every((elem) => data.includes(elem));
          const isSelectAllChoosed = (value as Value[]).length === suggestionsCount;
          return (
            <SuggestionItem
              hasCheckboxes={hasCheckboxes}
              isChoosed={isSemi}
              isSemi={!isSelectAllChoosed && isSemi}
              isPlaceholder={false}
              isScrollTarget={false}
              item={text === placeholder ? null : text}
              itemRender={itemRender}
              key={text}
              onClick={onClick}
              suggestionRef={suggestionRef}
              text={text}
              textField={textField}
              theme={theme}
            />
          );
        })()}

        {suggestions?.map((suggestion: GroupedSomeObject | Value) => {
          if ((suggestion as GroupedSomeObject).key) {
            const groupLabelKey = isObject(suggestion) ? JSON.stringify(suggestion) : suggestion as string;
            const groupLabelItemText: string = getText(suggestion.key, textField);
            const isGroupLabelPlaceholder = groupLabelItemText === placeholder;
            const isHighlightedSuggestionGroupLabel: boolean = suggestion === highlightedSuggestion;
            const isSelectedSuggestionGroupLabel: boolean = suggestion === selectedSuggestion;
            const isGroupChoosed = (suggestion as GroupedSomeObject).dataItems.every((elem) => (value as Value[]).includes(elem));
            const isSemi: boolean = (suggestion as GroupedSomeObject).dataItems.some((elem) => (value as Value[]).includes(elem));
            const isScrollTargetSuggestionGroupLabel: boolean = highlightedSuggestion ? isHighlightedSuggestionGroupLabel : isSelectedSuggestionGroupLabel;
            return (
              <GroupWrapper className={theme.group} key={index}>
                <GroupLabel className={theme.groupLabel}>
                  <SuggestionItem
                    hasCheckboxes={hasCheckboxes}
                    isChoosed={isSemi}
                    isHighlighted={isHighlightedSuggestionGroupLabel}
                    isPlaceholder={isGroupLabelPlaceholder}
                    isScrollTarget={isScrollTargetSuggestionGroupLabel}
                    isSelected={isSelectedSuggestionGroupLabel}
                    isSemi={!isGroupChoosed && isSemi}
                    item={suggestion === placeholder ? null : suggestion}
                    itemRender={itemRender}
                    key={groupLabelKey}
                    onClick={onClick}
                    suggestionRef={suggestionRef}
                    text={groupLabelItemText}
                    textField={textField}
                    theme={theme}
                  />
                </GroupLabel>

                {(suggestion as GroupedSomeObject).dataItems.map((dataItem: Value) => {
                  const key = isObject(dataItem) ? JSON.stringify(dataItem) : dataItem as string;
                  const itemText: string = getText(dataItem, textField);
                  const isPlaceholder = itemText === placeholder;
                  const isHighlightedSuggestionGroupItem: boolean = dataItem === highlightedSuggestion;
                  const isSelectedSuggestionGroupItem: boolean = dataItem === selectedSuggestion;
                  const isChoosed: boolean = (value as Value[]).includes(dataItem);
                  const isScrollTargetSuggestionGroupItem: boolean = highlightedSuggestion ? isHighlightedSuggestionGroupItem : isSelectedSuggestionGroupItem;
                  return (
                    <SuggestionItem
                      hasCheckboxes={hasCheckboxes}
                      isChoosed={isChoosed}
                      isHighlighted={isHighlightedSuggestionGroupItem}
                      isPlaceholder={isPlaceholder}
                      isScrollTarget={isScrollTargetSuggestionGroupItem}
                      isSelected={isSelectedSuggestionGroupItem}
                      item={dataItem === placeholder ? null : dataItem}
                      itemRender={itemRender}
                      key={key}
                      onClick={onClick}
                      suggestionRef={suggestionRef}
                      text={itemText}
                      textField={textField}
                      theme={theme}
                    />
                  );
                })}
              </GroupWrapper>
            );
          }

          const text = getText(suggestion, textField);

          if (!text) return null;

          const isPlaceholder = text === placeholder;
          const isHighlighted = suggestion === highlightedSuggestion;
          const isSelected = suggestion === selectedSuggestion;

          // является ли текущий элемент целью scrollToSuggestion
          const isScrollTarget = highlightedSuggestion ? isHighlighted : isSelected;
          const isItemChoosed: boolean = (value as Value[]).includes(suggestion);
          const key = isObject(suggestion) ? JSON.stringify(suggestion) : suggestion as string;
          return (
            <SuggestionItem
              hasCheckboxes={hasCheckboxes}
              isChoosed={isItemChoosed}
              isHighlighted={isHighlighted}
              isPlaceholder={isPlaceholder}
              isScrollTarget={isScrollTarget}
              isSelected={isSelected}
              item={suggestion === placeholder ? null : suggestion}
              itemRender={itemRender}
              key={key}
              onClick={onClick}
              suggestionRef={suggestionRef}
              text={text}
              textField={textField}
              theme={theme}
            />
          );
        })}
      </List>
    </Div>
  );
};

SuggestionList.displayName = 'SuggestionList';
