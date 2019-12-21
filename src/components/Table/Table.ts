import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  ref?: React.Ref<TableRefCurrent>,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TableRefCurrent {
  wrapper: HTMLTableElement | null,
}

export const Table = htmlTagFactory('Table') as React.FC<TableProps>;
