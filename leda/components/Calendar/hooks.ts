import * as React from 'react';
import { LedaContext } from '../LedaProvider';
import { useElement } from '../../utils';
import { CalendarHeader as DefaultCalendarHeader } from '../../src/CalendarBase/CalendarHeader';
import { DateView as DefaultDateView } from '../../src/CalendarBase/DateView';
import { MonthView as DefaultMonthView } from '../../src/CalendarBase/MonthView';
import { CustomElements } from '../../src/CalendarBase/types';
import { YearView as DefaultYearView } from '../../src/CalendarBase/YearView';
import { Div } from '../Div';
import { StandaloneCalendarProps } from './types';

export const useCustomElements = (props: StandaloneCalendarProps): CustomElements => {
  const {
    dateViewRender, monthViewRender, yearViewRender, headerRender, wrapperRender,
  } = props;

  const { renders: { calendar: calendarRenders } } = React.useContext(LedaContext);

  const DateView = useElement(
    'DateView',
    DefaultDateView,
    dateViewRender || calendarRenders.dateViewRender,
    props,
  );

  const MonthView = useElement(
    'MonthView',
    DefaultMonthView,
    monthViewRender || calendarRenders.monthViewRender,
    props,
  );

  const YearView = useElement(
    'YearView',
    DefaultYearView,
    yearViewRender || calendarRenders.yearViewRender,
    props,
  );

  const CalendarHeader = useElement(
    'CalendarHeader',
    DefaultCalendarHeader,
    headerRender || calendarRenders.headerRender,
    props,
  );

  const CalendarWrapper = useElement(
    'CalendarWrapper',
    Div,
    wrapperRender || calendarRenders.wrapperRender,
    props,
  );

  return {
    CalendarWrapper,
    DateView,
    MonthView,
    YearView,
    CalendarHeader,
  };
};
