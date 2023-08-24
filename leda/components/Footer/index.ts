import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Footer = htmlTagFactory('Footer') as React.FC<FooterProps>;
