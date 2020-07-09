import * as React from 'react';
import { isFunction } from 'lodash';
import { SetState } from '../../commonTypes';
import { CalendarProps } from './types';

export const createChangeHandler = (props: CalendarProps, setUncontrolledValue: SetState<boolean>): React.ChangeEventHandler<HTMLInputElement> => (ev) => {
  const { onChange, name } = props;

  setUncontrolledValue(ev.currentTarget.checked);

  if (!isFunction(onChange)) return;

  const customEvent = {
    // ...ev,
    component: {
      name,
      value: new Date(),
    },
  };

  onChange(customEvent);
};
