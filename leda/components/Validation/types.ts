/* eslint-disable @typescript-eslint/no-explicit-any */
import type * as React from 'react';
import type { CustomRender, SetState } from '../../commonTypes';
import type { GlobalDefaultTheme } from '../../utils/useTheme';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { Suggestion } from '../AutoComplete/types';

export interface ValidationProps {
  form?: string,
  name?: string,
  isRequired?: boolean,
  isValid?: boolean,
  value?: any,
  validator?: Validator | PredefinedValidator | RegExp | ValidatorObject[],
  invalidMessage?: string,
  requiredMessage?: string,
  shouldValidateUnmounted?: boolean,
  invalidMessageRender?: CustomRender<ValidationProps, ValidationState, InvalidMessageProps>,
}

export interface ValidationButtonProps {
  form?: string | string[],
}

export interface Validator {
  (value: any): boolean,
}

export interface ValidatorObject {
  validator: string | RegExp | Validator,
  invalidMessage?: string,
}

export interface NormalizedValidatorObject extends ValidatorObject {
  validator: Validator,
}

export interface ValidationState {
  value?: any,
  suggestion?: Suggestion,
}

// result: isValid, validateField, validateForm
export interface ValidationResult {
  isValid: boolean,
  validateCurrent: (value?: any) => boolean,
  InvalidMessage: React.FC<Record<string, never>>,
}

export interface FormGetField {
  isFilled: boolean,
  isRequired: boolean,
  isValid: boolean,
  name: string,
  suggestion?: Suggestion,
  value: any,
}

export interface Field {
  invalidMessages?: string[],
  isRequired: boolean,
  isValid: boolean,
  name: string,
  requiredMessage?: string,
  reset: () => void,
  setIsValid: SetState<boolean>,
  setMessages: SetState<string[] | undefined>,
  shouldValidateUnmounted: boolean,
  suggestion?: Suggestion,
  validators: NormalizedValidatorObject[],
  value: any,
}

export interface Form {
  name: string,
  fields: Field[],
}

export interface FormsObject {
  [formName: string]: {
    [fieldName: string]: Field,
  },
}

export interface InvalidMessageProps {
  isValid: boolean,
  messages?: string[],
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.validation],
}

export type PredefinedValidator =
  | 'cadastralNumber'
  | 'creditCardNumber'
  | 'email'
  | 'inn'
  | 'innCorp'
  | 'innPrivate'
  | 'postalCode'
  | 'snils'
  | 'url'
  | 'ogrn'
  | 'ogrnIp'
  | 'kpp'
  | 'okpo';

export interface AddFieldData {
  formName: string,
  fieldName: string,
  value: unknown,
  setIsValid: SetState<boolean>,
  setMessages: SetState<string[] | undefined>,
  shouldValidateUnmounted?: boolean,
  validators: NormalizedValidatorObject[],
  isRequired?: boolean,
  requiredMessage?: string,
  reset: () => void,
  suggestion?: Suggestion,
}

export interface UpdateFieldData {
  formName: string,
  fieldName: string,
  value: unknown,
  isValidProp?: boolean,
  isRequired?: boolean,
  requiredMessage?: string,
  shouldValidateUnmounted?: boolean,
  suggestion?: Suggestion,
  validators: NormalizedValidatorObject[],
}

export interface ValidationExtra {
  reset: () => void,
}

export interface RemoveFieldOptions {
  shouldRemoveUnmounted?: boolean,
}
