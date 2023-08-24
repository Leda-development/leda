import type * as React from 'react';
import type {
  BlurEvent, ChangeEvent, FocusEvent, DateTimeInputProps,
} from '../../src/DateTimeInput/types';

export interface DateTimePickerProps extends DateTimeInputProps {
  /** Date format, dd.MM.yyyy hh:mm by default */
  format?: string,
  /** Control opened state */
  isOpen?: boolean,
  /** Disabled input state */
  isDisabled?: boolean,
  /** Max available date */
  max?: Date,
  /** Min available date */
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
  /** Min time */
  timeMin?: [number, number],
  /** Max time */
  timeMax?: [number, number],
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Value */
  value?: string | Date | null,
  /** _css-class-names */
  [x: string]: unknown,
}
