import * as React from 'react';
import { Story } from '../Story';
import { DataStrings } from './DataStrings';
import { DataObjects } from './DataObjects';
import { CompareObjectsBy } from './CompareObjectsBy';

export const DropDownLink = () => (
  <Story title="DropDownLink">
    <DataStrings title="Строки в data" />
    <DataObjects title="Обьекты в data" />
    <CompareObjectsBy title="Сравнение" />
  </Story>
);
