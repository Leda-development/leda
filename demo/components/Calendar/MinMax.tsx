import * as React from 'react';
import * as L from '../../../leda';

export const MinMax = () => {
  const [value, setValue] = React.useState(new Date);

  return (
    <L.Div _box _inner _demoBg>
      <L.Calendar
        value={value}
        onChange={(ev) => {
          setValue(ev.component.value);
          console.log('ev.component', ev.component);
        }}
        min={new Date('06.22.2020')}
        max={new Date('07.12.2020')}
        hasTodayButton
      />
    </L.Div>
  );
};
