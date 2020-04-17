import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { NameArray } from './NameArray';
import { Customization } from './Customization';

export const NumericRange = () => (
  <Story title="NumericRange">
    <BasicUsage title="Простейшее использование" />
    <NameArray title="Name as [string, string]" />
    <Customization title="Customization" />
  </Story>
);
