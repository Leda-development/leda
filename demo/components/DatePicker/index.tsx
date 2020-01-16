import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { ControlledDate } from './ControlledDate';
import { MinMax } from './MinMax';
import { Customization } from './Customization';

export const DatePicker = () => (
  <Story title="DatePicker">
    <BasicUsage title="Простейшее использование" />
    <ControlledDate title="Контролирование только date" />
    <MinMax title="Ограничение даты min-max" />
    <Customization title="Кастомизация" />
  </Story>
);
