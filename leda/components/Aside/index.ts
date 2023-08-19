import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface AsideProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Aside = htmlTagFactory('Aside') as React.FC<AsideProps>;
