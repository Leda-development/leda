import { isFunction } from 'lodash';
import { setDate, setValue } from '../actions';
import { createMask, formatDateTime, stringToDate } from '../helpers';
import type { HandlersData } from '../types';
import type { ChangeEvent } from '../../MaskedInputBase/types';
import { maskValue } from '../../MaskedInputBase/helpers';
import { COMPONENT_TYPES } from '../constants';

export const createChangeHandler = ({ props, dispatch }: HandlersData) => (ev: ChangeEvent): void => {
  const {
    format = 'dd.MM.yyyy', onChange, name, type = COMPONENT_TYPES.DATE_ONLY,
  } = props;

  const mask = createMask(format, type);

  const maskedValue = maskValue(ev.component.value, mask);

  const newDate = stringToDate(maskedValue, format);

  const newValue: string = newDate ? formatDateTime(newDate, format) : ev.component.value;
  // uncontrolled mode
  dispatch(setValue(newValue));

  // if the date is valid set to the date, otherwise set to null
  if (newDate && newDate.getDate()) dispatch(setDate(newDate));
  else dispatch(setDate(null));
  // controlled mode
  if (isFunction(onChange)) {
    onChange({
      ...ev,
      component: {
        name,
        date: newDate,
        value: ev.component.value,
      },
    });
  }
};
