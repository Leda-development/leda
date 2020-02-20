import * as React from 'react';
import { Story } from '../Story';
import { DataTypes } from './DataTypes';
import { Controlled } from './Controlled';
import { Customization } from './Customization';
import { GroupedData } from './GroupedData';
import { CompareObjectsBy } from './CompareObjectsBy';

export const MultiSelect = (): React.ReactElement => (
  <Story title="MultiSelect">
    <CompareObjectsBy title="Сравнение" />
    <DataTypes title="Разные типы data" />
    <Controlled title="Контролируемый режим" />
    <Customization title="Кастомизация" />
    <GroupedData title="Сгруппированные списки" />
  </Story>
);
