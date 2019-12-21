import { isFunction } from 'lodash';
import React from 'react';
import { TextareaProps } from './types';
import { SetState } from '../../commonTypes';

export const createChangeHandler = (
  props: TextareaProps, setValue: SetState<string>,
): React.ChangeEventHandler<HTMLTextAreaElement> => ev => {
  const {
    onChange, maxLength, value: valueProp, name,
  } = props;

  const { value: eventValue } = ev.target;

  if (maxLength && eventValue.length > maxLength) return;

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        value: eventValue,
        name,
      },
    };

    onChange(customEvent);
  }

  if (valueProp === undefined) setValue(eventValue);
};

export const createBlurHandler = (
  props: TextareaProps, validate: () => boolean, setIsFocused: SetState<boolean>,
): React.FocusEventHandler<HTMLTextAreaElement> => ev => {
  const { onBlur, name } = props;

  const isValid = validate();

  if (isFunction(onBlur)) {
    const customEvent = {
      ...ev,
      component: {
        value: ev.target.value,
        name,
        isValid,
      },
    };

    onBlur(customEvent);
  }

  setIsFocused(false);
};

export const createFocusHandler = (
  props: TextareaProps, isValid: boolean, setIsFocused: SetState<boolean>,
): React.FocusEventHandler<HTMLTextAreaElement> => ev => {
  const { onFocus, name } = props;

  if (isFunction(onFocus)) {
    const customEvent = {
      ...ev,
      component: {
        value: ev.target.value,
        name,
        isValid,
      },
    };

    onFocus(customEvent);
  }

  setIsFocused(true);
};

export const createKeyDownHandler = (
  props: TextareaProps,
): React.KeyboardEventHandler<HTMLTextAreaElement> => ev => {
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
