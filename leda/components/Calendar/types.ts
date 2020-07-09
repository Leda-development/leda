import * as React from 'react';
import { CustomRender } from '../../commonTypes';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';

export interface ChangeEvent extends React.ChangeEvent {
  component: {
    value: Date,
    name?: string,
  },
}

export interface CalendarProps {
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
  /** Значение чекбокса */
  value?: Date | null,
  /** Кастомизация враппера */
  wrapperRender?: CustomRender<CalendarProps, {}, Partial<CalendarProps>>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface CalendarRefCurrent {
  wrapper: HTMLElement | null,
  // input: HTMLInputElement | null,
  // label: HTMLLabelElement | null,
}
