'use client';

import * as L from '@leda';
import React from 'react';
import { Live } from '@/components/live';

export const ObjectsDataDemo = () => (
  <Live scope={{ L }}>
    {`
() => {
  const data = [
    { name: 'Argentina' },
    { name: 'Chile' },
    { name: 'Spain' }
  ];

  const [value, setValue] = React.useState(null);

  return (
    <L.AutoComplete
      data={data}
      textField='name'
      onChange={({ component }) => {
        setValue(component.value);
        console.log(component.value);
      }}
      value={value}
      _w-48
    />
  );
}`}
  </Live>
);
