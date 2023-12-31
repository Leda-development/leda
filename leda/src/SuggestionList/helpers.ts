import type * as React from 'react';
import { isArray, isObject } from 'lodash';
import type { SomeObject } from '../../commonTypes';
import type { GetSuggestionItemProps, SuggestionItemComputedProps } from './types';
import { checkIsTheSameObject } from '../../utils';
import { selectAllSuggestion, SelectedState } from '../../components/MultiSelect/constants';

export const getText = (suggestion?: string | number | SomeObject | null, textField?: string): string => {
  if (!suggestion) return '';

  if (!textField) return suggestion.toString();

  return isObject(suggestion) ? ((suggestion as SomeObject)[textField] as string | number | undefined || '').toString() : suggestion.toString();
};

export const scrollToSuggestion = (
  containerRef: React.MutableRefObject<HTMLElement | null>,
  suggestionRef: React.MutableRefObject<HTMLElement | null>,
): void => {
  if (!containerRef.current || !suggestionRef.current) return;

  const suggestionRect = suggestionRef.current.getBoundingClientRect();

  const containerRect = containerRef.current.getBoundingClientRect();

  const padding = 2;

  const offset = (() => {
    if (suggestionRect.top < containerRect.top) {
      return suggestionRect.top - containerRect.top - padding;
    }
    if (containerRect.bottom < suggestionRect.bottom) {
      return suggestionRect.bottom - containerRect.bottom + padding;
    }
    return 0;
  })();

  if (offset) containerRef.current.scrollBy?.(0, offset);
};

export const getSuggestionItemProps = ({
  compareObjectsBy,
  suggestion,
  textField,
  placeholder,
  highlightedSuggestion,
  selectedSuggestion,
  selectAllState,
}: GetSuggestionItemProps): SuggestionItemComputedProps => {
  const text = getText(suggestion, textField);

  const isSelectAllItem = suggestion === selectAllSuggestion;

  const isPlaceholder = text === placeholder;
  const isHighlighted = checkIsTheSameObject({
    compareObjectsBy,
    obj1: suggestion,
    obj2: highlightedSuggestion,
  });
  const isSelected = (() => {
    if (isSelectAllItem) {
      return selectAllState === SelectedState.All || selectAllState === SelectedState.Some;
    }

    // MultiSelect mode
    if (isArray(selectedSuggestion)) {
      return selectedSuggestion.some((selected) => checkIsTheSameObject({
        compareObjectsBy,
        obj1: suggestion,
        obj2: selected,
      }));
    }

    return checkIsTheSameObject({
      compareObjectsBy,
      obj1: suggestion,
      obj2: selectedSuggestion,
    });
  })();

  // whether the current element is the target of scrollToSuggestion
  const isScrollTarget = (() => {
    if (highlightedSuggestion) return isHighlighted;
    if (isArray(selectedSuggestion)) return false; // do not scroll to selected items in MultiSelect mode
    return isSelected;
  })();

  const key = isObject(suggestion) ? JSON.stringify(suggestion) : suggestion as string;

  const item = suggestion === placeholder ? null : suggestion;

  return {
    text,
    isHighlighted,
    isPlaceholder,
    isSelected,
    selectAllState, // todo: remove
    isSelectAllItem,
    isScrollTarget,
    key,
    item,
  };
};
