import type * as React from 'react';
import type {
  BlurEvent, ChangeEvent, FocusEvent, DateTimeInputProps,
} from '../../src/DateTimeInput/types';

export interface TimePickerProps extends DateTimeInputProps {
  /** Component date, can be used as value */
  date?: Date | null,
  /** Date format, hh:mm by default */
  format?: string,
  /** Disabled input state */
  isDisabled?: boolean,
  /** Control opened state */
  isOpen?: boolean,
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
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Min time */
  timeMin?: [number, number],
  /** Max time */
  timeMax?: [number, number],
  /** Value */
  value?: string | Date | null,
  /** _css-class-names */
  [x: string]: unknown,
}
