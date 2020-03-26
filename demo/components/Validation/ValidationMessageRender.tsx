import * as React from 'react';
import * as L from '../../../leda';

export const ValidationMessageRender = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <L.Div _box _inner>
      <L.Div>
        <L.Div _inner>
          <L.Input
            isRequired
            validator="email"
            invalidMessage="Wrong Email"
            form="customValidationMessage"
            name="Input1"
            placeholder="outer isValid"
          />
        </L.Div>
        <L.Div _inner>
          <L.Button
            form="customValidationMessage"
            onClick={handleClick}
            _warning
          >
            Click me
          </L.Button>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
