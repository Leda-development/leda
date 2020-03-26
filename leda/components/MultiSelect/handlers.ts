import * as React from 'react';
import {
  BlurData,
  ClearData,
  FocusData,
  KeyDownData,
  MouseDownData,
  MultiSelectProps,
  SelectData,
  Value,
} from './types';
import { CustomEventHandler, SetState } from '../../commonTypes';
import { SuggestionTarget } from '../../src/SuggestionList/types';
import { filterData } from './helpers';

export const createFocusHandler = (
  props: MultiSelectProps, extraData: FocusData,
): React.FocusEventHandler<HTMLInputElement> => (event) => {
  extraData.setFocused(true);

  props.onFocus?.({
    ...event,
    component: {
      name: props.name,
      value: extraData.value,
    },
  });
};

export const createBlurHandler = (
  props: MultiSelectProps, extraData: BlurData,
): React.FocusEventHandler<HTMLInputElement> => (event) => {
  const isValid = extraData.validateCurrent();

  extraData.setFocused(false);

  extraData.setFilterValue('');

  props.onBlur?.({
    ...event,
    component: {
      name: props.name,
      value: extraData.value,
      isValid,
    },
  });
};

export const createSelectHandler = (
  props: MultiSelectProps, extraData: SelectData,
): CustomEventHandler<React.KeyboardEvent<HTMLElement> & SuggestionTarget | React.MouseEvent<HTMLElement> & SuggestionTarget> => (event) => {
  if (props.isDisabled) return;

  const {
    setValue, value, setFilterValue,
  } = extraData;

  const shouldRemoveValue = value.includes(event.target.value);

  const newValue = (() => {
    if (shouldRemoveValue) {
      return value.filter((item) => item !== event.target.value);
    }

    return [...value, event.target.value];
  })();

  if (props.maxSelected != null && newValue.length === props.maxSelected) {
    setFilterValue('');
  }

  if (props.value === undefined) setValue(newValue);

  props.onChange?.({
    ...event,
    component: {
      value: newValue,
      name: props.name,
      deselectedValues: shouldRemoveValue ? [event.target.value] : undefined,
      selectedValue: shouldRemoveValue ? undefined : event.target.value,
    },
  });
};

export const createClearHandler = (
  props: MultiSelectProps, extraData: ClearData,
): React.MouseEventHandler<HTMLElement> => (event) => {
  if (props.isDisabled) return;

  const { setValue, value } = extraData;

  if (props.value === undefined) setValue([]);

  props.onChange?.({
    ...event,
    component: {
      value: [],
      name: props.name,
      deselectedValues: value,
    },
  });
};

export const createMouseDownHandler = (
  props: MultiSelectProps, extraData: MouseDownData,
): React.MouseEventHandler<HTMLElement> => (event) => {
  // предотвращаем скролл страницы
  event.preventDefault();

  if (extraData.inputRef.current) {
    extraData.inputRef.current.focus();
  }
};

export const createKeyDownHandler = (
  props: MultiSelectProps, extraData: KeyDownData,
): React.KeyboardEventHandler<HTMLInputElement> => (event) => {
  if (!props.data) return;

  const filteredData = filterData({
    data: props.data,
    filterValue: extraData.filterValue,
    textField: props.textField,
    filterRule: props.filterRule,
    value: extraData.value,
    compareObjectsBy: props.compareObjectsBy,
  }) || [];

  const highlightedItem = filteredData.find((item) => item === extraData.highlightedSuggestion);

  const currentIndex = filteredData.indexOf(highlightedItem || '');

  if (event.key === 'ArrowDown' || event.key === 'Down') {
    // предотвращаем скролл страницы
    event.preventDefault();

    const nextIndex = (currentIndex + 1) % filteredData.length;

    const newHighlightedSuggestion = filteredData[nextIndex];

    extraData.setHighlightedSuggestion(newHighlightedSuggestion);

    return;
  }

  if (event.key === 'ArrowUp' || event.key === 'Up') {
    // предотвращаем скролл страницы
    event.preventDefault();

    const nextIndex = (currentIndex > 0 ? currentIndex : filteredData.length) - 1;

    const newHighlightedSuggestion = filteredData[nextIndex];

    extraData.setHighlightedSuggestion(newHighlightedSuggestion);

    return;
  }

  if (event.key === 'Enter') {
    if (!extraData.highlightedSuggestion) return;

    extraData.setHighlightedSuggestion(undefined);

    extraData.handleSelect({
      ...event,
      target: {
        ...event.target,
        value: extraData.highlightedSuggestion,
      },
    });

    return;
  }

  if (event.key === 'Backspace') {
    if (extraData.filterValue || extraData.value.length === 0) return;

    extraData.handleSelect({
      ...event,
      target: {
        ...event.target,
        value: extraData.value[extraData.value.length - 1],
      },
    });
  }
};

export const createResetHandler = ({
  props,
  setValue,
  deselectedValues,
  resetValue,
}: {
  props: MultiSelectProps,
  setValue: SetState<Value[]>,
  deselectedValues: Value[],
  resetValue: Value[],
}) => () => {
  setValue(resetValue);

  props.onChange?.({
    component: {
      name: props.name,
      value: resetValue,
      deselectedValues,
      selectedValue: undefined,
    },
  });
};
