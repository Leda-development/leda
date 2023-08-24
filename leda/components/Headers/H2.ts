import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { HeaderProps } from './types';

export const H2 = htmlTagFactory('H2') as React.FC<HeaderProps>;
