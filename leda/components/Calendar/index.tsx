import * as React from 'react';
import { getClassNames, useProps, useTheme } from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { StandaloneCalendarProps, CalendarRefCurrent } from './types';
import { DivRefCurrent } from '../Div';
import { CALENDAR_CLICK_ACTION, DEFAULT_DATE_FORMAT, VIEW_TYPES } from '../../src/CalendarBase/constants';
import { TodayButton } from '../../src/CalendarBase/TodayButton';
import { useCustomElements } from '../../src/CalendarBase/hooks';
import { getCalendarConditions } from '../../src/CalendarBase/helpers';
import { createClickHandler } from './handlers';
import { stateReducer } from '../../src/DateTimeInput/reducer';
import { CalendarBaseProps } from '../../src/CalendarBase/types';

export const Calendar = React.forwardRef((props: StandaloneCalendarProps, ref?: React.Ref<CalendarRefCurrent>): React.ReactElement => {
  const {
    hasTodayButton,
    max,
    min,
    theme: themeProp,
    value,
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.calendar);

  const calendarRef = React.useRef<DivRefCurrent | null>(null);

  const initialViewDate = (() => {
    const today = new Date();

    if (min && today < min) return min;
    if (max && today > max) return max;
    if (value) return value;
    return today;
  })();

  // todo: remove dummies
  const initialState = {
    date: null, // dummy
    value: '', // dummy
    isValid: true, // dummy
    isFocused: false, // dummy
    isOpen: false, // dummy
    viewDate: initialViewDate,
    viewType: VIEW_TYPES.DATES,
  };

  const [state, dispatch] = React.useReducer(stateReducer, initialState);

  const { viewDate, viewType } = state;

  // следующие флаги используются для отключения кнопок в header в случае min-max
  const conditions = getCalendarConditions({
    ...props, viewDate, viewType,
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
  } = useCustomElements({
    ...props,
  } as unknown as CalendarBaseProps);

  const wrapperClassNames = getClassNames(theme.wrapper, theme.standalone);

  return (
    <CalendarWrapper
      className={wrapperClassNames}
      ref={calendarRef}
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
        value={value}
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
