import * as React from 'react';
import { CALENDAR_CLICK_ACTION } from './constants';
import { useCustomElements } from './hooks';
import { CalendarProps } from './types';
import { Div } from '../../components/Div';
import {
  getCalendarConditions, getCalendarFormat,
} from './helpers';
import { TodayButton } from './TodayButton';

export const Calendar = (props: CalendarProps): React.ReactElement | null => {
  const {
    hasTodayButton,
    isOpen,
    isDisabled,
    onClick,
    onMouseDown,
    theme,
    value,
    viewDate,
    viewType,
    min,
    max,
    dateCellRender,
    weeksRowRender,
  } = props;

  // следующие флаги используется для отключения кнопок в header в случае min-max
  const conditions = getCalendarConditions(props);

  const format = getCalendarFormat(props.format);

  const {
    DateView,
    MonthView,
    YearView,
    CalendarHeader,
    CalendarWrapper,
  } = useCustomElements(props);

  if (!isOpen || isDisabled) return null;

  return (
    <CalendarWrapper
      className={theme.wrapper}
      onMouseDown={onMouseDown}
    >
      <CalendarHeader
        conditions={conditions}
        viewType={viewType}
        viewDate={viewDate}
        onClick={onClick}
        theme={theme}
      />
      <DateView
        onClick={onClick}
        viewDate={viewDate}
        dateCellRender={dateCellRender}
        weeksRowRender={weeksRowRender}
        min={min}
        max={max}
        value={value}
        theme={theme}
        viewType={viewType}
      />
      <MonthView
        onClick={onClick}
        theme={theme}
        viewDate={viewDate}
        viewType={viewType}
        min={min}
        max={max}
      />
      <YearView
        format={format}
        onClick={onClick}
        theme={theme}
        viewType={viewType}
        viewDate={viewDate}
        min={min}
        max={max}
      />
      {hasTodayButton && (
        <TodayButton
          onClick={(ev) => onClick(CALENDAR_CLICK_ACTION.TODAY_BUTTON_CLICK, ev)}
          theme={theme}
        />
      )}
    </CalendarWrapper>
  );
};
