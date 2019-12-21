import * as React from 'react';
import { isFunction } from 'lodash';
import { CustomEventHandler, SetState } from '../../commonTypes';
import { InputProps, InputState } from './types';
import { isSymbolAllowed, isSymbolForbidden, transformToCase } from './helpers';

export const createChangeHandler = (
  props: InputProps, state: InputState, setValue: SetState<string>,
): CustomEventHandler<React.ChangeEvent<HTMLInputElement>> => ev => {
  const {
    maxLength, forbiddenSymbols, allowedSymbols, letterCase, value: valueProp, name, onChange,
  } = props;

  const { target: { value } } = ev;

  if (maxLength && value.length > maxLength) return;

  if (isSymbolForbidden(value, forbiddenSymbols)) return;

  if (!isSymbolAllowed(value, allowedSymbols)) return;

  const newValue = letterCase ? transformToCase(value, letterCase) : value;

  if (valueProp === undefined) setValue(value);

  const customEvent = {
    ...ev,
    component: {
      value: newValue,
      name,
    },
  };

  if (isFunction(onChange)) onChange(customEvent);
};

export const createClearHandler = (
  props: InputProps, state: InputState, setValue: SetState<string>,
): CustomEventHandler<React.MouseEvent<HTMLInputElement>> => ev => {
  const {
    value: valueProp, name, onChange,
  } = props;

  ev.preventDefault();

  const customEvent = {
    ...ev,
    component: {
      value: '',
      name,
    },
  };

  if (valueProp === undefined) setValue('');

  if (isFunction(onChange)) onChange(customEvent);
};

export const createBlurHandler = (
  props: InputProps, state: InputState, setFocused: SetState<boolean>, validate: () => boolean,
): React.FocusEventHandler<HTMLInputElement> => ev => {
  const { onBlur, name } = props;

  setFocused(false);

  const newValid = validate();

  if (isFunction(onBlur)) {
    const customEvent = {
      ...ev,
      component: {
        value: ev.target.value,
        name,
        isValid: newValid,
      },
    };

    onBlur(customEvent);
  }
};

export const createFocusHandler = (
  props: InputProps, state: InputState, setFocused: SetState<boolean>,
): React.FocusEventHandler<HTMLInputElement> => ev => {
  const { name, onFocus } = props;

  const { isValid } = state;

  setFocused(true);

  const customEvent = {
    ...ev,
    component: {
      value: ev.target.value,
      name,
      isValid,
    },
  };

  if (isFunction(onFocus)) onFocus(customEvent);
};

export const createKeyDownHandler = (
  props: InputProps,
): React.KeyboardEventHandler<HTMLInputElement> => ev => {
  const { name, onEnterPress } = props;

  if (ev.key === 'Enter' && isFunction(onEnterPress)) {
    const event = {
      ...ev,
      component: {
        name,
        value: ev.currentTarget.value,
      },
    };
    onEnterPress(event);
  }
};
