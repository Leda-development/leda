import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { MinMax } from './MinMax';

export const Calendar = () => (
  <Story title="Calendar">
    <BasicUsage title="Простейшее использование" />
    <MinMax title="min/max" />
  </Story>
);
