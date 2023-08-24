import type * as React from 'react';
import type {
  BlurEvent, FocusEvent, ChangeEvent,
} from '../../src/DateTimeInput/types';
import type {
  CustomRangeEvent, DateTimeInputRangeProps,
} from '../../src/DateTimeInputRange/types';

export interface DateTimeRangeProps extends DateTimeInputRangeProps {
  /** Date format, dd.MM.yyyy hh:mm by default */
  format?: string,
  /** Disabled input state */
  isDisabled?: boolean | [boolean, boolean],
  /** Control opened state */
  isOpen?: boolean | [boolean, boolean],
  /** Is required or not */
  isRequired?: boolean | [boolean, boolean],
  /** Max available date */
  max?: Date,
  /** Min available date */
  min?: Date,
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
  /** Placeholder */
  placeholder?: string | [string | undefined, string | undefined],
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Value */
  value?: [string, string] | [Date | null, Date | null],
  /** _css-class-names */
  [x: string]: unknown,
}
