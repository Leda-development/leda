import React from 'react';
import {
  getNodeText, render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AutoComplete } from './index';

describe('AutoComplete SNAPSHOTS', () => {
  test('basic usage', () => {
    const wrapper = render((
      <AutoComplete
        onChange={jest.fn()}
        data={['value1', 'value2']}
        value="value"
      />
    ));
    expect(wrapper.container).toMatchSnapshot();
  });
  test('value in controllable mode', () => {
    const wrapper = render((
      <AutoComplete
        onChange={jest.fn()}
        data={['value1', 'value2']}
        value="value"
      />
    ));
    expect(screen.getByRole('textbox')).toHaveValue('value');
    expect(wrapper.container).toMatchSnapshot();
  });
  describe('should render multi-type attributes', () => {
    test('data', () => {
      const wrapper = render((
        <AutoComplete
          onChange={jest.fn()}
          data={['value1', 'value2']}
          value="value"
          isOpen
        />
      ));
      expect(wrapper.container).toMatchSnapshot();
      const data = [
        { text: 'text1', value: 'value1' },
        { text: 'text2', value: 'value2' },
      ];
      wrapper.rerender((
        <AutoComplete
          onChange={jest.fn()}
          data={data}
          value={data[0].text}
          textField="text"
          isOpen
        />
      ));
      expect(wrapper.container).toMatchSnapshot();
    });
  });
  describe('should render different component states', () => {
    test('readonly', () => {
      const wrapper = render((
        <AutoComplete
          onChange={jest.fn()}
          data={['value1', 'value2']}
          value="value"
          readOnly
        />
      ));
      expect(document.querySelector('input')?.readOnly).toBeTruthy();
      expect(wrapper.container).toMatchSnapshot();
    });
    test('opened', () => {
      const wrapper = render((
        <AutoComplete
          onChange={jest.fn()}
          data={['value1', 'value2']}
          value="value"
          isOpen
        />
      ), {
        queries: {

        },
      });
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
      expect(wrapper.container).toMatchSnapshot();
    });
    test('loading', () => {
      const wrapper = render((
        <AutoComplete
          onChange={jest.fn()}
          data={['value1', 'value2']}
          value="value"
          isLoading
          isOpen
        />
      ));
      expect(document.querySelectorAll('div.loader-wrapper div.loader-container span.loader-element')).toHaveLength(1);
      expect(wrapper.container).toMatchSnapshot();
    });
    test('disabled', () => {
      render((
        <AutoComplete
          onChange={jest.fn()}
          data={['value1', 'value2']}
          isDisabled
        />
      ));
      expect(screen.getByRole('textbox')).toBeDisabled();
      expect(document.querySelectorAll('.disabled')).toHaveLength(1);
    });
  });
  describe('should render validation', () => {
    test('validation', () => {
      const data = ['value1', 'value2'];
      const message = 'message';
      const validator = jest.fn((value: string) => value in data);
      const wrapper = render((
        <AutoComplete
          onChange={jest.fn()}
          data={data}
          name="name"
          form="form"
          // todo fix component props type
          invalidMessage={message}
          validator={validator as any}
        />
      ));
      screen.getByRole('textbox').focus();
      userEvent.type(screen.getByRole('textbox'), 'value', {
        allAtOnce: true,
      });
      screen.getByRole('textbox').blur();
      expect(validator).toBeCalledTimes(1);
      expect(screen.getByRole('textbox')).toBeInvalid();
      expect(document.querySelector('span.invalid-message-list span.invalid-message-item')).toHaveTextContent(message);
      expect(wrapper.container).toMatchSnapshot();
    });
    test('required validation', () => {
      const onChangeHandler = jest.fn();
      const message = 'message';
      const wrapper = render((
        <AutoComplete
          onChange={onChangeHandler}
          data={['value1', 'value2']}
          name="name"
          form="form"
          requiredMessage={message}
          isRequired
        />
      ));
      screen.getByRole('textbox').focus();
      userEvent.type(screen.getByRole('textbox'), '', {
        allAtOnce: true,
      });
      // todo check event call condition
      expect(onChangeHandler).toBeCalledTimes(0);
      screen.getByRole('textbox').blur();
      expect(screen.getByRole('textbox')).toBeInvalid();
      expect(screen.getByRole('textbox')).toBeRequired();
      expect(document.querySelector('span.invalid-message-list span.invalid-message-item')).toHaveTextContent(message);
      expect(wrapper.container).toMatchSnapshot();
    });
  });
});

describe('AutoComplete HANDLERS', () => {
  test('focus and blur', () => {
    const onFocusHandler = jest.fn();
    const onBlurHandler = jest.fn();
    const eventMatcher = expect.objectContaining({
      target: expect.objectContaining({
        value: 'value',
      }),
      component: expect.objectContaining({
        name: 'name',
        value: 'value',
      }),
    });
    render((
      <AutoComplete
        onChange={jest.fn()}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        data={['value1', 'value2']}
        value="value"
        name="name"
      />
    ));
    screen.getByRole('textbox').focus();
    expect(screen.getByRole('textbox')).toHaveFocus();
    screen.getByRole('textbox').blur();
    expect(screen.getByRole('textbox')).not.toHaveFocus();
    expect(onFocusHandler).toBeCalledTimes(1);
    expect(onFocusHandler).toBeCalledWith(eventMatcher);
    expect(onBlurHandler).toBeCalledTimes(1);
    expect(onBlurHandler).toBeCalledWith(eventMatcher);
  });
  test('change', () => {
    const onChangeHandler = jest.fn();
    const newValue = 'new value';
    const eventMatcher = expect.objectContaining({
      target: expect.objectContaining({
        value: 'value',
      }),
      component: expect.objectContaining({
        name: 'name',
        value: newValue,
      }),
    });
    render((
      <AutoComplete
        onChange={onChangeHandler}
        data={['value1', 'value2']}
        value="value"
        name="name"
      />
    ));
    userEvent.type(screen.getByRole('textbox'), newValue, {
      allAtOnce: true,
    });
    expect(onChangeHandler).toBeCalledTimes(1);
    expect(onChangeHandler).toBeCalledWith(eventMatcher);
  });
});

describe('AutoComplete ATTRIBUTES', () => {
  describe('should render class', () => {
    test('className', () => {
      render((
        <AutoComplete
          className="test-class"
          onChange={jest.fn()}
          data={['value1', 'value2']}
        />
      ));
      expect(document.querySelectorAll('div.test-class')).toHaveLength(1);
    });
    test('danger', () => {
      render((
        <AutoComplete
          _danger
          onChange={jest.fn()}
          data={['value1', 'value2']}
        />
      ));
      expect(document.querySelectorAll('div.danger')).toHaveLength(1);
    });
    test('active', () => {
      render((
        <AutoComplete
          _active
          onChange={jest.fn()}
          data={['value1', 'value2']}
        />
      ));
      expect(document.querySelectorAll('div.active')).toHaveLength(1);
    });
  });
  describe('should render data', () => {
    test('string type', () => {
      const data = ['value1', 'value2'];
      render((
        <AutoComplete
          onChange={jest.fn()}
          data={data}
          isOpen
        />
      ));
      expect(screen.getAllByRole('listitem').map(getNodeText)).toEqual(data);
    });
    test('object type', () => {
      const data = [
        { text: 'text1', value: 'value1' },
        { text: 'text2', value: 'value2' },
      ];
      render((
        <AutoComplete
          onChange={jest.fn()}
          data={data}
          textField="text"
          isOpen
        />
      ));
      expect(screen.getAllByRole('listitem').map(getNodeText)).toEqual(data.map((element) => element.text));
    });
  });
  test('value adjustment', () => {
    const onChangeHandler = jest.fn();
    const data = ['value1', 'value2'];
    const newValue = 'new value';
    const eventMatcher = expect.objectContaining({
      target: expect.objectContaining({}),
      component: expect.objectContaining({
        method: 'type',
        name: 'name',
        value: newValue,
        suggestion: null,
      }),
    });
    render((
      <AutoComplete
        onChange={onChangeHandler}
        data={data}
        name="name"
        shouldCorrectValue
      />
    ));
    userEvent.type(screen.getByRole('textbox'), 'new value', {
      allAtOnce: true,
    });
    expect(onChangeHandler).toBeCalledTimes(1);
    screen.getByRole('textbox').blur();
    expect(onChangeHandler).toBeCalledWith(eventMatcher);
  });
  test('data filtration', () => {
    const onChangeHandler = jest.fn();
    const value = 'value';
    const data = ['option', value, 'variant'];
    render((
      <AutoComplete
        onChange={onChangeHandler}
        data={data}
        isOpen
      />
    ));
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    userEvent.type(screen.getByRole('textbox'), 'va', {
      allAtOnce: true,
    });
    expect(onChangeHandler).toBeCalledTimes(1);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    userEvent.type(screen.getByRole('textbox'), 'val', {
      allAtOnce: true,
    });
    expect(onChangeHandler).toBeCalledTimes(2);
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByRole('listitem')).toHaveTextContent(value);
  });
});
