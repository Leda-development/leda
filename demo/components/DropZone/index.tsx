import * as React from 'react';
import { Story } from '../Story';
import { UncontrolledDropZone } from './UncontrolledDropZone';
import { ControlledDropZone } from './ControlledDropZone';

export const DropZone = (): React.ReactElement => (
  <Story title="DropZone">
    <UncontrolledDropZone title="Неконтролируемый режим" />
    <ControlledDropZone title="Контролируемый режим" />
  </Story>
);
