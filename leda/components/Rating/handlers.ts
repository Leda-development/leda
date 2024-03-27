import { isFunction } from 'lodash';
import type * as React from 'react';
import type {
  RatingProps, SetCurrentSelected,
} from './types';
import { getCurrentStarValue } from './helpers';

export const createChangeHandler = (props: RatingProps, {
  setUncontrolledValue,
  value,
}: {
  setUncontrolledValue: React.Dispatch<React.SetStateAction<number>>
  value?: number | null
}) => (event: React.MouseEvent<HTMLElement>): void => {
  const {
    onChange, onClick, name,
  } = props;

  const currentSelected = getCurrentStarValue(event.currentTarget);
  
  // previous equals current
  if (value === currentSelected) return

  setUncontrolledValue(currentSelected);

  const customEvent = {
    ...event,
    component: {
      value: currentSelected,
      index: currentSelected - 1,
      name,
    },
  };

  if (isFunction(onClick)) onClick(event);
  if (isFunction(onChange)) onChange(customEvent);
};

export const createMouseOutHandler = (value: number | undefined, setCurrentSelected: SetCurrentSelected) => () => {
  setCurrentSelected(value ? value - 1 : -1);
};

export const createMouseOverHandler = (setCurrentSelected: SetCurrentSelected) => (event: React.MouseEvent<HTMLElement>) => {
  setCurrentSelected(getCurrentStarValue(event.currentTarget) - 1);
};
