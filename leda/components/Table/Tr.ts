import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { TrProps } from './types';

export const Tr = htmlTagFactory('Tr') as React.FC<TrProps>;
