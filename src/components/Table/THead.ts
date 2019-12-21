import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface THeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  ref?: React.Ref<THeadRefCurrent>,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface THeadRefCurrent {
  wrapper: HTMLTableSectionElement | null,
}

export const THead = htmlTagFactory('THead') as React.FC<THeadProps>;
