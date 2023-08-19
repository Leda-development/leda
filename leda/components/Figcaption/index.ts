import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface FigcaptionProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Figcaption = htmlTagFactory('Figcaption') as React.FC<FigcaptionProps>;
