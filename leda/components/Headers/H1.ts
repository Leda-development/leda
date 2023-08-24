import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { HeaderProps } from './types';

export const H1 = htmlTagFactory('H1') as React.FC<HeaderProps>;
