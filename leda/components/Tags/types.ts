import * as React from 'react';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { IconTypes } from '../..';

export interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ref */
  ref?: React.Ref<TagsRefCurrent>,
  /* Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tags],
  /** Wrapper customizator */
  wrapperRender?: CustomRender<TagsProps, {}, WrapperProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface IconProps {
  onClick?: CustomEventHandler<React.MouseEvent<SVGElement>>,
  className?: string,
}

export interface WrapperProps {
  className?: string,
  ref?: React.Ref<TagsRefCurrent>,
  children?: React.ReactNode,
}

export interface TagProps extends React.HTMLAttributes<SVGElement> {
  /** Tag icon */
  icon?: IconTypes.Icons,
  /** Icon click handler */
  onIconClick?: CustomEventHandler<React.MouseEvent<SVGElement>>,
  /** Ref */
  ref?: React.Ref<TagsRefCurrent>,
  /** Theme, is passed trough Tags */
  theme?: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tags],
  /** Wrappes customizator */
  wrapperRender?: CustomRender<TagProps, {}, WrapperProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface TagsRefCurrent {
  wrapper: HTMLElement | null,
}
