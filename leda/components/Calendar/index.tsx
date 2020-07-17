import * as React from 'react';
import { getClassNames, useProps, useTheme } from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  StandaloneCalendarProps, CalendarRefCurrent, StandaloneCalendarState, StandaloneCalendarActionTypes,
} from './types';
import { CALENDAR_CLICK_ACTION, DEFAULT_DATE_FORMAT, VIEW_TYPES } from '../../src/CalendarBase/constants';
import { TodayButton } from '../../src/CalendarBase/TodayButton';
import { useCustomElements } from './hooks';
import { getCalendarConditions } from '../../src/CalendarBase/helpers';
import { createClickHandler } from './handlers';
import { stateReducer } from './reducer';


export const Calendar = React.forwardRef((props: StandaloneCalendarProps, ref?: React.Ref<CalendarRefCurrent>): React.ReactElement => {
  const {
    hasTodayButton,
    max,
    min,
    theme: themeProp,
    value,
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.calendar);

  const initialViewDate = (() => {
    const today = new Date();

    if (min && today < min) return min;
    if (max && today > max) return max;
    if (value) return value;
    return today;
  })();

  const initialState = {
    date: null,
    viewDate: initialViewDate,
    viewType: VIEW_TYPES.DATES,
  };

  const [state, dispatch] = React.useReducer<(state: StandaloneCalendarState, action: StandaloneCalendarActionTypes) => StandaloneCalendarState>(stateReducer, initialState);

  const { viewDate, viewType } = state;

  const calendarValue = (() => {
    if (value) return value; // controlled mode
    return state.date; // uncontrolled mode
  })();

  // следующие флаги используются для отключения кнопок в header в случае min-max
  const conditions = getCalendarConditions({
    ...props,
    viewDate,
    viewType,
    value: calendarValue,
  });

  const clickHandler = createClickHandler({
    conditions, props, state, dispatch,
  });

  // todo: remove as unknown as CalendarProps
  const {
    DateView,
    MonthView,
    YearView,
    CalendarHeader,
    CalendarWrapper,
  } = useCustomElements(props);

  const wrapperClassNames = getClassNames(theme.wrapper, theme.standalone);

  return (
    <CalendarWrapper
      className={wrapperClassNames}
      ref={ref}
    >
      <CalendarHeader
        conditions={conditions}
        viewType={viewType}
        viewDate={viewDate}
        onClick={clickHandler}
        theme={theme}
      />
      <DateView
        onClick={clickHandler}
        viewDate={viewDate}
        min={min}
        max={max}
        value={calendarValue}
        theme={theme}
        viewType={viewType}
      />
      <MonthView
        onClick={clickHandler}
        theme={theme}
        viewDate={viewDate}
        viewType={viewType}
        min={min}
        max={max}
      />
      <YearView
        format={DEFAULT_DATE_FORMAT}
        onClick={clickHandler}
        theme={theme}
        viewType={viewType}
        viewDate={viewDate}
        min={min}
        max={max}
      />
      {hasTodayButton && (
        <TodayButton
          onClick={(ev) => clickHandler(CALENDAR_CLICK_ACTION.TODAY_BUTTON_CLICK, ev)}
          theme={theme}
        />
      )}
    </CalendarWrapper>
  );
}) as React.FC<StandaloneCalendarProps>;

Calendar.displayName = 'Calendar';
