import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  render, screen,
} from '@testing-library/react';
import { MultiSelect } from './index';

describe('MultiSelect SNAPSHOTS', () => {
  it('should render basic usage', () => {
    const wrapper = render((
      <MultiSelect data={['value0', 'value1']} value={['value1']} />
    ));

    expect(wrapper.container).toMatchSnapshot();
  });

  it('should render value in controllable mode', () => {
    const wrapper = render((
      <MultiSelect data={['value0', 'value1']} value={['value0']} />
    ));

    expect(document.querySelector('span.tags-item')).toHaveTextContent('value0');

    expect(wrapper.container).toMatchSnapshot();

    wrapper.rerender((
      <MultiSelect data={['value0', 'value1']} value={['value1']} />
    ));

    expect(document.querySelector('span.tags-item')).toHaveTextContent('1');

    expect(wrapper.container).toMatchSnapshot();
  });

  it('should render data in controllable mode', () => {
    const wrapper = render((
      <MultiSelect data={['value0', 'value1']} value={['value0']} />
    ));

    expect(wrapper.container).toMatchSnapshot();

    wrapper.rerender((
      <MultiSelect
        data={[
          { id: 0, value: 'value0' },
          { id: 1, value: 'value1' },
        ]}
        value={['value1']}
      />
    ));

    expect(wrapper.container).toMatchSnapshot();
  });
});

describe('MultiSelect ATTRIBUTES', () => {
  it('should list isOpen', () => {
    const wrapper = render((
      <MultiSelect data={['value0', 'value1']} value={['value0']} isOpen />
    ));

    expect(document.querySelectorAll('li.suggestion-item')).toHaveLength(1);

    expect(wrapper.container).toMatchSnapshot();
  });

  it('should list loading', () => {
    const wrapper = render((
      <MultiSelect data={['value0', 'value1']} value={['value0']} isOpen isLoading />
    ));

    expect(document.querySelectorAll('span.loader-element')).toHaveLength(1);

    expect(wrapper.container).toMatchSnapshot();
  });

  it('should render noData template', () => {
    const wrapper = render((
      <MultiSelect data={['value0', 'value1']} value={['value0']} isOpen />
    ));

    expect(wrapper.container).toMatchSnapshot();

    userEvent.type(screen.getByRole('textbox'), 'clear');

    expect(document.querySelector('div.nodata')).toHaveTextContent('Ничего не найдено');

    expect(wrapper.container).toMatchSnapshot();
  });
});

describe('MultiSelect HANDLERS', () => {
  it('should test onFocus', () => {
    const handleFocus = jest.fn();

    const wrapper = render((
      <MultiSelect data={['value0', 'value1']} value={['value0']} isOpen name="name" onFocus={handleFocus} />
    ));

    screen.getByRole('textbox').focus();

    expect(handleFocus).toHaveBeenCalledTimes(1);

    const [[event]] = handleFocus.mock.calls;

    expect(event.component.name).toEqual('name');

    expect(event.component.value).toEqual(['value0']);

    expect(document.querySelectorAll('span.tags-item')).toHaveLength(1);

    expect(wrapper.container).toMatchSnapshot();
  });

  it('should test onBlur', () => {
    const handleBlur = jest.fn();

    const wrapper = render((
      <MultiSelect data={['value0', 'value1']} value={['value0']} name="name" onBlur={handleBlur} />
    ));

    expect(wrapper.container).toMatchSnapshot();

    screen.getByRole('textbox').focus();
    screen.getByRole('textbox').blur();

    expect(handleBlur).toHaveBeenCalledTimes(1);

    const [[event]] = handleBlur.mock.calls;

    expect(event.component.value).toEqual(['value0']);

    expect(event.component.name).toEqual('name');

    expect(event.component.isValid).toBeTruthy();

    expect(document.querySelectorAll('span.tags-item')).toHaveLength(1);

    expect(wrapper.container).toMatchSnapshot();
  });

  it('should test onChange', () => {
    const handleChange = jest.fn();

    const wrapper = render((
      <MultiSelect data={['value0', 'value1']} value={['value0']} isOpen name="name" onChange={handleChange} />
    ));

    userEvent.click(document.querySelectorAll('li.suggestion-item')[0]);

    expect(handleChange).toHaveBeenCalledTimes(1);

    const [[event]] = handleChange.mock.calls;

    expect(event.component.value).toEqual(['value0', 'value1']);

    expect(event.component.name).toEqual('name');

    expect(event.component.selectedValue).toEqual('value1');

    expect(event.component.deselectedValues).toBeUndefined();

    expect(wrapper.container).toMatchSnapshot();
  });

  it('should test onDeselect', () => {
    const handleChange = jest.fn();

    const wrapper = render((
      <MultiSelect data={['value0', 'value1']} value={['value0']} isOpen name="name" onChange={handleChange} />
    ));

    userEvent.click(document.querySelectorAll('span.tags-icon')[0]);

    expect(handleChange).toHaveBeenCalledTimes(1);

    const [[event]] = handleChange.mock.calls;

    expect(event.component.value).toEqual([]);

    expect(event.component.name).toEqual('name');

    expect(event.component.selectedValue).toBeUndefined();

    expect(event.component.deselectedValues).toEqual(['value0']);

    expect(wrapper.container).toMatchSnapshot();
  });

  it('should test onDeselect by clear button', () => {
    const handleChange = jest.fn();

    const wrapper = render((
      <MultiSelect data={['value0', 'value1']} value={['value0']} isOpen name="name" onChange={handleChange} hasClearButton />
    ));

    userEvent.click(document.querySelectorAll('span.multiselect-clear-icon')[0]);

    expect(handleChange).toHaveBeenCalledTimes(1);

    const [[event]] = handleChange.mock.calls;

    expect(event.component.value).toEqual([]);

    expect(event.component.name).toEqual('name');

    expect(event.component.deselectedValues).toEqual(['value0']);

    expect(wrapper.container).toMatchSnapshot();
  });
});
