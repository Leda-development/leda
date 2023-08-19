import * as React from 'react';
import {
  BlurEvent, ChangeEvent, FocusEvent,
} from '../../src/DateTimeInput/types';
import {
  CustomRangeEvent, DateTimeInputRangeProps,
} from '../../src/DateTimeInputRange/types';

export interface TimeRangeProps extends DateTimeInputRangeProps {
  /** Date format, hh:mm by default */
  format?: string,
  /** Disabled input state */
  isDisabled?: boolean | [boolean, boolean],
  /** Control opened state */
  isOpen?: boolean | [boolean, boolean],
  /** Is required or not */
  isRequired?: boolean | [boolean, boolean],
  /** Component name */
  name?: string | [string | undefined, string | undefined],
  /** Blur handler */
  onBlur?: (ev: BlurEvent) => void,
  /** Change handler */
  onChange?: (ev: CustomRangeEvent) => void,
  /** Focus handler */
  onFocus?: (ev: FocusEvent) => void,
  /** Enter press handler */
  onEnterPress?: (ev: ChangeEvent) => void,
  /** Placeholders */
  placeholder?: string | [string | undefined, string | undefined],
  /** Min time */
  timeMin?: [number, number],
  /** Max time */
  timeMax?: [number, number],
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Value */
  value?: [string, string] | [Date | null, Date | null],
  /** _css-class-names */
  [x: string]: unknown,
}
