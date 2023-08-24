import type * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import type { HeaderProps } from './types';

export const Header = htmlTagFactory('Header') as React.FC<HeaderProps>;
