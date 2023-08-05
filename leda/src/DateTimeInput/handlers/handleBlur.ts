import { isFunction } from 'lodash';
import {
  isDateGreater, isDateLess, isTimeGreater, isTimeLess,
} from '../../CalendarBase/helpers';
import { setDate, setFocused, setOpen } from '../actions';
import { COMPONENT_TYPES } from '../constants';
import { formatDateTime } from '../helpers';
import type {
  HandlersData,
} from '../types';
import type { FocusEvent } from '../../MaskedInputBase/types';

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

    const minDate = (() => {
      if (type === COMPONENT_TYPES.TIME_ONLY) return isTimeLess(date, min) ? min : null;
      if (type === COMPONENT_TYPES.DATE_TIME) return min && date.getTime() < min.getTime() ? min : null;
      return isDateLess(date, min) ? min : null;
    })();

    const maxDate = (() => {
      if (type === COMPONENT_TYPES.TIME_ONLY) return isTimeGreater(date, max) ? max : null;
      if (type === COMPONENT_TYPES.DATE_TIME) return max && date.getTime() > max.getTime() ? max : null;
      return isDateGreater(date, max) ? max : null;
    })();

    return minDate || maxDate || date;
  })();

  // normalize with min/max on blur
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
