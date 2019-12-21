import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  ref?: React.Ref<TrRefCurrent>,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TrRefCurrent {
  wrapper: HTMLTableRowElement | null,
}

export const Tr = htmlTagFactory('Tr') as React.FC<TrProps>;
