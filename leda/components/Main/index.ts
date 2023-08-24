import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface MainProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Main = htmlTagFactory('Main') as React.FC<MainProps>;
