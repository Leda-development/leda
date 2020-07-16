import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { MinMax } from './MinMax';
import { Uncontrolled } from './Uncontrolled';

export const Calendar = () => (
  <Story title="Calendar">
    <BasicUsage title="Контролируемый режим" />
    <MinMax title="min/max" />
    <Uncontrolled title="Неконтролируемый режим" />
  </Story>
);
