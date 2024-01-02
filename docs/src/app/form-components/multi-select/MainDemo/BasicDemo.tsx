'use client';

import * as L from '@leda';
import React from 'react';
import { Live } from '@/components/live';

export const BasicDemo = () => (
  <Live scope={{ L }}>
    {`
() => {
  return (
    <L.MultiSelect
      data={['Argentina', 'Spain', 'Mexico', 'Colombia', 'Peru', 'Chile', 'Costa Rica', 'Puerto Rico']}
      onChange={({ component }) => console.log(component.value)}
      _w-96
    />
  )  
}`}
  </Live>
);
