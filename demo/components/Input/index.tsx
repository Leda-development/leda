import * as React from 'react';
import { Story } from '../Story';
import { Basic } from './Basic';
import { Customization } from './Customization';

export const Input = () => (
  <Story title="Input">
    <Basic title="Input" />
    <Customization title="Customization" />
  </Story>
);
