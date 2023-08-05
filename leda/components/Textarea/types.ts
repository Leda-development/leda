import React from 'react';
import { ValidationProps } from '../Validation/types';
import { CustomRender } from '../../commonTypes';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { DivProps } from '../Div';

export interface TextareaRefCurrent {
  wrapper: HTMLDivElement | null,
  input: HTMLInputElement | null,
}

export interface ResetEvent {
  component: {
    value: string,
    name?: string,
  },
}

export interface TypeEvent extends React.ChangeEvent<HTMLTextAreaElement> {
  component: {
    value: string,
    name?: string,
  },
}

export type ChangeEvent = TypeEvent | ResetEvent;

export interface BlurEvent extends React.FocusEvent<HTMLTextAreaElement> {
  component: {
    value: string,
    name?: string,
    isValid?: boolean,
  },
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLTextAreaElement> {
  component: {
    value: string,
    name?: string,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLTextAreaElement> {
  component: {
    value: string,
    name?: string,
  },
}

export interface TextareaProps extends ValidationProps {
  /** Default value */
  defaultValue?: string,
  /** Value as child component */
  children?: React.ReactNode,
  /** Disabled state */
  isDisabled?: boolean,
  /** Max value length */
  maxLength?: number,
  /** Blur handler */
  onBlur?: (ev: BlurEvent) => void,
  /** Change handler */
  onChange?: (ev: ChangeEvent) => void,
  /** Enter press handler */
  onEnterPress?: (ev: EnterPressEvent) => void,
  /** Focus handler */
  onFocus?: (ev: FocusEvent) => void,
  /** Placeholder */
  placeholder?: string,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.textarea],
  /** Value */
  value?: string,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<TextareaProps, { value: string }, DivProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface CustomElements {
  Wrapper: React.FC<DivProps>,
}
