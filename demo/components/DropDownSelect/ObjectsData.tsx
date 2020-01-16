import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';

const exampleCode = `
export const EmptyValues = (args: SomeObject): React.ReactElement => (
  <L.Div _box _inner _demoBg>
    <L.DropDownSelect
      data={[
        { city: 'Moscow', id: 1, attr: 'value1' },
        { city: 'Saint-Petersburg', id: 2, attr: 'value2' },
        { city: 'Ekaterinburg', id: 3, attr: 'value3' },
        { city: 'Novosibirsk', id: 4, attr: 'value4' },
      ]}
      onChange={handleChange}
      textField="city"
      value={value}
      placeholder="Choose a city"
    />
  </L.Div>
);
`;

export const ObjectsData = (args: SomeObject): React.ReactElement => {

  const [value, setValue] = React.useState<string>('Berlin');

  return(
    <L.Div _box _inner _demoBg>
      <L.DropDownSelect
        data={[
          { city: 'Moscow', id: 1, attr: 'value1' },
          { city: 'Saint-Petersburg', id: 2, attr: 'value2' },
          { city: 'Ekaterinburg', id: 3, attr: 'value3' },
          { city: 'Novosibirsk', id: 4, attr: 'value4' },
        ]}
        textField="city"
        value={value}
        placeholder="Choose a city"
      />
    </L.Div>
  );
};
