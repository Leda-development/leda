import type * as React from 'react';
import type { CustomRender, CustomEventHandler } from '../../commonTypes';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { IconTypes } from '../..';

export interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /* Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tags],
  /** Wrapper customizator */
  wrapperRender?: CustomRender<TagsProps, Record<string, never>, WrapperProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface IconProps {
  onClick?: CustomEventHandler<React.MouseEvent<SVGElement>>,
  className?: string,
}

export interface WrapperProps {
  className?: string,
  ref?: React.Ref<HTMLElement>,
  children?: React.ReactNode,
}

export interface TagProps extends React.HTMLAttributes<SVGElement> {
  /** Tag icon */
  icon?: IconTypes.Icons,
  /** Icon click handler */
  onIconClick?: CustomEventHandler<React.MouseEvent<SVGElement>>,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Theme, is passed trough Tags */
  theme?: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tags],
  /** Wrappes customizator */
  wrapperRender?: CustomRender<TagProps, Record<string, never>, WrapperProps>,
  /** _css-class-names */
  [x: string]: unknown,
}
