import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

const ACData = [
  {
    city: 'Salvador', id: 1, attr: 'value1', groupName: 'Brazil',
  },
  {
    city: 'Rio de Janeiro', id: 2, attr: 'value2', groupName: 'Brazil',
  },
  {
    city: 'Berlin', id: 3, attr: 'value3', groupName: 'Germany',
  },
  {
    city: 'Munich', id: 4, attr: 'value4', groupName: 'Germany',
  },
  {
    city: 'Milan', groupName: 'Italy', id: 5, attr: 'value5',
  },
  {
    city: 'Rome', groupName: 'Italy', id: 6, attr: 'value6',
  },
  { city: 'Islamabad', id: 7, attr: 'value7' },
  { city: 'Washington', id: 8, attr: 'value8' },
  { city: 'Paris', id: 9, attr: 'value9' },
  { city: 'Tokyo', id: 10, attr: 'value10' },
  { city: 'Budapest', id: 11, attr: 'value11' },
];

export const GroupedObjects = (componentProps: any) => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState('');

  return (
    <L.Div _box _inner _demoBg>
      <L.AutoComplete
        data={ACData}
        textField="city"
        groupBy={(item) => item.groupName}
        value={value}
        onChange={(ev) => setValue(ev.component.value)}
        placeholder="Type your city..."
        minSearchLength={0}
        hasClearButton
        isRequired
        _width30
        {...props}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'Loading', props: { isLoading: true } },
          { text: 'Opened', props: { isOpen: true } },
          { text: 'Disabled', props: { isDisabled: true } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
