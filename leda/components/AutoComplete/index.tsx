'use client';

import * as React from 'react';
import {
  isString, isBoolean,
} from 'lodash';
import { SuggestionList } from '../../src/SuggestionList';
import {
  getClassNames,
  getIsEmptyAndRequired,
  useElement,
  useProps,
  useTheme,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { Div } from '../Div';
import {
  getSuggestions,
  safeTrim,
} from './helpers';
import {
  inputBlurHandlerCreator,
  inputChangeHandlerCreator,
  inputFocusHandlerCreator,
  inputKeyDownHandlerCreator,
  suggestionClickHandlerCreator,
  clearButtonClickHandlerCreator,
  createResetHandler,
} from './handlers';

import type {
  AutoCompleteProps, Suggestion,
} from './types';
import { useValidation } from '../Validation';
import { LedaContext } from '../LedaProvider';
import { Icon } from '../Icon';
import { Icons } from '../Icon/types';
import { useMessages } from '../../utils/useMessages';

export const AutoComplete = React.forwardRef((props: AutoCompleteProps, ref: React.Ref<HTMLElement>): React.ReactElement | null => {
  const {
    autoComplete = 'off',
    className,
    compareObjectsBy,
    data,
    filterRule,
    form,
    groupBy,
    hasClearButton,
    inputRender,
    invalidMessage,
    invalidMessageRender,
    isDisabled,
    isLoading,
    isOpen,
    isRequired,
    isValid: isValidProp,
    itemRender,
    listRender,
    messages,
    minSearchLength,
    name,
    noSuggestionsRender,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    placeholder,
    requiredMessage,
    searchFields,
    shouldCorrectValue,
    shouldShowAllSuggestions,
    shouldShowEmptySuggestionsList ,
    shouldValidateUnmounted,
    sortSuggestions,
    textField,
    theme: themeProp,
    validator,
    value: propValue,
    ...restProps
  } = useProps(props);

  // todo handle props format errors

  const isValueControlled = propValue === null || isString(propValue);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.autoComplete);

  const msg = useMessages({
    fieldName: COMPONENTS_NAMESPACES.autoComplete,
    messages,
  });

  const [stateValue, setStateValue] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = React.useState<Suggestion>(null);
  const [highlightedSuggestion, setHighlightedSuggestion] = React.useState<Suggestion>(null);
  const [lastCorrectValue, setLastCorrectValue] = React.useState('');

  const autoCompleteState = React.useMemo(() => ({
    highlightedSuggestion,
    isFocused,
    lastCorrectValue,
    selectedSuggestion,
    stateValue,
  }), [highlightedSuggestion, isFocused, lastCorrectValue, selectedSuggestion, stateValue]);

  const {
    isValid, validateCurrent, InvalidMessage,
  } = useValidation(props, {
    value: stateValue,
    suggestion: selectedSuggestion,
  }, {
    reset: createResetHandler({
      props, setStateValue, value: '',
    }),
  });

  const value = isValueControlled ? propValue : stateValue;
  const inputValue = value === null ? '' : value;
  const suggestionListValue = value === undefined ? null : value;

  const suggestions = getSuggestions({
    data, textField, value, filterRule, isOpen, minSearchLength, shouldShowAllSuggestions, searchFields,
  });

  const isSuggestionsListOpen = (() => {
    if (isDisabled) return false;

    if (suggestions.length === 0 && safeTrim(value).length === 0) return false;

    if (isBoolean(isOpen)) return isOpen;

    // do not show dropdown list until minimal input length is reached
    if (
      minSearchLength && minSearchLength > 0 && value != null
      && value.length < minSearchLength
    ) {
      return false;
    }

    return isFocused;
  })();

  const inputChangeHandler = inputChangeHandlerCreator({
    data, textField, name, onChange, isValueControlled, setSelectedSuggestion, setStateValue,
  });
  const suggestionClickHandler = suggestionClickHandlerCreator({
    data, textField, name, onChange, isValueControlled, setHighlightedSuggestion, setSelectedSuggestion, setStateValue, setIsFocused,
  });
  const clearButtonClickHandler = clearButtonClickHandlerCreator({
    name, onChange, isValueControlled, setStateValue, isDisabled, setSelectedSuggestion,
  });
  const inputFocusHandler = inputFocusHandlerCreator({
    onFocus, setIsFocused,
  });
  const inputBlurHandler = inputBlurHandlerCreator({
    isValueControlled,
    lastCorrectValue,
    props,
    setIsFocused,
    setLastCorrectValue,
    setStateValue,
    validateCurrent,
    value,
  });
  const inputKeyDownHandler = inputKeyDownHandlerCreator({
    highlightedSuggestion,
    isSuggestionsListOpen,
    isValueControlled,
    props,
    setHighlightedSuggestion,
    setSelectedSuggestion,
    setIsFocused,
    setStateValue,
    suggestions,
  });

  const shouldShowClearButton = hasClearButton && value && value.length > 0;

  const wrapperClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  const inputWrapperClassNames = getClassNames(
    theme.inputWrapper,
    {
      [theme.inputWrapperDisabled]: isDisabled,
      [theme.inputWrapperFocused]: isFocused,
      [theme.inputWrapperInvalid]: !isValid,
      [theme.inputWrapperRequired]: getIsEmptyAndRequired(value, isRequired),
    },
  );

  const { renders: { [COMPONENTS_NAMESPACES.autoComplete]: autoCompleteRenders } } = React.useContext(LedaContext);

  const InputElement = useElement(
    'Input',
    'input' as unknown as React.FC<React.InputHTMLAttributes<HTMLInputElement>>,
    inputRender ?? autoCompleteRenders.inputRender,
    props,
    autoCompleteState,
  );

  const suggestionListData = sortSuggestions ? [...suggestions].sort(sortSuggestions) : suggestions;

  return (
    <Div
      className={wrapperClassNames}
      ref={ref}
    >
      <Div className={inputWrapperClassNames}>
        <InputElement
          {...restProps}
          aria-invalid={!isValid}
          aria-required={isRequired}
          autoComplete={autoComplete}
          className={theme.input}
          disabled={isDisabled}
          form={form}
          name={name}
          onBlur={inputBlurHandler}
          onChange={inputChangeHandler}
          onFocus={inputFocusHandler}
          onKeyDown={inputKeyDownHandler}
          placeholder={placeholder}
          value={inputValue}
        />
        {shouldShowClearButton && (
          <Icon
            icon={Icons.X}
            className={theme.closeIcon}
            onClick={clearButtonClickHandler}
          />
        )}
      </Div>
      {(suggestionListData.length > 0 || shouldShowEmptySuggestionsList) && (
        <SuggestionList
          compareObjectsBy={compareObjectsBy}
          data={suggestionListData}
          groupBy={groupBy}
          highlightedSuggestion={highlightedSuggestion}
          isLoading={isLoading}
          isOpen={isSuggestionsListOpen}
          itemRender={itemRender}
          listRender={listRender}
          noSuggestionsText={msg.nothingFound}
          noSuggestionsRender={noSuggestionsRender}
          onClick={suggestionClickHandler}
          placeholder={placeholder}
          selectedSuggestion={selectedSuggestion}
          shouldAllowEmpty={false}
          textField={textField}
          theme={theme}
          value={suggestionListValue}
        />
      )}
      
      {!isDisabled && !isLoading && !isSuggestionsListOpen && !isFocused && (
        <InvalidMessage />
      )}
    </Div>
  );
}) as <T extends Suggestion>(props: AutoCompleteProps<T>) => React.ReactElement;

(AutoComplete as React.FC<AutoCompleteProps>).displayName = 'AutoComplete';
