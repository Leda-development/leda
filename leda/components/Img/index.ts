import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface ImgProps extends React.HTMLAttributes<HTMLImageElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Img = htmlTagFactory('Img') as React.FC<ImgProps>;
