import * as React from 'react';
import { Story } from '../Story';
import { DataStrings } from './DataStrings';
import { DataObjects } from './DataObjects';

export const DropDownLink = () => (
  <Story title="DropDownLink">
    <DataStrings title="Строки в data" />
    <DataObjects title="Обьекты в data" />
  </Story>
);
