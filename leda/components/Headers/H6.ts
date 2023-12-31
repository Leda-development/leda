import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { HeaderProps } from './types';

export const H6 = htmlTagFactory('H6') as React.FC<HeaderProps>;
