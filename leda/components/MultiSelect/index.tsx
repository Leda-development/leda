'use client';

import * as React from 'react';
import { isNil } from 'lodash';
import type {
  MultiSelectComponent, MultiSelectProps, Value,
} from './types';
import {
  getClassNames, getIsEmptyAndRequired, useElement, useProps, useTheme,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { useValidation } from '../Validation';
import { SuggestionList } from '../../src/SuggestionList';
import {
  createBlurHandler,
  createClearHandler,
  createFocusHandler,
  createKeyDownHandler,
  createMouseDownHandler,
  createResetHandler,
  createSelectHandler,
} from './handlers';
import { TagsContainer } from './TagsContainer';
import { Div } from '../Div';
import { LedaContext } from '../LedaProvider';
import { Tag } from '../Tags';
import {
  filterData, getShouldUniteTags, getSortedSuggestions, getValue,
} from './helpers';
import { createCheckBoxesRender } from './renders';
import { selectAllSuggestion, SelectedState } from './constants';
import { Icon, IconTypes } from '../..';
import { useMessages } from '../../utils/useMessages';

export const MultiSelect = React.forwardRef((props: MultiSelectProps, ref: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    autoComplete = 'off',
    canSelectAll,
    className,
    compareObjectsBy,
    data,
    defaultValue,
    filterRule,
    form,
    groupBy,
    hasCheckBoxes,
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
    maxSelected,
    maxTags,
    messages,
    name,
    noSuggestionsRender,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    requiredMessage,
    selectAllItemRender,
    shouldHideInput,
    shouldKeepSuggestions,
    shouldSelectedGoFirst,
    shouldValidateUnmounted,
    sortSuggestions,
    tagRender,
    tagsUnionRender,
    textField,
    theme: themeProp,
    validator,
    value: valueProp,
    wrapperRender,
    ...restProps
  } = useProps(props);

  React.useEffect(() => {
    // Warn user about possible misused props
    if (hasCheckBoxes && !shouldKeepSuggestions) console.warn('Leda MultiSelect: you probably forgot using shouldKeepSuggestions with hasCheckBoxes prop.');
    if (canSelectAll && !shouldKeepSuggestions) console.warn('Leda MultiSelect: you probably forgot using shouldKeepSuggestions with canSelectAll prop.');
  }, [canSelectAll, hasCheckBoxes, shouldKeepSuggestions]);

  const [valueState, setValue] = React.useState<Value[]>(defaultValue || []);

  const [filterValue, setFilterValue] = React.useState<string>('');

  const [highlightedSuggestion, setHighlightedSuggestion] = React.useState<Value>(null);

  const value = getValue(valueProp, valueState);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.multiSelect);

  const msg = useMessages({
    fieldName: COMPONENTS_NAMESPACES.multiSelect,
    messages,
  });

  const {
    validateCurrent, isValid, InvalidMessage,
  } = useValidation(props, {
    value: valueState,
  }, {
    reset: createResetHandler({
      props, setValue, value: defaultValue || [],
    }),
  });

  const [isFocused, setFocused] = React.useState<boolean>(false);

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFocus = createFocusHandler(props, {
    value,
    setFocused,
  });

  const handleBlur = createBlurHandler(props, {
    value,
    setFocused,
    validateCurrent,
    setFilterValue,
  });

  const handleSelect = createSelectHandler(props, {
    data,
    setFilterValue,
    setFocused,
    setValue,
    value,
  });

  const handleKeyDown = createKeyDownHandler(props, {
    filterValue,
    handleSelect,
    highlightedSuggestion,
    setFocused,
    setHighlightedSuggestion,
    value,
  });

  const handleClear = createClearHandler(props, {
    setValue,
    value,
  });

  const handleMouseDown = createMouseDownHandler(props, {
    inputRef,
  });

  const wrapperClassNames = getClassNames(className, theme.wrapper);

  const inputWrapperClassNames = getClassNames(theme.inputWrapper, {
    [theme.inputWrapperFocused]: isFocused,
    [theme.inputWrapperDisabled]: isDisabled,
    [theme.inputWrapperInvalid]: !isValid,
    [theme.inputWrapperRequired]: getIsEmptyAndRequired(value, isRequired),
  });

  const { renders: { [COMPONENTS_NAMESPACES.multiSelect]: multiSelectRenders } } = React.useContext(LedaContext);

  const state = {
    value: valueState,
    isFocused,
    filterValue,
  };

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || multiSelectRenders.wrapperRender,
    props,
    state,
  );

  const Input = useElement(
    'Input',
    'input' as unknown as React.FC<React.InputHTMLAttributes<HTMLInputElement>>,
    inputRender || multiSelectRenders.inputRender,
    props,
    state,
  );

  const TagItem = useElement(
    'TagItem',
    Tag,
    tagRender || multiSelectRenders.tagRender,
    props,
    state,
  );

  const TagsUnionElement = useElement(
    'TagUnion',
    Div,
    tagsUnionRender || multiSelectRenders.tagsUnionRender,
    props,
    state,
  );

  const filteredData = filterData({
    compareObjectsBy,
    data,
    filterRule,
    filterValue,
    shouldKeepSuggestions,
    textField,
    value,
  });

  const isMaxItemsSelected = !isNil(maxSelected) && value.length === maxSelected;

  const selectedSuggestions = shouldKeepSuggestions ? value : undefined;

  const shouldUniteTags = getShouldUniteTags({ maxTags, value });

  const checkBoxesRender = createCheckBoxesRender({ itemRender, theme });

  const selectAllState = (() => {
    if (canSelectAll == null) return undefined;
    if (value.length === data?.length) return SelectedState.All;
    if (value.length === 0) return SelectedState.Nothing;
    return SelectedState.Some;
  })();

  const suggestionListData = (() => {
    const allSuggestions = getSortedSuggestions({
      shouldSelectedGoFirst,
      selectedSuggestions,
      filteredData,
      sortSuggestions,
    });

    if (canSelectAll) {
      // todo: canSelectAll
      return [selectAllSuggestion, ...allSuggestions];
    }

    return allSuggestions;
  })();

  return (
    <Wrapper
      className={wrapperClassNames}
      ref={ref}
    >
      <Div
        className={inputWrapperClassNames}
        onMouseDown={handleMouseDown}
      >
        {shouldUniteTags && (
          <>
            <TagsUnionElement className={theme.tagsUnion}>
              Выбрано {value.length}
            </TagsUnionElement>
            {hasClearButton && (
              <Icon
                icon={IconTypes.Icons.X}
                className={theme.clearIcon}
                onClick={handleClear}
              />
            )}
          </>
        )}
        {!shouldUniteTags && (
          <TagsContainer
            hasClearButton={hasClearButton}
            onClearIconClick={handleClear}
            onMouseDown={handleMouseDown}
            onTagClick={handleSelect}
            placeholder={placeholder}
            shouldHideInput={shouldHideInput}
            textField={textField}
            theme={theme}
            value={value}
          >
            <TagItem />
          </TagsContainer>
        )}
        <Input
          {...restProps}
          aria-invalid={!isValid}
          aria-required={isRequired}
          autoComplete={autoComplete}
          className={theme.input}
          disabled={isDisabled}
          form={form}
          name={name}
          onBlur={handleBlur}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
            if (shouldHideInput) return;
            setFilterValue(ev.target.value);
          }}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          ref={inputRef}
          style={(isMaxItemsSelected || shouldHideInput)
            ? {
              position: 'absolute',
              opacity: 0,
              height: 0,
              width: 0,
            }
            : undefined}
          value={filterValue}
        />
      </Div>
      {!isMaxItemsSelected && (
        <SuggestionList
          compareObjectsBy={compareObjectsBy}
          data={suggestionListData}
          groupBy={groupBy}
          highlightedSuggestion={highlightedSuggestion}
          isLoading={isLoading}
          isOpen={isNil(isOpen) ? isFocused : isOpen}
          itemRender={hasCheckBoxes ? checkBoxesRender : itemRender}
          listRender={listRender}
          noSuggestionsText={msg.nothingFound}
          noSuggestionsRender={noSuggestionsRender}
          onClick={handleSelect}
          selectAllItemRender={selectAllItemRender}
          selectAllState={selectAllState}
          selectedSuggestion={selectedSuggestions}
          shouldAllowEmpty={false}
          textField={textField}
          theme={theme}
          value={value}
        />
      )}
      {!isFocused && !isDisabled && (
        <InvalidMessage />
      )}
    </Wrapper>
  );
}) as MultiSelectComponent;

MultiSelect.displayName = 'MultiSelect';
