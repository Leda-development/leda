import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

export const BasicUsage = (componentProps: any) => {
  const [props, setProps] = React.useState({});

  const [shouldTrim, setShouldTrim] = React.useState<boolean>(false);

  return (
    <L.Div _box _inner _demoBg>
      <L.Calendar
        value={new Date()}
        onChange={() => {
          console.log('value changed');
        }}
      />
    </L.Div>
  );
};
