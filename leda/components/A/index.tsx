import React from 'react';
import type { AProps } from './types';
import { htmlTagFactory } from '../../src';

export const A = htmlTagFactory('A') as React.FC<AProps>;
