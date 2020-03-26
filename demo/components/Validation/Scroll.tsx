import * as React from 'react';
import * as L from '../../../leda';

export const Scroll = () => (
  <L.Div _box _inner>
    <L.Div>
      <L.Div _inner>
        <L.Input
          isRequired
          validator="email"
          invalidMessage="Wrong email format"
          form="scroll"
          name="Input1"
          placeholder="scroll1"
        />
      </L.Div>
      <L.Div _inner>
        <L.Input
          isRequired
          validator="email"
          invalidMessage="Wrong email format"
          form="scroll"
          name="Input2"
          placeholder="scroll2"
        />
      </L.Div>
      <L.Div _inner>
        <L.Input
          isRequired
          validator="email"
          invalidMessage="Wrong email format"
          form="scroll2"
          name="Input3"
          placeholder="scroll3"
        />
      </L.Div>
      <L.Div _inner>
        <L.MaskedInput
          mask="+7 (###) ###-##-##"
          placeholderChar="*"
          placeholder="Введите номер телефона"
          isRequired
          requiredMessage="Обязательное поле!"
          onChange={(event) => {
            console.log('ev.component.value', event.component.value);
          }}
          form="scroll3"
          name="masked"
          _width30
        />
      </L.Div>
      <L.Div _inner>
        <L.Button
          shouldScrollToInvalidFields
          scrollOffset={64}
          form={['scroll', 'scroll2', 'scroll3']}
          onClick={() => console.log('submitted')}
          onValidationFail={(event) => console.log('failed', event.invalidForms)}
          _warning
        >
            Click me
        </L.Button>
      </L.Div>
    </L.Div>
  </L.Div>
);
