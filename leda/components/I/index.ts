import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface TagIProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const I = htmlTagFactory('I') as React.FC<TagIProps>;
