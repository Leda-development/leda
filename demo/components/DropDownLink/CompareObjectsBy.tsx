import * as React from 'react';
import * as L from '../../../leda';

const data = [
  { id: 0, attr: 'value0', city: 'Moscow' },
  { id: 0, attr: 'value0', city: 'Minsk' },
  { id: 1, attr: 'value1', city: 'London' },
  { id: 2, attr: 'value2', city: 'Berlin' },
  { id: 3, attr: 'value3', city: 'Paris' },
  { id: 4, attr: 'value4', city: 'Stockholm' },
  { id: 5, attr: 'value5', city: 'Madrid' },
];

// eslint-disable-next-line
export const CompareObjectsBy = (anyProps: any): React.ReactElement => {
  const [value, setValue] = React.useState<string | null>();

  return (
    <L.Div _box _inner _demoBg>
      <L.P>
        controlled
      </L.P>
      <L.P>
        <L.DropDownLink
          data={data}
          textField="city"
          value={value}
          compareObjectsBy="id"
          minSearchLength={0}
          onChange={(event) => {
            setValue(event.component.value);
          }}
        />
      </L.P>
      <L.P>
        <L.Button
          onClick={() => {
            setValue('Berlin');
          }}
        >
          set value
        </L.Button>
      </L.P>
      <L.P>
        uncontrolled
      </L.P>
      <L.P>
        <L.DropDownLink
          data={data}
          textField="city"
          compareObjectsBy={(item) => item.id}
          onChange={(event) => {
            console.log(event.component.value);
          }}
        />
      </L.P>
    </L.Div>
  );
};
