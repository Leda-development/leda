import type * as React from 'react';
import type { CustomRender, Values } from '../../commonTypes';
import type { AllActions } from '../DateTimeInput/types';
import type { CALENDAR_CLICK_ACTION, VIEW_TYPES } from './constants';
import type { defaultCalendarTheme } from './theme';
import type { DivProps } from '../../components/Div';

export interface CalendarClickHandler {
  (type: Values<typeof CALENDAR_CLICK_ACTION>, ev: React.MouseEvent<HTMLElement>, payload?: { dateCell?: number, monthCell?: number, yearCell?: number }): void,
}

export interface CalendarBaseProps {
  boundingContainerRef?: React.RefObject<HTMLElement>,
  dispatch: React.Dispatch<AllActions>,
  format: string,
  hasTodayButton?: boolean,
  isOpen?: boolean,
  isDisabled?: boolean,
  max?: Date,
  min?: Date,
  onClick: CalendarClickHandler,
  onMouseDown: React.MouseEventHandler<HTMLDivElement>,
  theme: typeof defaultCalendarTheme,
  value: Date | null,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
  dateCellRender?: CustomRender<DateCellProps, Record<string, never>, DateCellItemProps>,
  weeksRowRender?: CustomRender<DateViewProps, Record<string, never>, WeekRowProps>,
  dateViewRender?: CustomRender<CalendarBaseProps, Record<string, never>, DateViewProps>,
  monthViewRender?: CustomRender<CalendarBaseProps, Record<string, never>, MonthViewProps>,
  yearViewRender?: CustomRender<CalendarBaseProps, Record<string, never>, YearViewProps>,
  calendarHeaderRender?: CustomRender<CalendarBaseProps, Record<string, never>, CalendarHeaderProps>,
  calendarWrapperRender?: CustomRender<CalendarBaseProps, Record<string, never>, DivProps>,
}

export interface DateCellProps {
  date: number,
  dateCellRender?: CustomRender<DateCellProps, Record<string, never>, DateCellItemProps>,
  dates: number[][],
  min?: Date,
  max?: Date,
  index: number,
  onClick: CalendarClickHandler,
  viewDate: Date,
  value: Date | null,
  viewType: Values<typeof VIEW_TYPES>,
  theme: typeof defaultCalendarTheme,
  weekIndex: number,
  weekDayIndex: number,
  children?: React.ReactNode,
}

export interface CalendarHeaderProps {
  theme: CalendarBaseProps['theme'],
  conditions: CalendarConditions,
  viewType: CalendarBaseProps['viewType'],
  viewDate: CalendarBaseProps['viewDate'],
  onClick: CalendarClickHandler,
  children?: React.ReactNode,
}

export interface DateViewProps {
  viewDate: Date,
  dateCellRender?: CustomRender<DateCellProps, Record<string, never>, DateCellItemProps>,
  weeksRowRender?: CustomRender<DateViewProps, Record<string, never>, WeekRowProps>,
  min?: Date,
  max?: Date,
  value: Date | null,
  viewType: Values<typeof VIEW_TYPES>,
  onClick: CalendarClickHandler,
  children?: React.ReactNode,
  theme: typeof defaultCalendarTheme,
}

export interface MonthViewProps {
  max?: Date,
  min?: Date,
  onClick: CalendarClickHandler,
  children?: React.ReactNode,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
  theme: typeof defaultCalendarTheme,
}

export interface YearViewProps {
  max?: Date,
  min?: Date,
  theme: typeof defaultCalendarTheme,
  onClick: CalendarClickHandler,
  children?: React.ReactNode,
  format: string,
  value?: Date,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
}

export interface DateCellItemProps extends DivProps {
  className?: string,
  key?: string,
  title?: string,
  children?: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
}

export interface WeekRowProps extends DivProps {
  className?: string,
}

export interface CalendarConditionProps {
  min?: Date,
  max?: Date,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
  value: Date | null,
}

export interface CalendarConditions {
  isDateOutOfMaxDecadeRange: boolean,
  isDateOutOfMaxMonthRange: boolean,
  isDateOutOfMaxYearRange: boolean,
  isDateOutOfMinDecadeRange: boolean,
  isDateOutOfMinMonthRange: boolean,
  isDateOutOfMinYearRange: boolean,
  isNextButtonDisabled: boolean,
  isOneMonthInRange: boolean,
  isOneYearInRange: boolean,
  isPrevButtonDisabled: boolean,
  isTitleDisabled: boolean,
  isValueInRange: boolean,
}

export interface TodayButtonProps {
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void,
  theme: typeof defaultCalendarTheme,
}

export interface DateCellConditions {
  firstDayOfMonth: number,
  isDateOfNextMonth: boolean,
  isDateOfPrevMonth: boolean,
  isDateOutOfMaxMonthRange: boolean,
  isDateOutOfMinMonthRange: boolean,
  lastDayOfMonth: number,
  renderedDate: Date,
  renderedNextMonth: string | null,
  renderedPrevMonth: string | null,
}

export interface CustomElements {
  DateView: React.FC<DateViewProps>,
  MonthView: React.FC<MonthViewProps>,
  YearView: React.FC<YearViewProps>,
  CalendarHeader: React.FC<CalendarHeaderProps>,
  CalendarWrapper: React.FC<DivProps>,
}
