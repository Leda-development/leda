import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const P = htmlTagFactory('P') as React.FC<ParagraphProps>;
