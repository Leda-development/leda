import type * as React from 'react';

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}
