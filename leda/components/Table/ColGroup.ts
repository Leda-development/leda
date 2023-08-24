import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { ColGroupProps } from './types';

export const ColGroup = htmlTagFactory('ColGroup') as React.FC<ColGroupProps>;
