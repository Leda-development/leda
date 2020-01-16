import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface BProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<BRefCurrent>,
  [x: string]: unknown,
}

export interface BRefCurrent {
  wrapper: HTMLLIElement | null,
}

export const B = htmlTagFactory('B') as React.FC<BProps>;
