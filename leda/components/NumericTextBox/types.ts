import type * as React from 'react';
import type { CustomRender, CustomEventHandler } from '../../commonTypes';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { ValidationProps } from '../Validation/types';
import type { DivProps } from '../Div';

// the event from keyboard type input
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

// the event from keyboard up/down arrows
interface KeyArrowChangeEvent extends React.KeyboardEvent<HTMLElement> {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

// the event from clicking up/down arrows in the input field
interface MouseArrowChangeEvent extends React.MouseEvent<SVGElement> {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

// the event from pasting a value from clipboard
interface PasteChangeEvent extends React.ClipboardEvent {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

// the change event which fires after blurring the input field
interface BlurChangeEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

// the change event which fires after reset call
interface ResetChangeEvent {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

export type ChangeEvent = KeyArrowChangeEvent
| PasteChangeEvent
| MouseArrowChangeEvent
| BlurChangeEvent
| InputChangeEvent
| ResetChangeEvent;

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    formattedValue: string,
    isValid?: boolean,
    name?: string,
    value: number | null,
  },
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: number | null,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

export interface NumericTextBoxProps extends ValidationProps {
  /** Arrow buttons customizator */
  arrowButtonsRender?: CustomRender<NumericTextBoxProps, NumericTextBoxState, ArrowButtonsProps>,
  /** Default value */
  defaultValue?: number | null,
  /** Format, see: formatting.md, "#" by default */
  format?: string,
  /** Input customizator */
  inputRender?: CustomRender<NumericTextBoxProps, NumericTextBoxState, InputProps> | null,
  /** Disabled state */
  isDisabled?: boolean,
  /** Max value */
  max?: number,
  /** Min value */
  min?: number,
  /** Blur handler */
  onBlur?: (event: BlurEvent) => void,
  /** Change handler */
  onChange?: (event: ChangeEvent) => void,
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  /** Enter press handler */
  onEnterPress?: (event: EnterPressEvent) => void,
  /** Focus handler */
  onFocus?: (event: FocusEvent) => void,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** To trim or not to trim */
  shouldTrimTrailingZeros?: boolean,
  /** Step */
  step?: number,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.numericTextBox],
  /** A space by default: 1 000 000.00 */
  thousandsSeparator?: string,
  /** Value */
  value?: number | null,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<NumericTextBoxProps, NumericTextBoxState, React.HTMLAttributes<HTMLDivElement>>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface NumericTextBoxState {
  /** Value */
  value: number | null,
  /** Focused state */
  isFocused: boolean,
}

export interface NumericHandlers {
  handleClick: CustomEventHandler<React.MouseEvent<HTMLInputElement>>,
  handleBlur: CustomEventHandler<React.FocusEvent<HTMLInputElement>>,
  handleFocus: CustomEventHandler<React.FocusEvent<HTMLInputElement>>,
  handleChange: CustomEventHandler<React.ChangeEvent<HTMLInputElement>>,
  handleKeyDown: CustomEventHandler<React.KeyboardEvent<HTMLInputElement>>,
  handlePaste: CustomEventHandler<React.ClipboardEvent<HTMLInputElement>>,
  handleArrowButtonClick: (type: 'increase' | 'decrease') => CustomEventHandler<React.MouseEvent<SVGElement>>,
}

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLElement>,
}

export type ArrowButtonsProps = React.HTMLAttributes<HTMLDivElement>;

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean,
  name?: string,
  form?: string,
  ref?: React.Ref<HTMLInputElement>,
  value?: string,
}

export interface CustomElements {
  Wrapper: React.FC<DivProps>,
  Input: React.FC<InputProps>,
  ArrowButtons: React.FC<ArrowButtonsProps>,
}

export type NormalizeParameters = {
  value: number | null,
  min?: number,
  max?: number,
  format?: string,
  sign?: number,
  step?: number,
};

export type FormatValueProps = {
  format: string,
  shouldTrimTrailingZeros?: boolean,
  thousandsSeparator: string,
  value?: number | null,
};

export type GetValueProps = {
  inputValue: string,
  isFocused: boolean,
  format: string,
  shouldTrimTrailingZeros?: boolean,
  thousandsSeparator: string,
  value: number | null,
};
