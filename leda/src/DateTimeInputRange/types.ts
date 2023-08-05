import type * as React from 'react';
import type { DivProps, DivRefCurrent } from '../../components/Div';
import type {
  CalendarHeaderProps,
  CalendarBaseProps,
  DateCellItemProps,
  DateCellProps,
  DateViewProps,
  MonthViewProps,
  WeekRowProps,
  YearViewProps,
} from '../CalendarBase/types';
import type {
  BlurEvent, ChangeEvent, FocusEvent, DateTimeInputProps, DateTimeInputState, IconProps, WrapperProps,
} from '../DateTimeInput/types';
import type { CustomRender, Values } from '../../commonTypes';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { COMPONENT_TYPES } from '../DateTimeInput/constants';

export interface DateTimeInputRangeState {
  date: [Date | null, Date | null],
  setDate: (date: [Date | null, Date | null]) => void,
  setValueFrom: (value: string) => void,
  setValueTo: (value: string) => void,
  value: [string, string],
}

export interface CustomRangeEvent {
  component: {
    value: [string, string],
    date: [Date | null, Date | null],
    name?: string | [string | undefined, string | undefined],
  },
}

export interface WrapperRangeProps {
  className?: string,
  ref?: React.Ref<DivRefCurrent>,
}

export interface DelimiterProps {
  className?: string,
}

export interface DateTimeInputRangeProps {
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement }>,
  className?: string,
  max?: Date,
  min?: Date,
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dateTimeInputRange],
  onChange?: (ev: CustomRangeEvent) => void,
  onBlur?: (ev: BlurEvent) => void,
  onFocus?: (ev: FocusEvent) => void,
  onEnterPress?: (ev: ChangeEvent) => void,
  isRequired?: boolean | [boolean, boolean],
  format?: string,
  form?: string,
  requiredMessage?: string | [string, string],
  type?: Values<typeof COMPONENT_TYPES>,
  value?: [string, string] | [Date | null, Date | null],
  placeholder?: string | [string | undefined, string | undefined],
  name?: string | [string | undefined, string | undefined],
  isOpen?: boolean | [boolean, boolean],
  isDisabled?: boolean | [boolean, boolean],
  /** Custom wrapper */
  wrapperRangeRender?: CustomRender<DateTimeInputRangeProps, DateTimeInputRangeState, WrapperRangeProps>,
  /** Custom input delimiter */
  delimiterRender?: CustomRender<DateTimeInputRangeProps, DateTimeInputRangeState, DelimiterProps>,
  /** Custom wrapper for DateTimeInput */
  wrapperRender?: CustomRender<DateTimeInputProps, DateTimeInputState, WrapperProps>,
  /** Custom calendar icon */
  iconRender?: CustomRender<DateTimeInputProps, DateTimeInputState, IconProps>,
  /** Custom inputs render, [render, render] */
  inputsRender?: [DateTimeInputProps['inputRender'] | null, DateTimeInputProps['inputRender'] | null],
  /** Custom date cell */
  dateCellRender?: CustomRender<DateCellProps, Record<string, never>, DateCellItemProps>,
  /** Custom weekdays row */
  weeksRowRender?: CustomRender<DateViewProps, Record<string, never>, WeekRowProps>,
  /** Custom date view */
  dateViewRender?: CustomRender<DateViewProps, Record<string, never>, DateViewProps>,
  /** Custom month view */
  monthViewRender?: CustomRender<DateViewProps, Record<string, never>, MonthViewProps>,
  /** Custom year view */
  yearViewRender?: CustomRender<DateViewProps, Record<string, never>, YearViewProps>,
  /** Custom calendar header */
  calendarHeaderRender?: CustomRender<DateViewProps, Record<string, never>, CalendarHeaderProps>,
  /** Custom calendar wrapper */
  calendarWrapperRender?: CustomRender<CalendarBaseProps, Record<string, never>, DivProps>,
}

export interface DateTimeInputRangeRefCurrent {
  wrapper: HTMLDivElement | null,
  inputFrom: HTMLInputElement | null,
  inputTo: HTMLInputElement | null,
}

export interface CustomElements {
  WrapperRange: React.FC<WrapperRangeProps>,
  Delimiter: React.FC<DelimiterProps>,
}
