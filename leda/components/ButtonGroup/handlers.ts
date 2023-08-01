import * as React from 'react';
import { isFunction } from 'lodash';
import { getArrayValue } from './helpers';
import { ButtonGroupProps, ChangeData, Value } from './types';
import { SomeObject, SetState } from '../../commonTypes';

export const createChangeHandler = (
  props: ButtonGroupProps,
  extraData: ChangeData,
) => (currentItem: string | number | SomeObject): React.MouseEventHandler<HTMLElement> => (ev) => {
  const {
    onClick, onChange, name, type = 'radio', isDisabled,
  } = props;

  const { value, setUncontrolledValue, validateCurrent } = extraData;

  if (isDisabled) return;

  if (isFunction(onClick)) onClick(ev);

  const newValue = (() => {
    if (type === 'radio') return currentItem;
    if (type === 'checkbox') return getArrayValue(value, currentItem);
    return currentItem;
  })();

  validateCurrent(newValue);

  setUncontrolledValue(newValue);

  if (!isFunction(onChange)) return;

  const customEvent = {
    ...ev,
    component: {
      value: newValue,
      name,
    },
  };

  onChange(customEvent);
};

export const createResetHandler = ({
  props,
  setUncontrolledValue,
  value,
}: {
  props: ButtonGroupProps,
  setUncontrolledValue: SetState<Value | Value[] | undefined>,
  value?: Value | Value[],
}) => () => {
  setUncontrolledValue({
    value,
  });
  if (isFunction(props.onChange)) {
    const customEvent = {
      component: {
        name: props.name,
        value,
      },
    };
    props.onChange(customEvent);
  }
};
