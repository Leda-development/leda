import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';

const exampleCode = `
export const EmptyValues = (args: SomeObject): React.ReactElement => (
  <L.Div _box _inner _demoBg>
    <L.DropDownSelect
      data={[
        'London',
        'Islamabad',
        'Berlin',
        'Washington',
        'Paris',
        'Rome',
        'Tokyo',
        'Budapest',
        'Ottawa',
        'Moscow',
      ]}
      placeholder="Choose a city..."
      shouldAllowEmpty
      _width40
    >
    </L.DropDownSelect>
  </L.Div>
);
`;

export const EmptyValues = (args: SomeObject): React.ReactElement => (
  <L.Div _box _inner _demoBg>
    <L.DropDownSelect
      data={[
        'London',
        'Islamabad',
        'Berlin',
        'Washington',
        'Paris',
        'Rome',
        'Tokyo',
        'Budapest',
        'Ottawa',
        'Moscow',
      ]}
      placeholder="Choose a city..."
      shouldAllowEmpty
      _width40
    >
    </L.DropDownSelect>
  </L.Div>
);
