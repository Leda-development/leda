import * as enzyme from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { form } from './form';
import { AutoComplete } from '../components/AutoComplete';
import { Textarea } from '../components/Textarea';

describe('controlled form get', () => {
  const formName = 'form-name-get';
  const fieldValue = 'field-value';
  const data = [fieldValue];
  const fieldName = 'auto-complete';
  const handleChange = jest.fn();
  const component = (
    <AutoComplete
      form={formName}
      value={fieldValue}
      data={data}
      isRequired
      name={fieldName}
      onChange={handleChange}
    />
  );
  enzyme.mount(component);
  test('get one', () => {
    const field = form(formName, fieldName).get();
    expect(field).toMatchObject({
      name: fieldName,
      value: fieldValue,
    });
  });
  test('get all', () => {
    const field = form(formName).get();
    expect(field).toMatchObject([
      {
        name: fieldName,
        value: fieldValue,
      },
    ]);
  });
});

describe('controlled form reset', () => {
  const formName = 'form-name-reset';
  const fieldValue = 'field-value';
  const data = [fieldValue];
  const fieldName = 'auto-complete';
  test('reset one', () => {
    const handleChange = jest.fn();
    const component = (
      <AutoComplete
        form={formName}
        value={fieldValue}
        data={data}
        isRequired
        name={fieldName}
        onChange={handleChange}
      />
    );
    const wrapper = enzyme.mount(component);
    const result = form(formName, fieldName).reset();
    expect(result).toBeTruthy();
    wrapper.unmount();
  });
  test('reset all', () => {
    const handleChange = jest.fn();
    const component = (
      <AutoComplete
        form={formName}
        value={fieldValue}
        data={data}
        isRequired
        name={fieldName}
        onChange={handleChange}
      />
    );
    const wrapper = enzyme.mount(component);
    const result = form(formName).reset();
    expect(result).toBeTruthy();
    wrapper.unmount();
  });
});

describe('uncontrolled form reset', () => {
  const defaultValue = 'default-value';
  const newValue = 'new-value';
  const formName = 'form-name-reset';
  const fieldName = 'auto-complete';
  test('reset one', () => {
    const component = (
      <Textarea
        defaultValue={defaultValue}
        form={formName}
        name={fieldName}
      />
    );
    const wrapper = enzyme.mount(component);
    wrapper.find('textarea').simulate('change', {
      target: {
        value: newValue,
      },
    });
    expect(wrapper.find('textarea').props().value).toEqual(newValue);
    act(() => {
      const result = form(formName, fieldName).reset();
      expect(result).toBeTruthy();
    });
    wrapper.update();
    expect(wrapper.find('textarea').props().value).toEqual(defaultValue);
    wrapper.unmount();
  });
  test('reset all', () => {
    const component = (
      <Textarea
        defaultValue={defaultValue}
        form={formName}
        name={fieldName}
      />
    );
    const wrapper = enzyme.mount(component);
    wrapper.find('textarea').simulate('change', {
      target: {
        value: newValue,
      },
    });
    expect(wrapper.find('textarea').props().value).toEqual(newValue);
    act(() => {
      const result = form(formName).reset();
      expect(result).toBeTruthy();
    });
    wrapper.update();
    expect(wrapper.find('textarea').props().value).toEqual(defaultValue);
    wrapper.unmount();
  });
});
