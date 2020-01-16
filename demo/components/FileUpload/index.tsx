import * as React from 'react';
import { Story } from '../Story';
import { FullCustomized } from './FullCustomized';
import { PartialCustomized } from './PartialCustomized';
import { Controlled } from './Controlled';

export const FileUpload = () => (
  <Story title="FileUpload">
    <Controlled title="Контролируемый режим" />
    <FullCustomized title="Кастомизация - полная замена" />
    <PartialCustomized title="Кастомизация - дополнение" />
  </Story>
);
