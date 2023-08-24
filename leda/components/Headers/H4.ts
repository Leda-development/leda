import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { HeaderProps } from './types';

export const H4 = htmlTagFactory('H4') as React.FC<HeaderProps>;
