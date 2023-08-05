import * as React from 'react';
import { isFunction, isNil } from 'lodash';
import { SwitcherProps } from './types';

export const createClickHandler = (props: SwitcherProps, stateValue: boolean, setStateValue: React.Dispatch<React.SetStateAction<boolean>>) => (ev: React.MouseEvent<HTMLDivElement>): void => {
  const {
    isDisabled, onClick, onChange, name, value: valueProp,
  } = props;

  if (isDisabled) return;

  // Check if the component is controlled by the presence of value prop
  const isControlled = !isNil(valueProp);

  // If the component is controlled, take value from props, if not - from state and invert the value
  const value = isControlled ? !valueProp : !stateValue;

  // Process uncontrolled mode
  if (!isControlled) setStateValue(value);

  if (isFunction(onClick)) onClick(ev);

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        value,
      },
    };

    onChange(customEvent);
  }
};
