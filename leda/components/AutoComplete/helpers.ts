import * as React from 'react';
import {
  every, isArray, isFunction, isNil, isObject, isString,
} from 'lodash';

import { SomeObject } from '../../commonTypes';
import {
  AutoCompleteProps,
  CHANGE_METHOD,
  ChangeEvent,
  DataObject,
  SuggestionsVal,
  Suggestion,
} from './types';

import { FILTER_RULES, filterSuggestionByRule } from '../../utils';

export const safeTrim = (value?: string | null): string => {
  if (isNil(value)) return '';
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

// возвращает список строк, которые содержат строку из инпута
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
  if (minSearchLength && minSearchLength > 0 && trimmedValue.length < minSearchLength) return [];

  if (shouldShowAllSuggestions) return data;

  const newData = (() => {
    const changedData = (data as (string | DataObject)[]).filter((suggestion: string | DataObject): boolean => {
      // обработка массива строк
      if (typeof suggestion === 'string') {
        return filterSuggestionByRule(suggestion, trimmedValue, filterRule);
      }

      // если нужно искать по дополнительным полям в объекте
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

      // обработка массива обьектов
      if (textField && suggestion[textField]) {
        const suggestionValue = suggestion[textField].toString();
        return filterSuggestionByRule(suggestionValue, trimmedValue, filterRule);
      }

      return true;
    });

    const filteredData = (() => changedData.map((suggestion) => {
      // обработка массива объектов групп
      if ((suggestion as SomeObject)?.items && textField) {
        const returnDataItem = (suggestion as SomeObject).items?.filter((item: any) => trimmedValue !== item[textField].toString())
        .filter((item: any) => filterSuggestionByRule(item[textField].toString(), trimmedValue, filterRule)).filter((item: any) => item);

        if (returnDataItem.length) {
          const newDat = { ...(suggestion as DataObject), items: returnDataItem };
          return newDat;
        }

        return false;
      }

      return suggestion;
    }))().filter((item) => item);

    return filteredData;
  })();

  return newData as string[] | DataObject[];
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
export const getSuggestionValue = (suggestion: DataObject | string, textField?: string): string => {
  const suggestionString = (textField && typeof suggestion === 'object') // flow checks
    ? suggestion[textField]
    : suggestion;

  // make flow happy
  if (suggestionString && typeof suggestionString !== 'string') {
    return suggestionString.toString();
  }

  return suggestionString || '';
};

export const correctValue = ({
  event,
  isValueControlled,
  lastCorrectValue,
  props,
  setLastCorrectValue,
  setStateValue,
}: {
  event: React.FocusEvent<HTMLInputElement>,
  isValueControlled: boolean,
  lastCorrectValue: string,
  props: AutoCompleteProps,
  setLastCorrectValue: (val: string) => void,
  setStateValue: (val: string) => void,
}): void => {
  // если value нет в data
  // использовать последнее корректное (есть в списке data, или пустое) value
  const {
    data, name, textField, onChange, value, filterRule = FILTER_RULES.smart, isOpen, minSearchLength,
  } = props;

  const dataIncludesValue = (getSuggestions({
    data, textField, value, filterRule, isOpen, minSearchLength,
  }) as (string | DataObject)[])
    .map((suggestion: string | DataObject): string => getSuggestionValue(suggestion, textField))
    .includes(value || '');

  // если значение корректно, записать его в lastCorrectValue
  if (value === '' || dataIncludesValue) {
    setLastCorrectValue(value || '');

    // если значение не корректно, передать наверх последнее корректное значение
  } else {
    const newValue = lastCorrectValue;

    if (isFunction(onChange)) {
      const suggestion = getSuggestionFromValue({ data, value: newValue, textField });

      const customEvent: ChangeEvent = {
        ...event,
        component: {
          method: CHANGE_METHOD.trigger,
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
