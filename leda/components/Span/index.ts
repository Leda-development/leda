import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Span = htmlTagFactory('Span') as React.FC<SpanProps>;
