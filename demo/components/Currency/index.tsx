import * as React from 'react';
import { Story } from '../Story';
import { Customization } from './Customization';
import { BasicUsage } from './BasicUsage';

export const Currency = () => (
  <Story title="Currency">
    <BasicUsage title="Basic" />
    <Customization title="Customization" />
  </Story>
);
