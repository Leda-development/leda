import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface TBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  ref?: React.Ref<TBodyRefCurrent>,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TBodyRefCurrent {
  wrapper: HTMLTableSectionElement | null,
}

export const TBody = htmlTagFactory('TBody') as React.FC<TBodyProps>;
