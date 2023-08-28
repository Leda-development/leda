import type * as React from 'react';
import type { CustomRender } from '../../commonTypes';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface ChangeEvent extends React.MouseEvent<HTMLDivElement> {
  component: {
    name?: string,
    value: boolean,
  },
}

export interface SwitcherProps {
  /** Switcher customizator */
  baseRender?: CustomRender<SwitcherProps, SwitcherState, BaseProps>,
  /** Child elements, get rendered inside label */
  children?: React.ReactNode,
  /** Icon customizator */
  iconRender?: CustomRender<SwitcherProps, SwitcherState, IconProps>,
  /** Disabled state */
  isDisabled?: boolean,
  /** Label customizator */
  labelRender?: CustomRender<SwitcherProps, SwitcherState, LabelProps>,
  /** Name */
  name?: string,
  /** Change handler */
  onChange?: (ev: ChangeEvent) => void,
  /** Click handler */
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.switcher],
  /** Value */
  value?: boolean,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<SwitcherProps, SwitcherState, WrapperProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface SwitcherState {
  value: boolean,
}

export interface WrapperProps {
  className?: string,
  ref?: React.Ref<HTMLElement> | null,
  children?: React.ReactNode,
}

export interface LabelProps {
  className?: string,
  onClick?: React.MouseEventHandler<HTMLSpanElement>,
  children?: React.ReactNode,
}

export interface BaseProps {
  children?: React.ReactNode,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
}

export interface IconProps {
  className?: string,
}

export interface CustomElements {
  Wrapper: React.FC<WrapperProps>,
  Label: React.FC<LabelProps>,
  Base: React.FC<BaseProps>,
  Icon: React.FC<IconProps>,
}
