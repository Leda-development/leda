/* eslint-disable react/prop-types, no-console */
import * as React from 'react';
import * as L from '../../../leda';

const exampleCode = `
export const BasicUsage = () => {
  const [value, setValue] = React.useState('');

  return (
    <L.Div _box _inner>
      <L.Input
        form="personal-data"
        name="name"
        isRequired
        onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setValue(ev.component.value)}
        value={value}
      />
    </L.Div>
  );
};
`;


export const BasicUsage = (props: { title: string }) => {
  const [value, setValue] = React.useState('');

  return (
    <L.Div _box _inner>
      <L.H6>Валидация при blur и по кнопке</L.H6>
      <L.Input
        form="personal-data"
        name="name"
        isRequired
        onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setValue(ev.component.value)}
        value={value}
      />
      <br />
      <br />
      <L.Button
        form="personal-data"
        _warning
        onClick={() => console.log('Successful click!')}
        onValidationFail={() => console.log('Click failed! Invalid fields')}
      >
        Валидировать!
      </L.Button>
    </L.Div>
  );
};
