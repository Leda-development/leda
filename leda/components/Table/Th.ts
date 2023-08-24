import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { ThProps } from './types';

export const Th = htmlTagFactory('Th') as React.FC<ThProps>;
