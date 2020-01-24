import * as React from 'react';
import { Story } from '../Story';
import { DataTypes } from './DataTypes';
import { EmptyValues } from './EmptyValues';
import { Filterable } from './Filterable';
import { GroupedObjectsData } from './GroupedObjectsData';
import { BoundingElementRef } from './BoundingElementRef';

export const DropDownSelect = () => (
  <Story title="DropDownSelect">
    <DataTypes title="Разные типы data" />
    <Filterable title="Режим фильтрации" />
    <EmptyValues title="Выбор пустого значения" />
    <GroupedObjectsData title="Сгруппированные списки" />
    <BoundingElementRef title="Позиционирование" />
  </Story>
);
