import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Section = htmlTagFactory('Section') as React.FC<SectionProps>;
