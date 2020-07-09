import * as React from 'react';
import { getClassNames, useProps, useTheme, useValue } from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CalendarProps, CalendarRefCurrent } from './types';
import { DivRefCurrent } from '../Div';
import { CALENDAR_CLICK_ACTION, VIEW_TYPES } from '../../src/Calendar/constants';
import { TodayButton } from '../../src/Calendar/TodayButton';
import { useCustomElements } from '../../src/Calendar/hooks';
import { getCalendarConditions } from '../../src/Calendar/helpers';

export const Calendar = React.forwardRef((props: CalendarProps, ref?: React.Ref<CalendarRefCurrent>): React.ReactElement => {
  const {
    hasTodayButton,
    max,
    min,
    onChange,
    theme: themeProp,
    value,
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.calendar);
  console.log('theme', theme);

  const calendarRef = React.useRef<DivRefCurrent | null>(null);

  const mouseDownHandler = (ev) => {
    console.log('mouseDownHandler', ev);
  };

  const clickHandler = (ev) => {
    console.log('click handler', ev);
  };

  const [viewDate, setViewDate] = React.useState(() => new Date());
  const [viewType, setViewType] = React.useState(VIEW_TYPES.DATES);

  // следующие флаги используется для отключения кнопок в header в случае min-max
  const conditions = getCalendarConditions({
    ...props, viewDate, viewType,
  });


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
      onMouseDown={mouseDownHandler}
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
        // dateCellRender={dateCellRender}
        // weeksRowRender={weeksRowRender}
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
        format={'dd.MM.yyyy'}
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
}) as React.FC<CalendarProps>;

Calendar.displayName = 'Calendar';
