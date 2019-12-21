import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface TFootProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  ref?: React.Ref<TFootRefCurrent>,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TFootRefCurrent {
  wrapper: HTMLTableSectionElement | null,
}

export const TFoot = htmlTagFactory('TFoot') as React.FC<TFootProps>;
