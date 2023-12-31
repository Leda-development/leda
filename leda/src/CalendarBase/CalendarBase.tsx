import * as React from 'react';
import { CALENDAR_CLICK_ACTION } from './constants';
import { useCustomElements } from './hooks';
import type { CalendarBaseProps } from './types';
import {
  getCalendarConditions, getCalendarFormat,
} from './helpers';
import { TodayButton } from './TodayButton';
import { useAdaptivePosition } from '../../utils';

export const CalendarBase = (props: CalendarBaseProps): React.ReactElement | null => {
  const {
    boundingContainerRef,
    hasTodayButton,
    isOpen = false,
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

  // following flags are used to disable header buttons in case of min/max
  const conditions = getCalendarConditions(props);

  const format = getCalendarFormat(props.format);

  const calendarRef = React.useRef<HTMLElement | null>(null);

  const classMap = React.useMemo(() => ({
    top: theme.wrapperTop,
    right: theme.wrapperRight,
  }), [theme.wrapperRight, theme.wrapperTop]);

  // calendar position change on scroll/open
  useAdaptivePosition({
    boundingContainerRef,
    elRef: calendarRef,
    isOpen,
    classNames: classMap,
  });

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
      ref={calendarRef}
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
