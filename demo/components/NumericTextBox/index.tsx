import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { CommaSeparator } from './CommaSeparator';

export const NumericTextBox = () => (
  <Story title="NumericTextBox">
    <BasicUsage title="Простейшее использование" />
    <CommaSeparator title="Запятая в качестве разделителя" />
  </Story>
);
