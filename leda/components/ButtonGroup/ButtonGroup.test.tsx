import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import { ButtonGroup } from './index';
import { Input } from '../Input';


describe('Check ButtonGroup snapshots collection', () => {
  test('is ButtonGroup changed?', () => {
    const { container } = render(
      <ButtonGroup name="buttonGroup" data={['Petya', 'Vasya', 'Oleg']} />
    );
    const buttonGroup = container.firstChild;
    
    const wrapper = render((
      <ButtonGroup name="buttonGroup" data={['Petya', 'Vasya', 'Oleg']}></ButtonGroup>
    ));
    expect(getByText('button'))
      .toHaveLength(3);

    expect(wrapper.container)
      .toMatchSnapshot();
  });
});
