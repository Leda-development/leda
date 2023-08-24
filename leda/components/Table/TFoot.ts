import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { TFootProps } from './types';

export const TFoot = htmlTagFactory('TFoot') as React.FC<TFootProps>;
