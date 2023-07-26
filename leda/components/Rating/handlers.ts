import { isFunction } from 'lodash';
import * as React from 'react';
import {
  RatingProps, SetCurrentSelected,
} from './types';
import { getCurrentStarValue } from './helpers';

export const createChangeHandler = (props: RatingProps) => (event: React.MouseEvent<HTMLElement>): void => {
  const {
    onChange, onClick, name,
  } = props;

  const currentSelected = getCurrentStarValue(event.target as Element);

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
  setCurrentSelected(getCurrentStarValue(event.target as Element) - 1);
};
