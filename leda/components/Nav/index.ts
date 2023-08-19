import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Nav = htmlTagFactory('Nav') as React.FC<NavProps>;
