import type * as React from 'react';
import { isFunction, isNil } from 'lodash';
import type { SetState } from '../../commonTypes';
import type { CheckBoxProps } from './types';

export const createChangeHandler = (
  props: CheckBoxProps,
  setUncontrolledValue: SetState<boolean>,
  validateCurrent: (value?: boolean) => boolean,
): React.ChangeEventHandler<HTMLInputElement> => (ev) => {
  const { onChange, name } = props;

  setUncontrolledValue(ev.currentTarget.checked);

  validateCurrent(ev.currentTarget.checked);

  if (!isFunction(onChange)) return;

  const customEvent = {
    ...ev,
    component: {
      name,
      value: ev.currentTarget.checked,
    },
  };

  onChange(customEvent);
};

export const createResetHandler = (
  props: CheckBoxProps,
  setValue: SetState<boolean>,
) => () => {
  const newValue = (() => {
    if (!isNil(props.defaultValue)) return props.defaultValue;
    return false;
  })();

  setValue(newValue);

  props.onChange?.({
    component: {
      name: props.name,
      value: newValue,
    },
  });
};
