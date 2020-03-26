import * as React from 'react';
import * as L from '../../leda';
import { StateButtonGroup } from './StateButtonGroup';

export const DateTimePicker = () => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState('23.10.18 14:30:25');

  return (
    <L.Div _demoStory>
      <L.H4 _title>DateTimePicker</L.H4>
      <br />
      <br />
      <L.DateTimePicker
        min={new Date(2016, 4, 3)}
        max={new Date(2019, 5, 20)}
        isRequired
        form="date-form"
        format="dd.MM.yy hh:mm:ss"
        name="datetimepipicker"
        onEnterPress={(ev) => console.log('enter', ev)}
        onFocus={(ev) => console.log('focus', ev)}
        onBlur={(ev) => console.log('blur', ev)}
        onChange={(ev) => {
          console.log('change', ev);
          setValue(ev.component.value);
        }}
        hasTodayButton
        value={value}
        _width30
        {...props}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'Opened', props: { isOpen: true } },
          { text: 'Disabled', props: { isDisabled: true } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
