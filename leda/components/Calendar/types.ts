import * as React from 'react';
import { Action, CustomRender, Values } from '../../commonTypes';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CalendarConditions } from '../../src/CalendarBase/types';
import { VIEW_TYPES } from '../../src/CalendarBase/constants';
import { stateActionTypes } from '../../src/DateTimeInput/actions';

export interface ChangeEvent extends React.ChangeEvent {
  component: {
    value: Date,
    name?: string,
  },
}

export interface StandaloneCalendarProps {
  /** Кнопка "Сегодня" */
  hasTodayButton?: boolean,
  /** Максимальная доступная дата */
  max?: Date,
  /** Минимальная доступная дата */
  min?: Date,
  /** Имя компонента */
  name?: string,
  /** Обработчик изменения состояния элементов */
  onChange: (event: ChangeEvent) => void,
  /** Реф */
  ref?: React.Ref<CalendarRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.calendar],
  /** Выбранная дата в календаре */
  value?: Date,
  /** Кастомизация враппера */
  wrapperRender?: CustomRender<StandaloneCalendarProps, {}, Partial<StandaloneCalendarProps>>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface CalendarRefCurrent {
  wrapper: HTMLDivElement | null,
}

export type StandaloneCalendarActionTypes = Action<typeof stateActionTypes.SET_VIEW_DATE, Date>
| Action<typeof stateActionTypes.SET_VIEW_TYPE, Values<typeof VIEW_TYPES>>
| Action<typeof stateActionTypes.SET_DATE, Date | null>;

export interface StandaloneCalendarState {
  date: Date | null, // selected date
  viewDate: Date, // highlighted date
  viewType: Values<typeof VIEW_TYPES>,
}

export interface CreateChangeHandlerParams {
  conditions: CalendarConditions,
  props: StandaloneCalendarProps,
  state: StandaloneCalendarState,
  dispatch: React.Dispatch<StandaloneCalendarActionTypes>,
}
