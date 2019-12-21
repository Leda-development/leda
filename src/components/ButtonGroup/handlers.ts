import * as React from 'react';
import { isFunction } from 'lodash';
import { Guards } from '../../utils/monads';
import { getArrayValue } from './helpers';
import { ButtonGroupProps, ChangeData } from './types';
import { SomeObject } from '../../commonTypes';

export const createChangeHandler = (
  props: ButtonGroupProps,
  extraData: ChangeData,
) => (currentItem: string | number | SomeObject): React.MouseEventHandler<HTMLElement> => ev => {
  const {
    onClick, onChange, name, type = 'radio', isDisabled,
  } = props;

  const { value, setUncontrolledValue, validateCurrent } = extraData;

  if (isDisabled) return;

  if (isFunction(onClick)) onClick(ev);

  // выбор нового значения
  // если тип radio - значение просто заменяется на новое
  // если тип checkbox - значение добавляется в массив или удаляется из него
  const newValue = Guards(type)
    .when((inwards): inwards is 'radio' => (inwards === 'radio'), () => currentItem)
    .when((inwards): inwards is 'checkbox' => (inwards === 'checkbox'), () => getArrayValue(value, currentItem))
    .otherwise(() => currentItem)
    .getValue();

  validateCurrent(newValue);

  // Неконтролируемый режим при рендере data
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
