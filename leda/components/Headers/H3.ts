import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { HeaderProps } from './types';

export const H3 = htmlTagFactory('H3') as React.FC<HeaderProps>;
