import * as React from 'react';
import { RenderEvent } from '../../commonTypes';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';

export interface DropDownProps extends React.HTMLAttributes<HTMLElement> {
  /** Element ref to position the dropdown against */
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement | null }>,
  /** Or not */
  isOpen?: boolean,
  /** Ref */
  ref?: React.Ref<DropDownRefCurrent>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropDown],
  /** Wrapper customizator */
  wrapperRender?: (props: RenderEvent<DropDownProps>) => React.ReactNode,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface WrapperProps {
  className?: string,
  children?: React.ReactNode,
  ref?: React.Ref<DropDownRefCurrent>,
  [x: string]: unknown,
}

export interface CustomElements {
  Wrapper: React.FC<WrapperProps>,
}

export interface DropDownRefCurrent {
  wrapper: HTMLElement | null,
}
