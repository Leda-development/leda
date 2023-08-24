import type * as React from 'react';
import type {
  BlurEvent, ChangeEvent, FocusEvent,
} from '../../src/DateTimeInput/types';
import type {
  CustomRangeEvent, DateTimeInputRangeProps,
} from '../../src/DateTimeInputRange/types';

export interface DateRangeProps extends DateTimeInputRangeProps {
  /** Date format, dd.MM.yyyy by default */
  format?: string,
  /** Disabled input state */
  isDisabled?: boolean | [boolean, boolean],
  /** Control opened state */
  isOpen?: boolean | [boolean, boolean],
  /** Is required or not */
  isRequired?: boolean | [boolean, boolean],
  /** Max range value */
  max?: Date,
  /** Min range value */
  min?: Date,
  /** Input fields names */
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
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Value */
  value?: [string, string] | [Date | null, Date | null],
  /** _css-class-names */
  [x: string]: unknown,
}
