import * as React from 'react';
import { Div } from '../../components/Div';
import { LedaContext } from '../../components/LedaProvider';
import { useElement } from '../../utils';
import { VIEW_TYPES } from './constants';
import { DateCell } from './DateCell';
import {
  getMonthDays, getShortWeekDayName, getWeekDayName,
} from './helpers';
import type { DateViewProps } from './types';
import { useMessages } from '../../utils/useMessages';

export const DateView = (props: DateViewProps): React.ReactElement | null => {
  const {
    viewDate, theme, viewType, onClick, min, max, value, dateCellRender, weeksRowRender, ...restProps
  } = props;

  const messages = useMessages('calendar');

  const { renders: { dateTimeInput: dateTimeInputRenders } } = React.useContext(LedaContext);

  const WeekRow = useElement(
    'WeekRow',
    Div,
    weeksRowRender || dateTimeInputRenders.weekRowRender,
    props,
  );

  if (viewType !== VIEW_TYPES.DATES) return null;

  const weekDayIndicies = Array.from(new Array(7)).map((_item, index) => index);
  const orderedWeekDayIndicies = [...weekDayIndicies.slice(messages.firstWeekDay), ...weekDayIndicies.slice(0, messages.firstWeekDay)];

  return (
    <>
      <WeekRow className={theme.weekDaysRow}>
        {orderedWeekDayIndicies.map((index) => {
          const weekDay = getShortWeekDayName(index, messages);
          return (
            <Div
              key={weekDay}
              title={getWeekDayName(index, messages)}
              className={theme.weekDay}
            >
              {weekDay}
            </Div>
          );
        })}
      </WeekRow>
      <Div className={theme.dateView} {...restProps}>
        {
          getMonthDays(viewDate.getMonth(), viewDate.getFullYear(), messages).map((week, index, dates) => (
            <Div key={`week-${index.toString()}`} className={theme.dateRow}>
              {week.map((date, weekIndex) => (
                <DateCell
                  key={`date-${index.toString()}-${date}`}
                  min={min}
                  max={max}
                  date={date}
                  dateCellRender={dateCellRender}
                  index={index}
                  weekIndex={weekIndex}
                  weekDayIndex={orderedWeekDayIndicies[weekIndex]}
                  dates={dates}
                  onClick={onClick}
                  theme={theme}
                  value={value}
                  viewType={viewType}
                  viewDate={viewDate}
                />
              ))}
            </Div>
          ))
        }
      </Div>
    </>
  );
};
