import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Div = htmlTagFactory('Div') as React.FC<DivProps>;
