'use client';

import * as L from '@leda';
import React from 'react';
import { Live } from '@/components/live';

export const ControlledDemo = () => (
  <Live scope={{ L }}>
    {`
() => {
  const data = ['Argentina', 'Chile', 'Spain', 'Peru', 'Mexico'];
  const [value, setValue] = React.useState([]);

  return (
    <L.MultiSelect
      data={data}
      onChange={({ component }) => {
        setValue(component.value);
        console.log(component.value);
      }}
      value={value}
      _w-96
    />
  );
}`}
  </Live>
);
