import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface MarkProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Mark = htmlTagFactory('Mark') as React.FC<MarkProps>;
