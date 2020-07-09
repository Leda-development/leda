import * as React from 'react';
import * as L from '../../../leda';
import { useRef } from 'react';

export const Ref = (props: any) => {
  const [value, setValue] = React.useState<Date>(new Date);
  const ref = useRef(null);

  return (
    <L.Div _box _inner _demoBg>
      <L.Calendar
        ref={ref}
        value={value}
        onChange={(ev) => {
          setValue(ev.component.value);
          console.log('ev.component', ev.component);
        }}
        hasTodayButton
      />
      <br />
      <br />
      <L.Button
        onClick={() => {
          console.log('ref.current', ref.current);
        }}
      >
        Calendar ref to console
      </L.Button>
    </L.Div>
  );
};
