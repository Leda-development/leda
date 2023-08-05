import { isFunction } from 'lodash';
import type { CreateChangeHandlerParams } from './types';
import { CALENDAR_CLICK_ACTION } from '../../src/CalendarBase/constants';
import { setDate, setViewDate } from '../../src/DateTimeInput/actions';
import { getDatesShorthand } from '../../src/DateTimeInput/helpers';
import type { CalendarClickHandler } from '../../src/CalendarBase/types';
import {
  handleDatesNextClick,
  handleDatesPrevClick,
  handleMonthsNextClick,
  handleMonthsPrevClick,
  handleMonthsSelect,
  handleTitleClick,
  handleTodayButtonClick,
  handleYearsNextClick,
  handleYearsPrevClick,
  handleYearsSelect,
} from '../../src/DateTimeInput/handlers/handleCalendarClick';

export const createClickHandler = ({
  conditions,
  props,
  state,
  dispatch,
}: CreateChangeHandlerParams): CalendarClickHandler => (type, ev, payload) => {
  const {
    min, max, onChange, name,
  } = props;

  const {
    viewDate, viewType,
  } = state;

  const updateDate = (newDate: Date): void => {
    dispatch(setDate(newDate)); // неконтролируемый режим

    if (isFunction(onChange)) {
      onChange({
        ...ev,
        component: {
          name,
          value: newDate,
        },
      });
    }
  };

  const dateShorthand = getDatesShorthand(state.viewDate);

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
      const {
        year, month, hours, minutes,
      } = dateShorthand;

      if (payload) {
        const newDate = new Date(
          year,
          payload.monthCell || month,
          payload.dateCell,
          hours,
          minutes,
        );

        updateDate(newDate);
        dispatch(setViewDate(newDate));
      }

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
