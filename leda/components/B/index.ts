import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface BProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const B = htmlTagFactory('B') as React.FC<BProps>;
