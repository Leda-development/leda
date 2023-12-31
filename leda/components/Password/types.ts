import type * as React from 'react';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { ValidationProps } from '../Validation/types';
import type { CustomRender } from '../../commonTypes';
import type { defaultPasswordTheme } from './theme';
import type { DivProps } from '../Div';
import type { PredefinedAllowedSymbols } from '../../utils/isSymbolAllowed';
import type { PredefinedForbiddenSymbols } from '../../utils/isSymbolForbidden';

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

export interface PasswordRule {
  rule: RegExp | ((password: string) => boolean),
  ruleMessage: string,
}

export interface PasswordProps extends ValidationProps {
  /** Allows typing either predefined symbols or what is defined in your RegExp */
  allowedSymbols?: PredefinedAllowedSymbols | RegExp,
  /** Default value */
  defaultValue?: string | null,
  /** Forbids typing either predefined symbols or what is defined in your RegExp */
  forbiddenSymbols?: PredefinedForbiddenSymbols | RegExp,
  /** Whether or not to show a clear button inside the input element. Default is false */
  hasClearButton?: boolean,
  /** In case you need to disable it */
  isDisabled?: boolean,
  /** Input element customizator */
  inputRender?: CustomRender<PasswordProps, PasswordState, React.InputHTMLAttributes<HTMLInputElement>>,
  /** Bring all characters into the selected case */
  letterCase?: 'lower' | 'upper',
  /** Max length */
  maxLength?: number,
  /** Minimal number of symbols to start evaluating password complexity */
  minPasswordEvaluationLength?: number,
  /** Component name when used in forms */
  name?: string,
  /** Blur handler */
  onBlur?: (ev: BlurEvent) => void,
  /** Change handler */
  onChange?: (ev: ChangeEvent) => void,
  /** Enter press handler */
  onEnterPress?: (ev: EnterPressEvent) => void,
  /** Focus handler */
  onFocus?: (ev: FocusEvent) => void,
  /** Password rules description shown initially */
  passwordRules?: PasswordRule[],
  /** Password strength, evaluate it yourself and show the result */
  passwordStrength?: (password: string) => React.ReactNode,
  /** Visibility icon customizator */
  passwordVisibilityRender?: CustomRender<PasswordProps, PasswordState, PasswordVisibilityIconProps>,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.password],
  /** Value */
  value?: string | null,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<PasswordProps, PasswordState, DivProps>,
  /** Underscore css classes */
  [x: string]: unknown,
}

export interface PasswordState {
  isFocused: boolean,
  isValid: boolean,
  isPasswordVisible: boolean,
  value: string,
}

export interface PasswordRulesMessageProps {
  value: string | null,
  theme: typeof defaultPasswordTheme,
  passwordRules?: PasswordRule[],
}

export interface PasswordVisibilityIconProps {
  isVisible: boolean,
  theme: typeof defaultPasswordTheme,
  onIconClick: () => void,
}
