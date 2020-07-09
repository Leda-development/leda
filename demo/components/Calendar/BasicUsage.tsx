import * as React from 'react';
import * as L from '../../../leda';

export const BasicUsage = (props: any) => {
  const [value, setValue] = React.useState<Date>(new Date);

  return (
    <L.Div _box _inner _demoBg>
      <L.Calendar
        value={value}
        onChange={(ev) => {
          setValue(ev.component.value);
          console.log('ev.component', ev.component);
        }}
        hasTodayButton
      />
    </L.Div>
  );
};
