import * as React from 'react';
import { Story } from '../Story';
import { ControlledFileDrop } from './ControlledFileDrop';

export const FileDrop = (): React.ReactElement => (
  <Story title="FileDrop">
    <ControlledFileDrop title="Контролируемый режим" />
  </Story>
);
