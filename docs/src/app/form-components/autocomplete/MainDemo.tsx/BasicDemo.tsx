'use client';

import * as L from '@leda';
import React from 'react';
import { Live } from '@/components/live';

export const BasicDemo = () => (
  <Live scope={{ L }}>
    {`
() => {
  return (
    <L.AutoComplete
      data={['Argentina', 'Spain']}
      onChange={({ component }) => console.log(component.value)}
      _w-48
    />
  )  
}`}
  </Live>
);
