import * as React from 'react';
import * as L from '../../../leda';

export const Uncontrolled = (props: any) => {

  return (
    <L.Div _box _inner _demoBg>
      <L.Calendar
        onChange={(ev) => {
          console.log('ev.component', ev.component);
        }}
        hasTodayButton
      />
    </L.Div>
  );
};
