import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { Controlled } from './Controlled';
import { Customization } from './Customization';
import { Validation } from './Validation';

export const MaskedInput = (): React.ReactElement => (
  <Story title="MaskedInput">
    <BasicUsage title="Простейшее использование" />
    <Controlled title="Контролируемый режим" />
    <Validation title="Валидация" />
    <Customization title="Кастомизация" />
  </Story>
);
