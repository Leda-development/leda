import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  ref?: React.Ref<HTMLElement>,
  [x: string]: unknown,
}

export const Label = htmlTagFactory('Label') as React.FC<LabelProps>;
