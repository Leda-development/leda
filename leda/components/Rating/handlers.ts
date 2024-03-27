import { isFunction, isNil } from 'lodash';
import type * as React from 'react';
import type {
  RatingProps, RatingValue, SetCurrentSelected,
} from './types';
import { getCurrentStarValue } from './helpers';

export const createChangeHandler = (props: RatingProps, {
  setUncontrolledValue,
  value,
}: {
  setUncontrolledValue: React.Dispatch<React.SetStateAction<RatingValue>>,
  value: RatingValue,
}) => (event: React.MouseEvent<HTMLElement>): void => {
  const {
    onChange, onClick, name,
  } = props;

  const currentSelected = getCurrentStarValue(event.currentTarget);

  // previous equals current
  if (value === currentSelected) return;

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

export const createMouseOutHandler = (value: RatingValue, setCurrentSelected: SetCurrentSelected) => () => {
  setCurrentSelected(value ? value - 1 : -1);
};

export const createMouseOverHandler = (setCurrentSelected: SetCurrentSelected) => (event: React.MouseEvent<HTMLElement>) => {
  setCurrentSelected(getCurrentStarValue(event.currentTarget) - 1);
};

export const createResetHandler = (
  props: RatingProps,
  setValue: React.Dispatch<React.SetStateAction<RatingValue>>,
) => () => {
  const newValue = (() => {
    if (!isNil(props.defaultValue)) return props.defaultValue;
    return null;
  })();

  setValue(newValue);

  props.onChange?.({
    component: {
      index: isNil(props.defaultValue) ? -1 : (props.defaultValue - 1),
      name: props.name,
      value: newValue,
    },
  });
};
