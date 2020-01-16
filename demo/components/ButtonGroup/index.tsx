import * as React from 'react';
import { Story } from '../Story';
import { DataTypes } from './DataTypes';
import { WorkTypes } from './WorkTypes';

export const ButtonGroup = () => (
  <Story title="ButtonGroup">
    <DataTypes title="Разные типы data" />
    <WorkTypes title="Разные режимы работы" />
  </Story>
);
