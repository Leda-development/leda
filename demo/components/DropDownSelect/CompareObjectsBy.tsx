import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';

const data = [
  { id: 1, attr: 'value1', city: 'London' },
  { id: 2, attr: 'value2', city: 'Berlin' },
  { id: 3, attr: 'value3', city: 'Paris' },
  { id: 4, attr: 'value4', city: 'Stockholm' },
  { id: 5, attr: 'value5', city: 'Madrid' },
];

export const CompareObjectsBy = (args: SomeObject): React.ReactElement => {
  const [value, setValue] = React.useState<SomeObject>({ id: 1, attr: 'value1', city: 'London' });

  return (
    <L.Div _box _inner _demoBg>
      <L.DropDownSelect
        data={data}
        textField="city"
        value={value}
        placeholder="Choose a city"
        compareObjectsBy="city"
        onChange={(ev) => {
          setValue(ev.component.value);
        }}
      />
      <br />
      <br />
      <L.Button
        onClick={() => {
          setValue({ id: 2, attr: 'value2', city: 'Berlin' })
        }}
      >
        Set Berlin
      </L.Button>
      <br />
      <br />
      <L.P>
        Uncontrolled with defaultValue
      </L.P>
      <L.DropDownSelect
        data={data}
        isOpen
        defaultValue={{ id: 2, attr: 'value2', city: 'Berlin' }}
        textField="city"
        compareObjectsBy={item => item.id}
        onChange={(ev) => {
          console.log('ev.component.value', ev.component.value)
        }}
      />
    </L.Div>
  );
};
