import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface ColProps extends React.HTMLAttributes<HTMLTableColElement> {
  ref?: React.Ref<ColRefCurrent>,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface ColRefCurrent {
  wrapper: HTMLTableColElement | null,
}

export const Col = htmlTagFactory('Col') as React.FC<ColProps>;
