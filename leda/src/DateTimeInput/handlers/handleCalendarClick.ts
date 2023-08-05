import { isFunction, isNil } from 'lodash';
import { CALENDAR_CLICK_ACTION, VIEW_TYPES } from '../../CalendarBase/constants';
import type { CalendarClickHandler } from '../../CalendarBase/types';
import {
  setDate, setOpen, setViewDate, setViewType,
} from '../actions';
import { COMPONENT_TYPES } from '../constants';
import { formatDateTime, getDatesShorthand, updateInputSelection } from '../helpers';
import type {
  DatesNextClickPayload,
  DatesPrevClickPayload,
  DatesSelectPayload,
  HandlersData,
  MonthsNextClickPayload,
  MonthsPrevClickPayload,
  MonthsSelectPayload,
  TitleClickPayload,
  TodayButtonClickPayload, YearsNextClickPayload, YearsPrevClickPayload,
  YearsSelectPayload,
} from '../types';

export const handleDatesPrevClick = (payload: DatesPrevClickPayload): void => {
  const {
    viewDate, min, dispatch, dateShorthand, isPrevButtonDisabled,
  } = payload;

  if (!viewDate || isPrevButtonDisabled) return;

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;

  const isDateLessThanMin = min && year === min.getFullYear()
    && month - 1 === min.getMonth()
    && dateVal < min.getDate();

  const newDate = isDateLessThanMin && min ? min.getDate() : dateVal;

  dispatch(setViewDate(
    new Date(
      year,
      month - 1,
      newDate,
      hours,
      minutes,
    ),
  ));
};

export const handleDatesNextClick = (payload: DatesNextClickPayload): void => {
  const {
    viewDate, max, dispatch, dateShorthand, isNextButtonDisabled,
  } = payload;

  if (!viewDate || isNextButtonDisabled) return;

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;

  const isDateGreaterThanMax = max && year === max.getFullYear()
    && month + 1 === max.getMonth()
    && dateVal > max.getDate();

  const newDate = isDateGreaterThanMax && max ? max.getDate() : dateVal;

  dispatch(setViewDate(
    new Date(
      year,
      month + 1,
      newDate,
      hours,
      minutes,
    ),
  ));
};

export const handleDatesSelect = (payload: DatesSelectPayload): void => {
  const {
    dateCell, monthCell, dateShorthand, updateDate, dispatch, type, format = 'dd.MM.yyyy', maskedInputRef,
  } = payload;

  const {
    year, month, hours, minutes,
  } = dateShorthand;

  if (dateCell) {
    updateDate(
      new Date(
        year,
        monthCell || month,
        dateCell,
        hours,
        minutes,
      ),
    );

    dispatch(setOpen(false));

    if (type === COMPONENT_TYPES.DATE_TIME) {
      updateInputSelection(maskedInputRef, format);
    }
  }
};

export const handleMonthsPrevClick = (payload: MonthsPrevClickPayload): void => {
  const {
    isDateOutOfMinYearRange, viewDate, min, dispatch, dateShorthand,
  } = payload;

  if (isDateOutOfMinYearRange || !viewDate) return;

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;

  const isMonthLessThanMin = min && year - 1 === min.getFullYear()
    && month <= min.getMonth();

  const newMonth = isMonthLessThanMin && min ? min.getMonth() : month;

  dispatch(setViewDate(
    new Date(
      year - 1,
      newMonth,
      dateVal,
      hours,
      minutes,
    ),
  ));
};

export const handleMonthsNextClick = (payload: MonthsNextClickPayload): void => {
  const {
    isDateOutOfMaxYearRange, viewDate, max, dispatch, dateShorthand,
  } = payload;

  if (isDateOutOfMaxYearRange || !viewDate) return;

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;

  const isMonthGreaterThanMax = !!max && year + 1 === max.getFullYear()
    && month >= max.getMonth();

  const newMonth = isMonthGreaterThanMax && max ? max.getMonth() : month;

  dispatch(setViewDate(
    new Date(
      year + 1,
      newMonth,
      dateVal,
      hours,
      minutes,
    ),
  ));
};

export const handleMonthsSelect = (payload: MonthsSelectPayload): void => {
  const {
    viewDate, max, min, dispatch, dateShorthand, monthCell,
  } = payload;

  const {
    year, dateVal, hours, minutes,
  } = dateShorthand;

  if (viewDate && !isNil(monthCell)) {
    const isDateGreaterThanMax = max
      && year === max.getFullYear()
      && monthCell + 1 === max.getMonth()
      && dateVal > max.getDate();

    const isDateLessThanMin = min
      && year === min.getFullYear()
      && monthCell - 1 === min.getMonth()
      && dateVal < min.getDate();

    const newDate = (() => {
      if (isDateLessThanMin && min) return min.getDate();

      if (isDateGreaterThanMax && max) return max.getDate();

      return dateVal;
    })();

    dispatch(setViewDate(
      new Date(
        year,
        monthCell,
        newDate,
        hours,
        minutes,
      ),
    ));
  }

  dispatch(setViewType(VIEW_TYPES.DATES));
};

export const handleYearsPrevClick = (payload: YearsPrevClickPayload): void => {
  const {
    isDateOutOfMinDecadeRange, viewDate, min, dispatch, dateShorthand,
  } = payload;

  if (isDateOutOfMinDecadeRange || !viewDate) {
    return;
  }

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;

  const isYearLessThanMin = min && year - 10 <= min.getFullYear();

  const newYear = isYearLessThanMin && min ? min.getFullYear() : year - 10;

  dispatch(setViewDate(
    new Date(
      newYear,
      month,
      dateVal,
      hours,
      minutes,
    ),
  ));
};

export const handleYearsNextClick = (payload: YearsNextClickPayload): void => {
  const {
    isDateOutOfMaxDecadeRange, viewDate, max, dispatch, dateShorthand,
  } = payload;

  if (isDateOutOfMaxDecadeRange || !viewDate) {
    return;
  }

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;

  const isYearGreaterThanMax = !!max && year + 10 >= max.getFullYear();

  const newYear = isYearGreaterThanMax && max ? max.getFullYear() : year + 10;

  dispatch(setViewDate(
    new Date(
      newYear,
      month,
      dateVal,
      hours,
      minutes,
    ),
  ));
};

export const handleYearsSelect = (payload: YearsSelectPayload): void => {
  const {
    viewDate, min, max, dateShorthand, dispatch, yearCell,
  } = payload;

  const {
    month, dateVal, hours, minutes,
  } = dateShorthand;

  if (viewDate && !isNil(yearCell)) {
    const isMonthGreaterThanMax = !!max
      && yearCell + 1 === max.getFullYear()
      && month >= max.getMonth();

    const isMonthLessThanMin = !!min
      && yearCell - 1 === min.getFullYear()
      && month <= min.getMonth();

    const newMonth = (() => {
      if (isMonthLessThanMin && min) return min.getMonth();

      if (isMonthGreaterThanMax && max) return max.getMonth();

      return month;
    })();

    dispatch(setViewDate(
      new Date(
        yearCell,
        newMonth,
        dateVal,
        hours,
        minutes,
      ),
    ));
  }

  dispatch(setViewType(VIEW_TYPES.MONTHS));
};

export const handleTitleClick = (payload: TitleClickPayload): void => {
  const {
    viewType, isOneMonthInRange, isOneYearInRange, dispatch,
  } = payload;

  if (viewType === VIEW_TYPES.DATES && !isOneMonthInRange) {
    dispatch(setViewType(VIEW_TYPES.MONTHS));
  }

  if (viewType === VIEW_TYPES.MONTHS && !isOneYearInRange) {
    dispatch(setViewType(VIEW_TYPES.YEARS));
  }
};

export const handleTodayButtonClick = (payload: TodayButtonClickPayload): void => {
  const {
    min, max, dispatch, updateDate,
  } = payload;

  const isTodayLessMin = min && new Date() < min;

  const isTodayGreaterNax = max && new Date().getTime() > max.getTime();

  if (isTodayLessMin || isTodayGreaterNax) {
    return;
  }

  updateDate(new Date());

  dispatch(setViewDate(new Date()));

  dispatch(setViewType(VIEW_TYPES.DATES));
};

export const createCalendarClickHandler = ({
  props,
  state,
  dispatch,
  maskedInputRef,
  conditions,
}: HandlersData): CalendarClickHandler => (type, ev, payload) => {
  const {
    format = 'dd.MM.yyyy', onChange, name, min, max, type: componentType,
  } = props;

  const {
    viewDate, viewType,
  } = state;

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

  const dateShorthand = getDatesShorthand(viewDate);

  const {
    isOneMonthInRange,
    isOneYearInRange,
    isDateOutOfMaxDecadeRange,
    isDateOutOfMinDecadeRange,
    isDateOutOfMaxYearRange,
    isDateOutOfMinYearRange,
    isPrevButtonDisabled,
    isNextButtonDisabled,
  } = conditions;
  // to write args in two lines
  /* eslint-disable object-property-newline */
  switch (type) {
    case CALENDAR_CLICK_ACTION.DATES_PREV: {
      handleDatesPrevClick({
        viewDate, dateShorthand, dispatch, min, isPrevButtonDisabled,
      });
      break;
    }
    case CALENDAR_CLICK_ACTION.DATES_NEXT: {
      handleDatesNextClick({
        viewDate, dateShorthand, dispatch, max, isNextButtonDisabled,
      });
      break;
    }
    case CALENDAR_CLICK_ACTION.DATES_SELECT: {
      handleDatesSelect({
        dateCell: payload && payload.dateCell, updateDate, dispatch, dateShorthand,
        type: componentType, format, maskedInputRef, monthCell: payload && payload.monthCell,
      });
      break;
    }
    case CALENDAR_CLICK_ACTION.MONTHS_PREV: {
      handleMonthsPrevClick({
        viewDate, dateShorthand, isDateOutOfMinYearRange, dispatch, min,
      });
      break;
    }
    case CALENDAR_CLICK_ACTION.MONTHS_NEXT: {
      handleMonthsNextClick({
        viewDate, dateShorthand, isDateOutOfMaxYearRange, dispatch, max,
      });
      break;
    }
    case CALENDAR_CLICK_ACTION.MONTHS_SELECT: {
      handleMonthsSelect({
        viewDate, dateShorthand, isDateOutOfMinDecadeRange, dispatch, min, max, monthCell: payload && payload.monthCell,
      });
      break;
    }
    case CALENDAR_CLICK_ACTION.YEARS_PREV: {
      handleYearsPrevClick({
        viewDate, dateShorthand, isDateOutOfMinDecadeRange, dispatch, min,
      });
      break;
    }
    case CALENDAR_CLICK_ACTION.YEARS_NEXT: {
      handleYearsNextClick({
        viewDate, dateShorthand, isDateOutOfMaxDecadeRange, dispatch, max,
      });
      break;
    }
    case CALENDAR_CLICK_ACTION.YEARS_SELECT: {
      handleYearsSelect({
        viewDate, dateShorthand, dispatch, max, min, yearCell: payload && payload.yearCell,
      });
      break;
    }
    case CALENDAR_CLICK_ACTION.TITLE_CLICK: {
      handleTitleClick({
        viewType, isOneMonthInRange, isOneYearInRange, dispatch,
      });
      break;
    }
    case CALENDAR_CLICK_ACTION.TODAY_BUTTON_CLICK: {
      handleTodayButtonClick({
        updateDate, dispatch, min, max,
      });
      break;
    }
    default: break;
  }
};
