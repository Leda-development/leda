import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { HeaderProps } from './types';

export const H5 = htmlTagFactory('H5') as React.FC<HeaderProps>;
