import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface TdProps extends React.HTMLAttributes<HTMLTableDataCellElement> {
  ref?: React.Ref<TdRefCurrent>,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TdRefCurrent {
  wrapper: HTMLTableDataCellElement | null,
}

export const Td = htmlTagFactory('Td') as React.FC<TdProps>;
