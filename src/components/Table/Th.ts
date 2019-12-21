import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface ThProps extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  ref?: React.Ref<ThRefCurrent>,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface ThRefCurrent {
  wrapper: HTMLTableHeaderCellElement | null,
}

export const Th = htmlTagFactory('Th') as React.FC<ThProps>;
