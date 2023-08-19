import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  BlurEvent,
  ChangeEvent,
  FocusEvent,
  DateTimeInputProps,
} from '../../src/DateTimeInput/types';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface DatePickerProps extends DateTimeInputProps {
  /** Date format, dd.MM.yyyy by default */
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
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dateTimeInput],
  /** Value */
  value?: string | Date | null,
  /** _css-class-names */
  [x: string]: unknown,
}
