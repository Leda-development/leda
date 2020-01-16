import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { NameArray } from './NameArray';

export const NumericRange = () => (
  <Story title="NumericRange">
    <BasicUsage title="Простейшее использование" />
    <NameArray title="Name as [string, string]" />
  </Story>
);
