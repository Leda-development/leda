import type { FC, HTMLAttributes, Ref } from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface MainProps extends HTMLAttributes<HTMLElement> {
  ref?: Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Main = htmlTagFactory('Main') as FC<MainProps>;
