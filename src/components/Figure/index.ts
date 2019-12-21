import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface FigureProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<FigureRefCurrent>,
  [x: string]: unknown,
}

export interface FigureRefCurrent {
  wrapper: HTMLElement | null,
}

export const Figure = htmlTagFactory('Figure') as React.FC<FigureProps>;
