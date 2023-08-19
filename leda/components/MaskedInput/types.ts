import type * as React from 'react';
import type { ValidationProps } from '../Validation/types';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { CustomRender, SetState } from '../../commonTypes';
import type { DivProps } from '../Div';
import type {
  ChangeEvent as BaseChangeEvent, MaskedInputBaseProps, BlurEvent, EnterPressEvent, FocusEvent,
} from '../../src/MaskedInputBase/types';

export type {
  BlurEvent, EnterPressEvent, FocusEvent,
};

export interface ResetEvent {
  component: {
    inputValue: string,
    name?: string,
    value: string,
  },
}

export type ChangeEvent = BaseChangeEvent | ResetEvent;

export interface MaskedInputProps extends ValidationProps {
  /** Default value */
  defaultValue?: string,
  /** Input customizator. It replaces MaskedInputBase! */
  inputRender?: CustomRender<MaskedInputProps, MaskedInputState, MaskedInputBaseProps>,
  /** Disabled state */
  isDisabled?: boolean,
  /** Mask, see mask.md for details */
  mask: string,
  /** Change handler */
  onChange?: (event: ChangeEvent) => void,
  /** Blur handler */
  onBlur?: (event: BlurEvent) => void,
  /** Enter press handler */
  onEnterPress?: (ev: EnterPressEvent) => void,
  /** Focus handler */
  onFocus?: (event: FocusEvent) => void,
  /** Placeholder */
  placeholder?: string,
  /** _ by default */
  placeholderChar?: string,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.maskedInput],
  /** Value */
  value?: string | null,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<MaskedInputProps, MaskedInputState, DivProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface MaskedInputState {
  value: string,
  isFocused: boolean,
  isValid: boolean,
}

export interface ChangeData {
  setValue: SetState<string>,
}

export interface BlurData {
  validateCurrent: (value?: string) => boolean,
  setFocused: SetState<boolean>,
  value: string,
  maskedInputRef: React.RefObject<HTMLInputElement>,
  placeholderChar?: string,
}

export interface FocusData {
  setFocused: SetState<boolean>,
  value: string,
}

export interface CustomElements {
  Wrapper: React.FC<DivProps>,
  Input: React.FC<MaskedInputBaseProps>,
}

export interface ValueToValidateData {
  value: string,
  maskedInputRef: React.RefObject<HTMLInputElement | null>,
  placeholderChar?: string,
}
