import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface SmallProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Small = htmlTagFactory('Small') as React.FC<SmallProps>;
