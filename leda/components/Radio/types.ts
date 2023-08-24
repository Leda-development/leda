import type * as React from 'react';
import type { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { CustomRender } from '../../commonTypes';

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
  ref?: React.Ref<HTMLElement>,
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
  ref?: React.Ref<HTMLElement>,
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
