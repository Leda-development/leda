import * as React from 'react';
import { isFunction, isNil } from 'lodash';
import { CustomEventHandler, SetState } from '../../commonTypes';
import { Guards } from '../../utils/monads';
import {
  extractValue, formatInputValue, formatValue, getSeparator, normalizeValue,
} from './helpers';
import {
  FocusEvent,
  ChangeEvent,
  NumericHandlers,
  EnterPressEvent,
  NormalizeParameters,
} from './types';

export const createFocusHandler = (
  value: number | null,
  inputValue: string,
  onFocus: CustomEventHandler<FocusEvent> | undefined,
  setFocused: SetState<boolean>,
  format: string,
  thousandsSeparator: string,
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  name?: string,
): NumericHandlers['handleFocus'] => ev => {
  const customEvent = {
    ...ev,
    component: {
      name,
      value,
      formattedValue: formatValue(value, format, thousandsSeparator),
    },
  };

  if (isFunction(onFocus)) onFocus(customEvent);

  setFocused(true);

  setTimeout(() => {
    // ассинхронная установка выделения
    if (inputRef.current) inputRef.current.setSelectionRange(0, inputValue.length);
  }, 0);
};

export const createBlurHandler = (
  value: number | null,
  onBlur: CustomEventHandler<FocusEvent> | undefined,
  onChange: CustomEventHandler<ChangeEvent> | undefined,
  setFocused: SetState<boolean>,
  setUncontrolledValue: SetState<number | null>,
  setInputValue: SetState<string>,
  validate: (value: number | null) => boolean,
  format: string,
  thousandsSeparator: string,
  min?: number,
  max?: number,
  name?: string,
): NumericHandlers['handleBlur'] => ev => {
  const normalizeValueParams: NormalizeParameters = {
    value,
    min,
    max,
    format,
  };

  const newValue = normalizeValue(normalizeValueParams);
  const formattedValue = formatValue(newValue, format, thousandsSeparator);

  const customChangeEvent = {
    ...ev,
    component: {
      name,
      value: newValue,
      formattedValue,
    },
  };

  if (newValue !== value && isFunction(onChange)) onChange(customChangeEvent);

  const isValid = validate(newValue);

  const customBlurEvent = {
    ...ev,
    component: {
      name,
      value: newValue,
      isValid,
      formattedValue,
    },
  };

  if (isFunction(onBlur)) onBlur(customBlurEvent);

  setFocused(false);

  setUncontrolledValue(newValue);

  setInputValue(formatInputValue(formattedValue, format));
};

export const createChangeHandler = (
  value: number | null,
  onChange: CustomEventHandler<ChangeEvent> | undefined,
  setUncontrolledValue: SetState<number | null>,
  setInputValue: SetState<string>,
  format: string,
  thousandsSeparator: string,
  name?: string,
): NumericHandlers['handleChange'] => ev => {
  const separator = getSeparator(format);

  if ((ev.target.value.match(new RegExp(`\\${separator}` || '', 'ig')) || []).length === 2) return;

  if ((ev.target.value.match(new RegExp('-' || '', 'ig')) || []).length === 2) return;

  const newValue = extractValue(ev.target.value, format, thousandsSeparator);

  const newInputValue = formatInputValue(ev.target.value, format);

  const customEvent = {
    ...ev,
    component: {
      name,
      value: newValue,
      formattedValue: formatValue(newValue, format, thousandsSeparator),
    },
  };

  if (isFunction(onChange) && newValue !== value) onChange(customEvent);

  setUncontrolledValue(newValue);

  setInputValue(newInputValue);
};

export const createKeyDownHandler = (
  value: number | null,
  onChange: CustomEventHandler<ChangeEvent> | undefined,
  onEnterPress: CustomEventHandler<EnterPressEvent> | undefined,
  setUncontrolledValue: SetState<number | null>,
  setInputValue: SetState<string>,
  step: number,
  thousandsSeparator: string,
  format: string,
  name?: string,
): NumericHandlers['handleKeyDown'] => ev => {
  if (ev.key === 'Enter' && isFunction(onEnterPress)) {
    const event = {
      ...ev,
      component: {
        name,
        value,
      },
    };
    onEnterPress(event);
  }

  const sign = Guards(ev.key)
    .when((inwards: string): inwards is string => inwards === 'ArrowUp' || inwards === 'Up', () => 1)
    .when((inwards: string): inwards is string => inwards === 'ArrowDown' || inwards === 'Down', () => -1)
    .otherwise(() => null)
    .getValue();

  if (!sign) return;

  const newValue = (value as number) + (step * sign);

  const formattedValue = formatValue(newValue, format, thousandsSeparator);

  const newInputValue = formatInputValue(formattedValue, format);

  ev.preventDefault();

  const customEvent = {
    ...ev,
    component: {
      name,
      value: newValue,
      formattedValue,
    },
  };

  if (isFunction(onChange)) onChange(customEvent);

  setUncontrolledValue(newValue);

  setInputValue(newInputValue);
};

export const createPasteHandler = (
  onChange: CustomEventHandler<ChangeEvent> | undefined,
  setUncontrolledValue: SetState<number | null>,
  format: string,
  thousandsSeparator: string,
  name?: string,
): NumericHandlers['handlePaste'] => ev => {
  const newValue = extractValue(
    ev.clipboardData.getData('text/plain').replace(/[^\d.,]/g, ''),
    format,
    thousandsSeparator,
  );

  const customEvent = {
    ...ev,
    component: {
      name,
      value: newValue,
      formattedValue: formatValue(newValue, format),
    },
  };

  if (isFunction(onChange)) onChange(customEvent);

  setUncontrolledValue(newValue);
};

export const createArrowButtonClick = (
  value: number | null,
  onChange: CustomEventHandler<ChangeEvent> | undefined,
  onClick: React.MouseEventHandler| undefined,
  isDisabled: boolean | undefined,
  setUncontrolledValue: SetState<number | null>,
  setInputValue: SetState<string>,
  validate: (value?: number | null) => boolean,
  step: number,
  thousandsSeparator: string,
  format: string,
  min?: number,
  max?: number,
  name?: string,
): NumericHandlers['handleArrowButtonClick'] => type => ev => {
  if (isDisabled) return;

  const sign = Guards(type)
    .when((inwards: string): inwards is 'increase' => type === 'increase', () => 1)
    .when((inwards: string): inwards is 'decrease' => type === 'decrease', () => -1)
    .otherwise(() => null)
    .getValue();

  if (!sign) return;

  const normalizeValueParams: NormalizeParameters = {
    value,
    min,
    max,
    format,
    step,
    sign,
  };

  const newValue = normalizeValue(normalizeValueParams);

  const formattedValue = formatValue(newValue, format, thousandsSeparator);

  const newInputValue = formatInputValue(formattedValue, format);

  ev.preventDefault();

  const customEvent = {
    ...ev,
    component: {
      name,
      value: newValue,
      formattedValue,
    },
  };

  if (isFunction(onChange)) onChange(customEvent);

  if (isFunction(onClick)) onClick(ev);

  setUncontrolledValue(newValue);

  setInputValue(newInputValue);

  validate(newValue);
};
