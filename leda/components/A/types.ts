import React from 'react';
import { CustomEventHandler } from '../../commonTypes';

export interface AProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Link text */
  children?: React.ReactNode,
  /** Link address */
  href?: string,
  /** Click handler */
  onClick?: CustomEventHandler<React.MouseEvent<HTMLAnchorElement>>,
  /** Ref */
  ref?: React.Ref<ARefCurrent>,
  /** To render or not to render */
  shouldRender?: boolean,
  /** _css-class-name */
  [x: string]: unknown,
}

export interface ARefCurrent {
  wrapper: HTMLAnchorElement | null,
}
