import * as React from 'react';
import * as L from '../../../leda';

export const BasicUsage = (props: any): React.ReactElement => {
  return (
    <L.Div _demoStory>
      <L.MaskedInput
        mask="+7 (###)-###-##-##"
        placeholder="+7 (___)-___-__-__"
        onEnterPress={({ component }) => {
          console.log(component.name, component.value);
        }}
        onChange={ev => {
          console.log('ev.component', ev.component)
        }}
      />
    </L.Div>
  );
};
