import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { MinMax } from './MinMax';
import { Uncontrolled } from './Uncontrolled';
import { Ref } from './Ref';
import { Customization } from './Customization';
import { Localization } from './Localization';

export const Calendar = () => (
  <Story title="Calendar">
    <BasicUsage title="Контролируемый режим" />
    <MinMax title="min/max" />
    <Uncontrolled title="Неконтролируемый режим" />
    <Ref title="Ref" />
    <Customization title="Customization" />
    <Localization title="Localization" />
  </Story>
);
