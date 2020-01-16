import * as React from 'react';
import { Story } from '../Story';
import { StaticItems } from './StaticItems';
import { DynamicItems } from './DynamicItems';
import { Customization } from './Customization';

export const VStepper = () => (
  <Story title="VStepper">
    <StaticItems title="Статические шаги" />
    <DynamicItems title="Динамичекие шаги" />
    <Customization title="Кастомизация" />
  </Story>
);
