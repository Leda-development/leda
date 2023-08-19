import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface LiProps extends React.HTMLAttributes<HTMLLIElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Li = htmlTagFactory('Li') as React.FC<LiProps>;
