import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';

const DDSData = [
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

export const GroupedObjectsData = (args: SomeObject): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>();
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string | number | SomeObject | null>(null);

  return (
    <L.Div _box _inner _demoBg>
      <L.DropDownSelect
        data={DDSData}
        hasClearButton
        data-test="dropdownselect"
        _width40
        isOpen={isOpen}
        isLoading={isLoading}
        isDisabled={isDisabled}
        value={value}
        groupBy={(item) => item.groupName}
        textField="city"
        defaultValue={{ txt: 'London', val: 1 }}
        onChange={(ev) => {
          // eslint-disable-next-line no-console
          console.log('ev.component', ev.component);
          setValue(ev.component.value);
        }}
        onBlur={(ev) => {
          // eslint-disable-next-line no-console
          console.log('ev.component.value', ev.component.value);
        }}
      >
      </L.DropDownSelect>
      <br />
      <br />
      <L.Button _warning={isDisabled} onClick={() => setIsDisabled(!isDisabled)}>Toggle isDisabled</L.Button>
      {' '}
      <L.Button _warning={isLoading} onClick={() => setIsLoading(!isLoading)}>Toggle isLoading</L.Button>
      {' '}
      <L.Button _warning={isOpen} onClick={() => setIsOpen(isOpen ? undefined : true)}>Toggle isOpen</L.Button>
    </L.Div>
  );
};
