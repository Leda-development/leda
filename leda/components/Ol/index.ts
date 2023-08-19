import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface OlProps extends React.HTMLAttributes<HTMLOListElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Ol = htmlTagFactory('Ol') as React.FC<OlProps>;
