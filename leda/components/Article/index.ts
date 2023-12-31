import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Article = htmlTagFactory('Article') as React.FC<ArticleProps>;
