/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../leda';


export const Button = (): React.ReactElement => (
  <L.Div _demoStory>
    <L.Button onClick={() => alert('Alert!')}>Клик!</L.Button>
    {' '}
    <L.Button isLoading onClick={() => alert('Alert!')}>isLoading</L.Button>
    {' '}
    <L.Button isDisabled onClick={() => alert('Alert!')}>isDisabled</L.Button>
  </L.Div>
);
