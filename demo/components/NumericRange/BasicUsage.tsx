/* eslint-disable jsx-a11y/accessible-emoji,react/prop-types,no-console */
import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';

export const BasicUsage = (args: any) => {
  const [props, setProps] = React.useState({});

  const [value, setValue] = React.useState<[number | null, number | null] | null>([5, 10]);

  const { update, EventInfo } = useEventSpy(['formattedValue']);

  return (
    <L.Div _demoStory>
      <L.NumericRange
        format="#.## %"
        _width-70
        name="numer-range"
        onBlur={ev => {
          update('Blur', ev);
          console.log('ev.component.name', ev.component.name);
        }}
        onFocus={ev => {
          update('Focus', ev);
        }}
        onChange={ev => {
          console.log('value', ev.component.value);
          console.log('name', ev.component.name);
          update('Change', ev);
          setValue(ev.component.value);
        }}
        form="foobar"
        value={value}
        placeholder={['Число', 'Тоже число']}
        isRequired={[false, true]}
        {...props}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'Disabled', props: { isDisabled: true } },
        ]}
        setProps={setProps}
      />
      <br />
      <br />
      <L.Button _warning onClick={() => setValue(null)}>Clear Value</L.Button>
      <br />
      <br />
      <EventInfo />
    </L.Div>
  );
};
