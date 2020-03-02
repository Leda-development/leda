import * as React from 'react';
import { GroupedSomeObject, SelectAllProps } from './types';
import { Value } from '../../components/DropDownSelect/types';
import { checkIsTheSameObject } from '../../utils';
import { SuggestionItem } from '.';

export const SelectAll = (props: SelectAllProps): React.ReactElement | null => {
  const {
    canSelectAll,
    compareObjectsBy,
    data,
    hasCheckBoxes,
    highlightedSuggestion,
    selectedSuggestion,
    itemRender,
    onClick,
    placeholder,
    suggestionRef,
    suggestions,
    textField,
    theme,
    value,
  } = props;

  return (
    <>
      {canSelectAll && (() => {
        const text = 'Выбрать все';
        const suggestionsCount = suggestions.reduce((accumulator: number, suggestion) => (
          (suggestion as GroupedSomeObject)?.dataItems
            ? (accumulator + (suggestion as GroupedSomeObject)?.dataItems?.length)
            : (accumulator + 1)), 0);

        const isSemi = (() => {
          if ((value as Value[]).length === 0) return false;

          // all nested checkboxes are checked
          return (value as Value[]).every((elem) => data?.includes(elem));
        })();

        const isHighlighted = checkIsTheSameObject({
          compareObjectsBy,
          obj1: text,
          obj2: highlightedSuggestion,
        });
        const isSelected = checkIsTheSameObject({
          compareObjectsBy,
          obj1: text,
          obj2: selectedSuggestion,
        });

        // является ли текущий элемент целью scrollToSuggestion
        const isScrollTarget = highlightedSuggestion ? isHighlighted : isSelected;

        const isSelectAllChosen = (value as Value[]).length === suggestionsCount;
        return (
          <SuggestionItem
            hasCheckBoxes={hasCheckBoxes}
            isChosen={isSemi}
            isSemi={!isSelectAllChosen && isSemi}
            isHighlighted={isHighlighted}
            isPlaceholder={false}
            isScrollTarget={isScrollTarget}
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
    </>
  );
};

SelectAll.displayName = 'SelectAll';
