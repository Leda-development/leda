import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface UlProps extends React.HTMLAttributes<HTMLUListElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Ul = htmlTagFactory('Ul') as React.FC<UlProps>;
