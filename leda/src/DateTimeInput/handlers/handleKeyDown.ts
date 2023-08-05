import type * as React from 'react';
import { isNil, isFunction } from 'lodash';
import { VIEW_TYPES } from '../../CalendarBase/constants';
import { isDateGreater, isDateLess } from '../../CalendarBase/helpers';
import {
  setDate, setOpen, setViewDate, setViewType,
} from '../actions';
import {
  COMPONENT_TYPES, DAYS_IN_WEEK, KEYS, MONTHS_IN_ROW, YEARS_IN_ROW,
} from '../constants';
import { formatDateTime, updateInputSelection } from '../helpers';
import type {
  EnterKeyPressPayload,
  EscKeyPressPayload,
  HandlersData,
  LeftRightKeyPressPayload, TabKeyPressPayload,
  UpDownKeyPressPayload,
} from '../types';

const handleLeftKeyPress = (payload: LeftRightKeyPressPayload): void => {
  const {
    isOpen, ev, viewType, min, max, dateShorthand, dispatch,
  } = payload;

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;
  // do not change cursor position when the calendar is open
  if (isOpen) ev.preventDefault();
  // change selected date to the left one
  if (viewType === VIEW_TYPES.DATES) {
    const newDate = new Date(year, month, dateVal - 1, hours, minutes);

    if (isDateLess(newDate, min) || isDateGreater(newDate, max)) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    const newDate = new Date(year, month - 1, dateVal, hours, minutes);

    const isLessThanMin = min
          && (newDate.getFullYear() < min.getFullYear()
          || (newDate.getFullYear() === min.getFullYear()
          && newDate.getMonth() < min.getMonth()));

    const isGreaterThanMax = max
          && (newDate.getFullYear() > max.getFullYear()
          || (newDate.getFullYear() === max.getFullYear()
          && newDate.getMonth() > max.getMonth()));

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.YEARS) {
    const newDate = new Date(year - 1, month, dateVal, hours, minutes);

    const isLessThanMin = min && newDate.getFullYear() < min.getFullYear();

    const isGreaterThanMax = max && newDate.getFullYear() > max.getFullYear();

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }
};

const handleRightKeyPress = (payload: LeftRightKeyPressPayload): void => {
  const {
    isOpen, viewType, ev, max, min, dateShorthand, dispatch,
  } = payload;

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;
  // do not change cursor position when the calendar is open
  if (isOpen) ev.preventDefault();
  // change selected date to the right one
  if (viewType === VIEW_TYPES.DATES) {
    const newDate = new Date(year, month, dateVal + 1, hours, minutes);
    // Date is provided without time, so the time is 00:00, we have to set current time for proper comparison
    const monthWithoutTime = max
          && new Date(max.getFullYear(), max.getMonth(), max.getDate(), hours, minutes);

    if (isDateLess(newDate, min) || isDateGreater(newDate, monthWithoutTime)) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    const newDate = new Date(year, month + 1, dateVal, hours, minutes);

    const isLessThanMin = min
          && (newDate.getFullYear() < min.getFullYear()
          || (newDate.getFullYear() === min.getFullYear()
          && newDate.getMonth() < min.getMonth()));

    const isGreaterThanMax = max
          && (newDate.getFullYear() > max.getFullYear()
          || (newDate.getFullYear() === max.getFullYear()
          && newDate.getMonth() > max.getMonth()));

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.YEARS) {
    const newDate = new Date(year + 1, month, dateVal, hours, minutes);

    const isLessThanMin = min && newDate.getFullYear() < min.getFullYear();

    const isGreaterThanMax = max && newDate.getFullYear() > max.getFullYear();

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }
};

const handleUpKeyPress = (payload: UpDownKeyPressPayload): void => {
  const {
    isOpen, ev, dispatch, viewType,
    dateShorthand, min, max,
  } = payload;

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;
  // do not scroll when the calendar is open
  if (isOpen) ev.preventDefault();

  // change selected date to the top one
  if (viewType === VIEW_TYPES.DATES) {
    const newDate = new Date(year, month, dateVal - DAYS_IN_WEEK, hours, minutes);

    if (isDateLess(newDate, min) || isDateGreater(newDate, max)) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    const newDate = new Date(year, month - MONTHS_IN_ROW, dateVal, hours, minutes);

    const isLessThanMin = min
          && (newDate.getFullYear() < min.getFullYear()
          || (newDate.getFullYear() === min.getFullYear()
          && newDate.getMonth() < min.getMonth()));

    const isGreaterThanMax = max
          && (newDate.getFullYear() > max.getFullYear()
          || (newDate.getFullYear() === max.getFullYear()
          && newDate.getMonth() > max.getMonth()));

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.YEARS) {
    const newDate = new Date(year - YEARS_IN_ROW, month, dateVal, hours, minutes);

    const isLessThanMin = min && newDate.getFullYear() < min.getFullYear();

    const isGreaterThanMax = max && newDate.getFullYear() > max.getFullYear();

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }
};

const handleDownKeyPress = (payload: UpDownKeyPressPayload): void => {
  const {
    isOpen, ev, viewType, dateShorthand, min, max, dispatch,
  } = payload;

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;
  // do not scroll when the calendar is open
  if (isOpen) ev.preventDefault();

  // change selected date to the bottom one
  if (viewType === VIEW_TYPES.DATES) {
    const newDate = new Date(year, month, dateVal + DAYS_IN_WEEK, hours, minutes);
    const monthWithoutTime = max
          && new Date(max.getFullYear(), max.getMonth(), max.getDate(), hours, minutes);

    if (isDateLess(newDate, min) || isDateGreater(newDate, monthWithoutTime)) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    const newDate = new Date(year, month + MONTHS_IN_ROW, dateVal, hours, minutes);

    const isLessThanMin = min
          && (newDate.getFullYear() < min.getFullYear()
          || (newDate.getFullYear() === min.getFullYear()
          && newDate.getMonth() < min.getMonth()));

    const isGreaterThanMax = max
          && (newDate.getFullYear() > max.getFullYear()
          || (newDate.getFullYear() === max.getFullYear()
          && newDate.getMonth() > max.getMonth()));

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.YEARS) {
    const newDate = new Date(year + YEARS_IN_ROW, month, dateVal, hours, minutes);

    const isLessThanMin = min && newDate.getFullYear() < min.getFullYear();

    const isGreaterThanMax = max && newDate.getFullYear() > max.getFullYear();

    // if the year is out of min/max range - do nothing
    if (isLessThanMin || isGreaterThanMax) return;

    // switch to the next year
    dispatch(setViewDate(newDate));
  }
};

const handleEnterKeyPress = (payload: EnterKeyPressPayload): void => {
  const {
    isOpen, onEnterPress, ev, name, date, value, viewType,
    viewDate, type, dateShorthand, min, max, format = 'dd.MM.yyyy', dispatch, onChange, maskedInputRef,
  } = payload;

  const {
    year, month,
  } = dateShorthand;
  // if the calendar is closed call the onEnterPress
  if (!isOpen) {
    if (isFunction(onEnterPress)) {
      onEnterPress({
        ...ev,
        component: {
          date,
          name,
          value,
        },
      });
    }

    return;
  }

  const updateDate = (newDate: Date): void => {
    // uncontrolled mode
    dispatch(setDate(newDate));
    // controlled mode
    if (isFunction(onChange)) {
      onChange({
        ...ev,
        component: {
          name,
          date: newDate,
          value: formatDateTime(newDate, format) || '',
        },
      });
    }
  };
  // do not send the event further when the calendar is open (e.g. to avoid next field focusing)
  ev.preventDefault();

  if (viewType === VIEW_TYPES.DATES && type === COMPONENT_TYPES.DATE_ONLY) {
    // set the new date
    updateDate(viewDate);
    // close the calendar
    dispatch(setOpen(false));
  }

  if (viewType === VIEW_TYPES.DATES && type === COMPONENT_TYPES.DATE_TIME) {
    // set the new date
    updateDate(viewDate);
    // close the calendar
    dispatch(setOpen(false));
    // update the input selection
    updateInputSelection(maskedInputRef, format);
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    if (viewDate && !isNil(month)) {
      const isDateGreaterThanMax = max && viewDate.getFullYear() === max.getFullYear()
            && viewDate.getMonth() === max.getMonth()
            && viewDate.getDate() > max.getDate();

      const isDateLessThanMin = min && viewDate.getFullYear() === min.getFullYear()
            && viewDate.getMonth() === min.getMonth()
            && viewDate.getDate() < min.getDate();

      const lessDate = isDateLessThanMin && min ? min.getDate() : null;

      const greaterDate = isDateGreaterThanMax && max ? max.getDate() : null;

      updateDate(
        new Date(
          viewDate.getFullYear(),
          month,
          greaterDate || lessDate || viewDate.getDate(),
          viewDate.getHours(),
          viewDate.getMinutes(),
        ),
      );
    }
    // open the date view
    dispatch(setViewType(VIEW_TYPES.DATES));
  }

  if (viewType === VIEW_TYPES.YEARS) {
    if (viewDate && !isNil(year)) {
      const isMonthGreaterThanMax = max && viewDate.getFullYear() === max.getFullYear()
            && viewDate.getMonth() >= max.getMonth();

      const isMonthLessThanMin = min && viewDate.getFullYear() === min.getFullYear()
            && viewDate.getMonth() <= min.getMonth();

      const lessMonth = isMonthLessThanMin && min ? min.getMonth() : null;

      const greaterMonth = isMonthGreaterThanMax && max ? max.getMonth() : null;

      updateDate(
        new Date(
          year,
          greaterMonth || lessMonth || viewDate.getMonth(),
          viewDate.getDate(),
          viewDate.getHours(),
          viewDate.getMinutes(),
        ),
      );
    }
    // open the month view
    dispatch(setViewType(VIEW_TYPES.MONTHS));
  }
};

const handleEscKeyPress = (payload: EscKeyPressPayload): void => {
  const { dispatch } = payload;
  dispatch(setOpen(false));
};

const handleTabKeyPress = (payload: TabKeyPressPayload): void => {
  const {
    isOpen, ev, dispatch, viewType,
  } = payload;
  // do not switch to the next field if the calendar is closed, so you can tab through it
  if (!isOpen) {
    ev.preventDefault();
    // open the calendar
    dispatch(setOpen(true));

    dispatch(setViewType(VIEW_TYPES.DATES));

    return;
  }

  if (viewType === VIEW_TYPES.DATES) {
    // do not switch to the next field if the date view is open
    ev.preventDefault();
    // open the month view
    dispatch(setViewType(VIEW_TYPES.MONTHS));
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    // do not switch to the next field if the month view is open
    ev.preventDefault();
    // open the year view
    dispatch(setViewType(VIEW_TYPES.YEARS));
  }
};

export const createKeyDownHandler = ({
  dispatch,
  maskedInputRef,
  props,
  state,
}: HandlersData) => (ev: React.KeyboardEvent<HTMLDivElement>): void => {
  const {
    isOpen, viewDate, viewType, date, value,
  } = state;

  const {
    min, max, onEnterPress, type, name, format, onChange,
  } = props;

  const dateShorthand = {
    year: viewDate.getFullYear(),
    month: viewDate.getMonth(),
    dateVal: viewDate.getDate(),
    hours: viewDate.getHours(),
    minutes: viewDate.getMinutes(),
  };
  // to write args in two lines
  /* eslint-disable object-property-newline */
  switch (ev.key) {
    case KEYS.LEFT_IE:
    case KEYS.LEFT: {
      handleLeftKeyPress({
        dateShorthand, ev, isOpen, max, min, viewType, dispatch,
      });
      break;
    }
    case KEYS.RIGHT_IE:
    case KEYS.RIGHT: {
      handleRightKeyPress({
        dateShorthand, ev, isOpen, max, min, viewType, dispatch,
      });
      break;
    }
    case KEYS.UP_IE:
    case KEYS.UP: {
      handleUpKeyPress({
        dateShorthand, ev, isOpen, max, min, viewType, dispatch,
      });
      break;
    }
    case KEYS.DOWN_IE:
    case KEYS.DOWN: {
      handleDownKeyPress({
        dateShorthand, ev, isOpen, max, min, viewType, dispatch,
      });
      break;
    }
    case KEYS.ENTER: {
      handleEnterKeyPress({
        dateShorthand, ev, isOpen, max, min, viewType, onEnterPress, name, date, type, value, viewDate,
        dispatch, format, onChange, maskedInputRef,
      });
      break;
    }
    case KEYS.ESC_IE:
    case KEYS.ESC: {
      handleEscKeyPress({
        dispatch,
      });
      break;
    }
    case KEYS.TAB: {
      handleTabKeyPress({
        ev, isOpen, viewType, dispatch,
      });
      break;
    }
    default: break;
  }
};
