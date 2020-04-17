import * as React from 'react';

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  ref?: HeaderRefCurrent,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface HeaderRefCurrent {
  wrapper: HTMLHeadingElement | null,
}
