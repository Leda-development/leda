import type * as React from 'react';
import type {
  Action, CustomRender, CustomEventHandler, Values,
} from '../../commonTypes';
import type { DivProps, DivRefCurrent } from '../../components/Div';
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
  ref?: React.Ref<DivRefCurrent>,
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>,
}

export interface DateTimeInputProps extends ValidationProps {
  /** Ссылка на контейнер, относительно которого нужно позиционировать элемент */
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement }>,
  /** Классы для компонента */
  className?: string,
  /** Формат даты, по-умолчанию dd.MM.yyyy */
  format?: string,
  /** Кнопка "Сегодня" под календарем */
  hasTodayButton?: boolean,
  /** Выключенное состояние */
  isDisabled?: boolean,
  /** Открытый календарь */
  isOpen?: boolean,
  /** Поле является обязательным */
  isRequired?: boolean,
  /** Максимальная дата */
  max?: Date,
  /** Минимальная дата */
  min?: Date,
  /** Имя компонента */
  name?: string,
  /** Обработчик блюра */
  onBlur?: (ev: BlurEvent) => void,
  /** Обработчик изменения */
  onChange?: (ev: ChangeEvent) => void,
  /** Обработчик нажатия Enter */
  onEnterPress?: (ev: ChangeEvent) => void,
  /** Обработчик фокуса */
  onFocus?: (ev: FocusEvent) => void,
  /** Плейсхолдер инпута */
  placeholder?: string,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dateTimeInput],
  /** Тип компонента */
  type?: Values<typeof COMPONENT_TYPES>,
  /** Значение в инпуте */
  value?: string | Date | null,
  /** Кастомный враппер */
  wrapperRender?: CustomRender<DateTimeInputProps, DateTimeInputState, WrapperProps>,
  /** Кастомная иконка календаря */
  iconRender?: CustomRender<DateTimeInputProps, DateTimeInputState, IconProps>,
  /** Кастомный инпут */
  inputRender?: CustomRender<DateTimeInputProps, DateTimeInputState, MaskedInputBaseProps>,
  /** Кастомная ячейка с датой */
  dateCellRender?: CustomRender<DateCellProps, Record<string, never>, DateCellItemProps>,
  /** Кастомный список дней недели */
  weeksRowRender?: CustomRender<DateViewProps, Record<string, never>, WeekRowProps>,
  /** Кастомный вид выбора даты */
  dateViewRender?: CustomRender<CalendarBaseProps, Record<string, never>, DateViewProps>,
  /** Кастомный вид выбора месяца */
  monthViewRender?: CustomRender<CalendarBaseProps, Record<string, never>, MonthViewProps>,
  /** Кастомный вид выбора года */
  yearViewRender?: CustomRender<CalendarBaseProps, Record<string, never>, YearViewProps>,
  /** Кастомный заголовок календаря */
  calendarHeaderRender?: CustomRender<CalendarBaseProps, Record<string, never>, CalendarHeaderProps>,
  /** Кастомный рендер враппера календаря */
  calendarWrapperRender?: CustomRender<CalendarBaseProps, Record<string, never>, DivProps>,
}

export interface DateTimeInputRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLDivElement | null,
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
