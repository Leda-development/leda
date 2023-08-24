import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { ColProps } from './types';

export const Col = htmlTagFactory('Col') as React.FC<ColProps>;
