'use client';

import * as L from '@leda';
import React from 'react';
import { BasicDemo } from './BasicDemo';
import { ControlledDemo } from './ControlledDemo';

export const MainDemo = () => {
  const [selected, setSelected] = React.useState<string | number>(0);

  return (
    <L.Tabs
      activeTabKey={selected}
      onChange={(ev) => setSelected(ev.component.value)}
      _my-6
    >
      <L.Tab title="Basic" tabKey={0}>
        <BasicDemo />
      </L.Tab>
      <L.Tab title="Controlled" tabKey={1}>
        <ControlledDemo />
      </L.Tab>
    </L.Tabs>
  );
};
