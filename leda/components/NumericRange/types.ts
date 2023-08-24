import type * as React from 'react';
import type { CustomRender } from '../../commonTypes';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { BlurEvent, FocusEvent, NumericTextBoxProps } from '../NumericTextBox/types';
import type { DivProps } from '../Div';

export interface LabelProps {
  className?: string,
  children?: React.ReactNode,
}

export interface NumericRangeState {
  value: [number | null, number | null],
}

export interface RangeChangeEvent {
  component: {
    name?: string | [string | undefined, string | undefined],
    value: [number | null, number | null],
    formattedValue: [string, string],
  },
}

export interface NumericRangeProps {
  /** CSS class names */
  className?: string,
  /** Format, see formatting.md */
  format?: string,
  /** Form name, is required for validation */
  form?: string,
  /** Input fields customizators, [render, render] */
  inputsRender?: [NumericTextBoxProps['inputRender'] | null, NumericTextBoxProps['inputRender'] | null],
  /** Disabled state */
  isDisabled?: boolean | [boolean, boolean],
  /** Shows if the field is required  */
  isRequired?: boolean | [boolean, boolean],
  /** Control valid state */
  isValid?: boolean,
  /** Max range value */
  max?: number,
  /** Min range value */
  min?: number,
  /** Numerics names */
  name?: string | [string | undefined, string | undefined],
  /** Change handler */
  onChange?: (event: RangeChangeEvent) => void,
  /** Blur handler, comes from NumericTextBox unchanged */
  onBlur?: (event: BlurEvent) => void,
  /** Focus handler, comes from NumericTextBox unchanged */
  onFocus?: (event: FocusEvent) => void,
  /** Placeholders */
  placeholder?: [string | undefined, string | undefined] | string,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** To trim or not to trim */
  shouldTrimTrailingZeros?: boolean,
  /** How much the value is increased/decreased on mouse events */
  step?: number,
  /** A space by default: 1 000 000.00 */
  thousandsSeparator?: string,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.numericRange],
  /** Values */
  value?: [number | null, number | null] | null,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<NumericRangeProps, NumericRangeState, DivProps>,
  /** _css-class-names */
  [x: string]: unknown,
}
