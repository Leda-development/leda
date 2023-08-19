import type * as React from 'react';
import type {
  Action, CustomRender, CustomEventHandler, Values,
} from '../../commonTypes';
import type { DivProps } from '../../components/Div';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { VIEW_TYPES } from '../CalendarBase/constants';
import type {
  CalendarClickHandler,
  CalendarConditions,
  CalendarHeaderProps,
  CalendarBaseProps,
  DateCellItemProps,
  DateCellProps,
  DateViewProps,
  MonthViewProps,
  WeekRowProps,
  YearViewProps,
} from '../CalendarBase/types';
import type { MaskedInputBaseProps } from '../MaskedInputBase/types';
import type { stateActionTypes } from './actions';
import type { COMPONENT_TYPES } from './constants';
import type { ValidationProps } from '../../components/Validation/types';
import type { StandaloneCalendarActionTypes } from '../../components/Calendar/types';
import { IconTypes } from '../..';

// todo: extend type
export interface ChangeEvent {
  component: {
    value: string,
    name?: string,
    date: Date | null,
  },
}

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
    date: Date | null,
    isValid?: boolean,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
    date: Date | null,
  },
}

export interface DateTimeInputState {
  date: Date | null,
  isFocused: boolean,
  isOpen: boolean,
  isValid: boolean,
  value: string,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
}

export interface IconProps {
  icon: IconTypes.Icons,
  className?: string,
  onMouseDown?: React.MouseEventHandler<SVGElement>,
}

export interface WrapperProps {
  className?: string,
  ref?: React.Ref<HTMLElement>,
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>,
}

export interface DateTimeInputProps extends ValidationProps {
  /** Ref to a container to position the element against */
  boundingContainerRef?: React.RefObject<HTMLElement>,
  /** Component classes */
  className?: string,
  /** Date format, dd.MM.yyyy by default */
  format?: string,
  /** Today button under the calendar */
  hasTodayButton?: boolean,
  /** Disabled state */
  isDisabled?: boolean,
  /** Controlled opened state */
  isOpen?: boolean,
  /** Is required or not */
  isRequired?: boolean,
  /** Max date */
  max?: Date,
  /** Min date */
  min?: Date,
  /** Component name */
  name?: string,
  /** Blur handler */
  onBlur?: (ev: BlurEvent) => void,
  /** Change handler */
  onChange?: (ev: ChangeEvent) => void,
  /** Enter press handler */
  onEnterPress?: (ev: ChangeEvent) => void,
  /** Focus handler */
  onFocus?: (ev: FocusEvent) => void,
  /** Placeholder */
  placeholder?: string,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dateTimeInput],
  /** Component type */
  type?: Values<typeof COMPONENT_TYPES>,
  /** Value */
  value?: string | Date | null,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<DateTimeInputProps, DateTimeInputState, WrapperProps>,
  /** Icon customizator */
  iconRender?: CustomRender<DateTimeInputProps, DateTimeInputState, IconProps>,
  /** Input customizator */
  inputRender?: CustomRender<DateTimeInputProps, DateTimeInputState, MaskedInputBaseProps>,
  /** Date cell customizator */
  dateCellRender?: CustomRender<DateCellProps, Record<string, never>, DateCellItemProps>,
  /** Weeks row customizator */
  weeksRowRender?: CustomRender<DateViewProps, Record<string, never>, WeekRowProps>,
  /** Date view customizator */
  dateViewRender?: CustomRender<CalendarBaseProps, Record<string, never>, DateViewProps>,
  /** Month view customizator */
  monthViewRender?: CustomRender<CalendarBaseProps, Record<string, never>, MonthViewProps>,
  /** Year view customizator */
  yearViewRender?: CustomRender<CalendarBaseProps, Record<string, never>, YearViewProps>,
  /** Header customizator */
  calendarHeaderRender?: CustomRender<CalendarBaseProps, Record<string, never>, CalendarHeaderProps>,
  /** Calendar wrapper customizator */
  calendarWrapperRender?: CustomRender<CalendarBaseProps, Record<string, never>, DivProps>,
}

export interface DateWithToDateMethod extends Date {
  toDate?: () => Date,
}

export interface DateShorthand {
  dateVal: number,
  hours: number,
  minutes: number,
  month: number,
  year: number,
}

export interface StateActionPayloads {
  SET_DATE: Date | null,
  SET_FOCUSED: boolean,
  SET_OPEN: boolean,
  SET_VALID: boolean,
  SET_VALUE: string,
  SET_VIEW_DATE: Date,
  SET_VIEW_TYPE: Values<typeof VIEW_TYPES>,
}

export type AllActions = Values<{ [K in keyof typeof stateActionTypes]: Action<typeof stateActionTypes[K], StateActionPayloads[K]> }>;

export interface LeftRightKeyPressPayload {
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  ev: React.KeyboardEvent<HTMLDivElement>,
  isOpen: DateTimeInputProps['isOpen'],
  max: DateTimeInputProps['max'],
  min: DateTimeInputProps['min'],
  viewType: DateTimeInputState['viewType'],
}

export interface UpDownKeyPressPayload {
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  ev: React.KeyboardEvent<HTMLDivElement>,
  isOpen: DateTimeInputProps['isOpen'],
  max: DateTimeInputProps['max'],
  min: DateTimeInputProps['min'],
  viewType: DateTimeInputState['viewType'],
}

export interface EnterKeyPressPayload {
  date: DateTimeInputState['date'],
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  ev: React.KeyboardEvent<HTMLDivElement>,
  format: DateTimeInputProps['format'],
  isOpen: DateTimeInputProps['isOpen'],
  max: DateTimeInputProps['max'],
  min: DateTimeInputProps['min'],
  name: DateTimeInputProps['name'],
  onChange: DateTimeInputProps['onChange'],
  onEnterPress: DateTimeInputProps['onEnterPress'],
  type: DateTimeInputProps['type'],
  value: DateTimeInputState['value'],
  viewDate: DateTimeInputState['viewDate'],
  viewType: DateTimeInputState['viewType'],
  maskedInputRef: React.MutableRefObject<HTMLInputElement | null>,
}

export interface EscKeyPressPayload {
  dispatch: React.Dispatch<AllActions>,
}

export interface TabKeyPressPayload {
  dispatch: React.Dispatch<AllActions>,
  ev: React.KeyboardEvent<HTMLDivElement>,
  isOpen: DateTimeInputProps['isOpen'],
  viewType: DateTimeInputState['viewType'],
}

export interface Handlers {
  handleCalendarClick: CalendarClickHandler,
  handleBlur: CustomEventHandler<FocusEvent>,
  handleCalendarIconMouseDown: CustomEventHandler<React.MouseEvent<SVGElement>>,
  handleCalendarKeyDown: CustomEventHandler<React.KeyboardEvent<HTMLDivElement>>,
  handleCalendarMouseDown: CustomEventHandler<React.MouseEvent<HTMLDivElement>>,
  handleChange: CustomEventHandler<ChangeEvent>,
  handleFocus: CustomEventHandler<FocusEvent>,
}

export type StateActionTypes = typeof stateActionTypes;

export interface DatesPrevClickPayload {
  isPrevButtonDisabled: boolean,
  viewDate: DateTimeInputState['viewDate'],
  min?: Date,
  dispatch: React.Dispatch<AllActions> | React.Dispatch<StandaloneCalendarActionTypes>,
  dateShorthand: DateShorthand,
}

export interface DatesNextClickPayload {
  isNextButtonDisabled: boolean,
  viewDate: DateTimeInputState['viewDate'],
  max?: Date,
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions> | React.Dispatch<StandaloneCalendarActionTypes>,
}

export interface DatesSelectPayload {
  dateCell?: number,
  monthCell?: number,
  dateShorthand: DateShorthand,
  updateDate: (newDate: Date) => void,
  dispatch: React.Dispatch<AllActions>,
  type: DateTimeInputProps['type'],
  format: DateTimeInputProps['format'],
  maskedInputRef: React.MutableRefObject<HTMLInputElement | null> | null,
}

export interface MonthsPrevClickPayload {
  isDateOutOfMinYearRange: boolean,
  viewDate: DateTimeInputState['viewDate'],
  min?: Date,
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions> | React.Dispatch<StandaloneCalendarActionTypes>,
}

export interface MonthsNextClickPayload {
  isDateOutOfMaxYearRange: boolean,
  viewDate: DateTimeInputState['viewDate'],
  max?: Date,
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions> | React.Dispatch<StandaloneCalendarActionTypes>,
}

export interface MonthsSelectPayload {
  viewDate: DateTimeInputState['viewDate'],
  monthCell?: number,
  min?: Date,
  max?: Date,
  dateShorthand: DateShorthand,
  isDateOutOfMinDecadeRange: boolean,
  dispatch: React.Dispatch<AllActions> | React.Dispatch<StandaloneCalendarActionTypes>,
}

export interface YearsPrevClickPayload {
  viewDate: DateTimeInputState['viewDate'],
  min?: Date,
  dateShorthand: DateShorthand,
  isDateOutOfMinDecadeRange: boolean,
  dispatch: React.Dispatch<AllActions> | React.Dispatch<StandaloneCalendarActionTypes>,
}

export interface YearsNextClickPayload {
  viewDate: DateTimeInputState['viewDate'],
  max?: Date,
  dateShorthand: DateShorthand,
  isDateOutOfMaxDecadeRange: boolean,
  dispatch: React.Dispatch<AllActions> | React.Dispatch<StandaloneCalendarActionTypes>,
}

export interface YearsSelectPayload {
  viewDate: DateTimeInputState['viewDate'],
  yearCell?: number,
  min?: Date,
  max?: Date,
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions> | React.Dispatch<StandaloneCalendarActionTypes>,
}

export interface TitleClickPayload {
  viewType: DateTimeInputState['viewType'],
  isOneMonthInRange: boolean,
  isOneYearInRange: boolean,
  dispatch: React.Dispatch<AllActions> | React.Dispatch<StandaloneCalendarActionTypes>,
}

export interface TodayButtonClickPayload {
  min?: Date,
  max?: Date,
  dispatch: React.Dispatch<AllActions> | React.Dispatch<StandaloneCalendarActionTypes>,
  updateDate: (newDate: Date) => void,
}

export interface CustomElements {
  Wrapper: React.FC<WrapperProps>,
  Input: React.FC<MaskedInputBaseProps & { [x: string]: unknown }>,
  Icon: React.FC<IconProps>,
}

export interface HandlersData {
  conditions: CalendarConditions,
  dispatch: React.Dispatch<AllActions>,
  maskedInputRef: React.MutableRefObject<HTMLInputElement | null>,
  props: DateTimeInputProps,
  state: DateTimeInputState,
  validate: (value: Date | null) => boolean,
}

export interface BlurData {
  dispatch: React.Dispatch<AllActions>,
  props: DateTimeInputProps,
  state: DateTimeInputState,
  validate: (value: Date | null) => boolean,
}

export interface EffectData {
  conditions: CalendarConditions,
  dispatch: React.Dispatch<AllActions>,
  props: DateTimeInputProps,
  state: DateTimeInputState,
}

export interface NormalizeValueArgs {
  value: string,
  format: string,
  min?: Date,
  max?: Date,
}
