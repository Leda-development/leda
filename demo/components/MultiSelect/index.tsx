import * as React from 'react';
import { Story } from '../Story';
import { DataTypes } from './DataTypes';
import { Controlled } from './Controlled';
import { Customization } from './Customization';

export const MultiSelect = (): React.ReactElement => (
  <Story title="MultiSelect">
    <DataTypes title="Разные типы data" />
    <Controlled title="Контролируемый режим" />
    <Customization title="Кастомизация" />
  </Story>
);
