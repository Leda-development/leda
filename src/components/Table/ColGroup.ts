import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface ColGroupProps extends React.HTMLAttributes<HTMLTableColElement> {
  ref?: React.Ref<ColGroupRefCurrent>,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface ColGroupRefCurrent {
  wrapper: HTMLTableColElement | null,
}

export const ColGroup = htmlTagFactory('ColGroup') as React.FC<ColGroupProps>;
