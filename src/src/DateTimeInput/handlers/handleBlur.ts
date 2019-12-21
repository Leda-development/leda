import * as React from 'react';
import { isFunction } from 'lodash';
import { equals } from '../../../utils/guardsHelpers';
import { Guards } from '../../../utils/monads';
import {
  isDateGreater, isDateLess, isTimeGreater, isTimeLess,
} from '../../Calendar/helpers';
import { setDate, setFocused, setOpen } from '../actions';
import { COMPONENT_TYPES } from '../constants';
import { formatDateTime } from '../helpers';
import {
  HandlersData,
} from '../types';
import { FocusEvent } from '../../MaskedInputBase/types';

export const createBlurHandler = ({
  props,
  state,
  dispatch,
  validate,
}: HandlersData) => (ev: FocusEvent): void => {
  const {
    date,
  } = state;

  const {
    min, max, onChange, format = 'dd.MM.yyyy', name, type, onBlur,
  } = props;

  dispatch(setFocused(false));

  dispatch(setOpen(false));

  const newDate = (() => {
    if (!date) return null;

    const minDate = Guards(type)
      .when(equals(COMPONENT_TYPES.TIME_ONLY), () => (isTimeLess(date, min) ? min : null))
      .when(equals(COMPONENT_TYPES.DATE_TIME), () => (min && date.getTime() < min.getTime() ? min : null))
      .otherwise(() => (isDateLess(date, min) ? min : null))
      .getValue();

    const maxDate = Guards(type)
      .when(equals(COMPONENT_TYPES.TIME_ONLY), () => (isTimeGreater(date, max) ? max : null))
      .when(equals(COMPONENT_TYPES.DATE_TIME), () => (max && date.getTime() > max.getTime() ? max : null))
      .otherwise(() => (isDateGreater(date, max) ? max : null))
      .getValue();

    return minDate || maxDate || date;
  })();

  // при блюре - нормализуем значение по min/max
  dispatch(setDate(newDate));

  if (isFunction(onChange)) {
    onChange({
      ...ev,
      component: {
        value: formatDateTime(newDate, format),
        name,
        date: newDate,
      },
    });
  }

  const isValid = validate(newDate);

  if (isFunction(onBlur)) {
    onBlur({
      ...ev,
      component: {
        value: formatDateTime(newDate, format),
        name,
        date: newDate,
        isValid,
      },
    });
  }
};
