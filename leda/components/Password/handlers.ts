import * as React from 'react';
import { SetState } from '../../commonTypes';
import { PasswordProps } from './types';
import * as helpers from './helpers';

export const useBlurHandler = (
  props: PasswordProps,
  setFocused: SetState<boolean>,
  validate: () => boolean,
): React.FocusEventHandler<HTMLInputElement> => React.useCallback((event) => {
  setFocused(false);

  const isValid = validate();

  props.onBlur?.({
    ...event,
    component: {
      name: props.name,
      value: event.target.value,
      isValid,
    },
  });
}, [props, setFocused, validate]);

export const useChangeHandler = (
  props: PasswordProps,
  setEvaluationMessage: SetState<string | undefined>,
  setValue: SetState<string>,
): React.ChangeEventHandler<HTMLInputElement> => React.useCallback((event) => {
  if (props.maxLength && props.maxLength < event.target.value.length) {
    return;
  }

  const newMessage = helpers.evaluatePassword(event.target.value, props.passwordEvaluator);

  setEvaluationMessage(newMessage);

  if (props.value == null) {
    setValue(event.target.value);
  }

  props.onChange?.({
    ...event,
    component: {
      name: props.name,
      value: event.target.value,
    },
  });
}, [props, setEvaluationMessage, setValue]);

export const useFocusHandler = (
  props: PasswordProps,
  isValid: boolean,
  setFocused: SetState<boolean>,
): React.FocusEventHandler<HTMLInputElement> => React.useCallback((event) => {
  setFocused(true);

  props.onFocus?.({
    ...event,
    component: {
      name: props.name,
      value: event.target.value,
      isValid,
    },
  });
}, [props, setFocused, isValid]);

export const useKeyDownHandler = (
  props: PasswordProps,
): React.KeyboardEventHandler<HTMLInputElement> => React.useCallback((event) => {
  if (event.key === 'Enter') {
    props.onEnterPress?.({
      ...event,
      component: {
        name: props.name,
        value: event.currentTarget.value,
      },
    });
  }
}, [props]);

export const useMouseDownHandler = (
  props: PasswordProps,
  setValue: SetState<string>,
): React.MouseEventHandler<HTMLInputElement> => React.useCallback((event) => {
  event.preventDefault();

  if (props.value == null) {
    setValue('');
  }

  props.onChange?.({
    ...event,
    component: {
      name: props.name,
      value: '',
    },
  });
}, [props, setValue]);
