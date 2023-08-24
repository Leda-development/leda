import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { THeadProps } from './types';

export const THead = htmlTagFactory('THead') as React.FC<THeadProps>;
