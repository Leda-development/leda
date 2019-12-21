import * as React from 'react';
import {
  BlurEvent, ChangeEvent, FocusEvent, DateTimeInputProps,
  DateTimeInputRefCurrent,
} from '../../src/DateTimeInput/types';

export interface TimePickerProps extends DateTimeInputProps {
  /** Дата для компонента, используется вместо value */
  date?: Date | null,
  /** Формат отображаемого и вводимого времени. По-умолчанию "hh:mm" */
  format?: string,
  /** Признак принудительного открытия списка времени */
  isOpen?: boolean,
  /** Признак отключения инпута */
  isDisabled?: boolean,
  /** Имя поля ввода */
  name?: string,
  /** Функция обратного вызова при потере фокуса */
  onBlur?: (ev: BlurEvent) => void,
  /** Функция обратного вызова при изменении значения в поле ввода */
  onChange?: (ev: ChangeEvent) => void,
  /**  Функция обратного вызова при нажатии Enter */
  onEnterPress?: (ev: ChangeEvent) => void,
  /** Функция обратного вызова при фокусе поля ввода */
  onFocus?: (ev: FocusEvent) => void,
  /** Плейсхолдер для поля ввода */
  placeholder?: string,
  /** Минимальное время */
  timeMin?: [number, number],
  /** Максимальное время */
  timeMax?: [number, number],
  /** Реф */
  ref?: React.Ref<DateTimeInputRefCurrent>,
  /** Значение поля ввода */
  value?: string | Date | null,
  /** Классы переданные через _ */
  [x: string]: unknown,
}
