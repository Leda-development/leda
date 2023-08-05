import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { ValidationProps } from '../Validation/types';
import { predefinedAllowedSymbols, predefinedForbiddenSymbols } from './constants';
import { CustomRender } from '../../commonTypes';
import { DivProps } from '../Div';

export type PredefinedAllowedSymbols = keyof typeof predefinedAllowedSymbols;

export type PredefinedForbiddenSymbols = keyof typeof predefinedForbiddenSymbols;

export interface ClearEvent extends React.MouseEvent<SVGElement> {
  component: {
    value: string,
    name?: string,
  },
}

export interface TypeEvent extends React.ChangeEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
  },
}

export interface ResetEvent {
  currentTarget?: undefined,
  component: {
    value: string,
    name?: string,
  },
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
  },
}

export type ChangeEvent = TypeEvent | ClearEvent | ResetEvent;

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
    isValid: boolean,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
    isValid: boolean,
  },
}

export interface InputProps extends ValidationProps {
  /** Put 'numbers' to allow numbers only or a RegExp to use your own pattern */
  allowedSymbols?: PredefinedAllowedSymbols | RegExp,
  /** Default value */
  defaultValue?: string | null,
  /** Put 'numbers' to forbid numbers only or a RegExp to use your own pattern */
  forbiddenSymbols?: PredefinedForbiddenSymbols | RegExp,
  /** Whether or not to show a clear button inside the input element. Default is false */
  hasClearButton?: boolean,
  /** Disabled state */
  isDisabled?: boolean,
  /** Input customizator */
  inputRender?: CustomRender<InputProps, InputState, React.InputHTMLAttributes<HTMLInputElement>>,
  /** Makes all letters upper or lowercase */
  letterCase?: 'lower' | 'upper',
  /** Max number of characters */
  maxLength?: number,
  /** Blur handler  */
  onBlur?: (ev: BlurEvent) => void,
  /** Change handler */
  onChange?: (ev: ChangeEvent) => void,
  /** Enter press handler */
  onEnterPress?: (ev: EnterPressEvent) => void,
  /** Focus handler */
  onFocus?: (ev: FocusEvent) => void,
  /** Ref */
  ref?: React.Ref<InputRefCurrent>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.input],
  /** Value */
  value?: string | null,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<InputProps, InputState, DivProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface InputState {
  isFocused: boolean,
  isValid: boolean,
  value: string,
}

export interface InputRefCurrent {
  wrapper: HTMLDivElement | null,
  input: HTMLInputElement | null,
}
