import * as React from 'react';
import * as L from '../../../leda';
import { SomeObject } from '../../../leda/commonTypes';

export const Controlled = (args: SomeObject): React.ReactElement => {
  const [value, setValue] = React.useState<string[]>(['London', 'Paris']);
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>();
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <L.Div _box _inner _demoBg>
      <L.MultiSelect
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
        defaultValue={['London']}
        _width40
        isOpen={isOpen}
        isLoading={isLoading}
        onChange={(event) => {
          console.log('ev.component.selectedValue', event.component.selectedValue);
          console.log('ev.component.value', event.component.value);
          setValue(event.component.value as string[]);
        }}
        onEnterPress={(event) => {
          console.log(event);
        }}
        isDisabled={isDisabled}
        value={value}
      >
      </L.MultiSelect>
      <br />
      <br />
      <L.Button _warning={isDisabled} onClick={() => setIsDisabled(!isDisabled)}>Toggle isDisabled</L.Button>
      {' '}
      <L.Button _warning={isLoading} onClick={() => setIsLoading(!isLoading)}>Toggle isLoading</L.Button>
      {' '}
      <L.Button _warning={isOpen} onClick={() => setIsOpen(isOpen ? undefined : true)}>Toggle isOpen</L.Button>
      <br />
      <br />
      <L.Button _warning onClick={() => setValue([])}>Clear value</L.Button>
    </L.Div>
  );
};
