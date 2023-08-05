import * as React from 'react';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender } from '../../commonTypes';

export interface ChangeEvent extends React.ChangeEvent {
  component: {
    value: string | number,
    name?: string,
  },
}

export interface RadioGroupProps {
  /** RadioButton child components */
  children: React.ReactNode,
  /** Whole component disabled state */
  isDisabled?: boolean,
  /** Name */
  name?: string,
  /** Change handler */
  onChange?: (event: ChangeEvent) => void,
  /** Reference */
  ref?: React.Ref<RadioGroupRefCurrent>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.radio],
  /** Value */
  value?: string | number,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<RadioGroupProps, { value?: string | number }, WrapperProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface RadioButtonProps extends React.HTMLAttributes<HTMLInputElement> {
  /** Radio button id */
  id?: string,
  /** Disabled state */
  isDisabled?: boolean,
  /** Name */
  name?: string,
  /** Ref */
  ref?: React.Ref<RadioGroupRefCurrent>,
  /** Theme */
  theme?: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.radio],
  /** Unique button identifier (used to select the active button) */
  value: string | number,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<RadioButtonProps, {}, WrapperProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface WrapperProps {
  className?: string,
  [x: string]: unknown,
}

export interface PropsFromParent {
  onChange: (event: ChangeEvent) => void,
  isChecked?: boolean,
}

export interface RadioGroupRefCurrent {
  wrapper: HTMLElement | null,
}
