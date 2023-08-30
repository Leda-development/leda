'use client';

import * as L from '@leda';
import React from 'react';
import { Live } from '@/components/live';

export const BasicDemo = () => (
  <Live scope={{ L }}>
    {`
() => {
  return (
    <>
      <L.Leda>
        ...
      </L.Leda>
    </>
  );
}`}
  </Live>
);
