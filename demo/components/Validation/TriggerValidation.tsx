/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../leda';
import { validate } from '../../../leda/components/Validation';

const exampleCode = `
export const BlockElements = () => (
  <L.Div>
    <L.Div _inner>
      <L.Input
        invalidMessage="Wrong email format"
        form="triggerValidation"
        name="Input1"
        isRequired
        validator="email"
        placeholder="trigger email validation"
        ref={inputEl}
      />
    </L.Div>
    <L.Div _inner>
      <L.Button
        onClick={() => inputEl.current && inputEl.current.triggerValidation && inputEl.current.triggerValidation()}
        _warning
      >
        trigger validation
      </L.Button>
    </L.Div>
  </L.Div>
);
`;

export const TriggerValidation = () => (
  <L.Div _box _inner>
    <L.Div>
      <L.Div _inner>
        <L.Input
          invalidMessage="Wrong email format"
          form="triggerValidation"
          name="Input1"
          isRequired
          validator="email"
          placeholder="trigger email validation"
        />
      </L.Div>
      <L.Div _inner>
        <L.Button
          onClick={() => validate('triggerValidation', 'Input1')}
          _warning
        >
            trigger validation
        </L.Button>
      </L.Div>
    </L.Div>
  </L.Div>
);
