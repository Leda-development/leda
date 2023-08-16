import React from 'react';

export interface AProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Ref */
  ref?: React.Ref<HTMLAnchorElement>,
  /** To render or not to render */
  shouldRender?: boolean,
  /** _css-class-name */
  [x: string]: unknown,
}
