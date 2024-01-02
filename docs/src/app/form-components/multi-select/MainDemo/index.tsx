'use client';

import * as L from '@leda';
import React from 'react';
import { BasicDemo } from './BasicDemo';
import { MessagesDemo } from './MessagesDemo';
import { ControlledDemo } from './ControlledDemo';
import { ObjectsDataDemo } from './ObjectsDataDemo';

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
      <L.Tab title="Objects as data" tabKey={2}>
        <ObjectsDataDemo />
      </L.Tab>
      <L.Tab title="Messages" tabKey={3}>
        <MessagesDemo />
      </L.Tab>
    </L.Tabs>
  );
};
