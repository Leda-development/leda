import React from 'react';
import {
  render,
} from '@testing-library/react';
import { ButtonGroup } from './index';


describe('Check ButtonGroup snapshots collection', () => {
  test('is ButtonGroup changed?', () => {
    const wrapper = render((
      <ButtonGroup name="buttonGroup" data={['Petya', 'Vasya', 'Oleg']} />
    ));
    expect(wrapper.container)
      .toMatchSnapshot();
  });
});
