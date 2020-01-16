import * as React from 'react';
import { Story } from '../Story';
import { DataTypes } from './DataTypes';
import { EmptyValues } from './EmptyValues';
import { Filterable } from './Filterable';

export const DropDownSelect = () => (
  <Story title="DropDownSelect">
    <DataTypes title="Разные типы data" />
    <Filterable title="Режим фильтрации" />
    <EmptyValues title="Выбор пустого значения" />
  </Story>
);
