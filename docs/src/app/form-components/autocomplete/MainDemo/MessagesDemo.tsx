'use client';

import * as L from '@leda';
import React from 'react';
import { Live } from '@/components/live';

export const MessagesDemo = () => (
  <Live scope={{ L }}>
    {`
() => {
  return (
    <L.AutoComplete
      shouldShowNothingFound
      messages={{
        nothingFound: <span className='font-bold'>No suggestions</span> 
      }}
      data={['Argentina', 'Spain']}
      onChange={({ component }) => console.log(component.value)}
      _w-48
    />
  )  
}`}
  </Live>
);
