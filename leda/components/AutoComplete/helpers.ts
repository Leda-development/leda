import type * as React from 'react';
import {
  every, isArray, isFunction, isObject, isString, isNumber,
} from 'lodash';

import type {
  AutoCompleteProps,
  ChangeEvent,
  DataObject,
  SuggestionsVal,
  Suggestion,
} from './types';
import {
  ChangeMethod,
} from './types';

import { FILTER_RULES, filterSuggestionByRule } from '../../utils';

export const safeTrim = (value?: string | null): string => {
  if (value == null) {
    return '';
  }
  return value.trim();
};

export const getSuggestionFromValue = ({
  data,
  value,
  textField,
}: {
  data: Suggestion[],
  value: string | DataObject,
  textField?: string,
}): Suggestion => {
  const isEveryIsObject = every(data, isObject);

  const isValidTextField = isString(textField) && textField.length > 0;

  if (isEveryIsObject && !isValidTextField) {
    // todo: handle textField error
  }

  const suggestion: Suggestion | undefined = isEveryIsObject
    ? (data as DataObject[]).find((el: DataObject): boolean => (el[textField as string] === value))
    : (data as string[]).find((el: string): boolean => (el === value));

  return suggestion || null;
};

// returns suggestions containing the string from the input
export const getSuggestions = ({
  data,
  textField,
  value,
  filterRule,
  isOpen,
  minSearchLength,
  shouldShowAllSuggestions,
  searchFields,
}: SuggestionsVal): Suggestion[] => {
  const trimmedValue = safeTrim(value);

  if (trimmedValue === '' && isOpen) return data;

  if (trimmedValue === '' && minSearchLength === 0) return data;

  if (trimmedValue === '') return [];

  // do not perform search until minimal input length is reached
  if (
    minSearchLength && minSearchLength > 0 && value != null
    && value.length < minSearchLength
  ) {
    return [];
  }

  if (shouldShowAllSuggestions) return data;

  return data.filter((suggestion) => {
    if (suggestion === null) return false;

    // handling an array of strinds
    if (typeof suggestion === 'string') {
      return filterSuggestionByRule(suggestion, trimmedValue, filterRule);
    }

    if (typeof suggestion === 'number') {
      return value === suggestion.toString();
    }

    // if additional object fields search is required
    if (isArray(searchFields) && textField && suggestion[textField]) {
      const suggestionValue = suggestion[textField].toString();
      const isValueMatchingTextField = filterSuggestionByRule(suggestionValue, trimmedValue, filterRule);

      const isValueMatchingSearchFields = searchFields.some((searchField) => {
        const isValueMatchingSearchField = filterSuggestionByRule(
          suggestion[searchField].toString(),
          trimmedValue,
          filterRule,
        );
        return isValueMatchingSearchField;
      });

      return isValueMatchingTextField || isValueMatchingSearchFields;
    }

    // handling an array of objects
    if (textField && suggestion[textField]) {
      const suggestionValue = suggestion[textField].toString();
      return filterSuggestionByRule(suggestionValue, trimmedValue, filterRule);
    }

    return false;
  });
};

export const getSuggestionValue = (suggestion: Suggestion, textField?: string): string => {
  if (suggestion === null) {
    return '';
  }

  if (isString(suggestion)) {
    return suggestion;
  }

  if (isNumber(suggestion)) {
    return suggestion.toString();
  }

  if (typeof (textField) === 'string') {
    return suggestion[textField];
  }

  return suggestion.toString();
};

export const correctValue = ({
  event,
  isValueControlled,
  lastCorrectValue,
  props,
  setLastCorrectValue,
  setStateValue,
  value,
}: {
  event: React.FocusEvent<HTMLInputElement>,
  isValueControlled: boolean,
  lastCorrectValue: string,
  props: AutoCompleteProps,
  setLastCorrectValue: (val: string) => void,
  setStateValue: (val: string) => void,
  value?: string | null,
}): void => {
  // if data does not contain the value
  // use the last valid (either exists in data or empty) value
  const {
    data, name, textField, onChange, filterRule = FILTER_RULES.smart, isOpen, minSearchLength,
  } = props;

  const suggestions = getSuggestions({
    data, textField, value, filterRule, isOpen, minSearchLength,
  });

  const suggestionValues = suggestions.map((suggestion) => getSuggestionValue(suggestion, textField));

  const dataIncludesValue = suggestionValues.includes(value || '');

  // if the value is valid put in into lastCorrectValue
  // or pass back the last correct value
  if (value === '' || dataIncludesValue) {
    setLastCorrectValue(value || '');
  } else {
    const newValue = lastCorrectValue;

    if (isFunction(onChange)) {
      const suggestion = getSuggestionFromValue({ data, value: newValue, textField });

      const customEvent: ChangeEvent = {
        ...event,
        component: {
          method: ChangeMethod.trigger,
          name,
          suggestion,
          value: newValue,
        },
      };

      if (isFunction(onChange)) onChange(customEvent);
    }

    if (!isValueControlled) setStateValue(lastCorrectValue);
  }
};
