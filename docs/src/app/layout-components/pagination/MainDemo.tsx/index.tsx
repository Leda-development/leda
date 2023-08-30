'use client';

import * as L from '@leda';
import React from 'react';
import { BasicDemo } from './BasicDemo';
import { MessagesDemo } from './MessagesDemo';

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
      <L.Tab title="Messages" tabKey={1}>
        <MessagesDemo />
      </L.Tab>
    </L.Tabs>
  );
};
