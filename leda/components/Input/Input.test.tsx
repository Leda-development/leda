// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { Input } from './index';

describe('Input SNAPSHOTS', () => {
  it('should render basic usage', () => {
    const wrapper = mount(<Input onChange={jest.fn()} onBlur={jest.fn()} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render value in controllable mode', () => {
    const wrapper = mount(<Input value="test value" onChange={jest.fn()} onBlur={jest.fn()} />);

    expect(wrapper.find('input').props().value).toEqual('test value');

    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({ value: 'new test value' });

    expect(wrapper.find('input').props().value).toEqual('new test value');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('should render different component states', () => {
    it('should render disabled', () => {
      const wrapper = mount(<Input isDisabled onChange={jest.fn()} onBlur={jest.fn()} />);

      expect(wrapper.find('input').props().disabled).toBeTruthy();

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('Input HANDLERS', () => {
  it('should test onBlur', () => {
    const onBlurHandler = jest.fn();
    const wrapper = mount(<Input value="text value" className="test" name="auto" onBlur={onBlurHandler} />);

    wrapper.find('input').props().onBlur({ target: {} });

    expect(onBlurHandler).toHaveBeenCalled();
  });

  it('should test onChange', () => {
    const onChangeHandler = jest.fn();
    const wrapper = mount(<Input name="auto" onChange={onChangeHandler} onBlur={jest.fn()} />);

    wrapper.find('input').props().onChange({ target: { value: 'test value' } });

    expect(onChangeHandler).toHaveBeenCalledWith({ component: { value: 'test value', name: 'auto' }, target: { value: 'test value' } });
  });

  it('should test onEnterPress', () => {
    const onEnterPressHandler = jest.fn();
    const wrapper = mount(<Input name="auto" value="text" onEnterPress={onEnterPressHandler} />);

    wrapper.find('input').props().onKeyDown({ key: 'Enter', currentTarget: { value: 'text' } });

    expect(onEnterPressHandler).toHaveBeenCalled();
  });
});

describe('Input ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = mount(<Input _box onBlur={jest.fn()} />);

    expect(wrapper.find('div.input-wrapper').hasClass('box')).toBeTruthy();


    wrapper.setProps({ _active: true, _box: false });

    expect(wrapper.find('div.input-wrapper').hasClass('box')).toBeFalsy();

    expect(wrapper.find('div.input-wrapper').hasClass('active')).toBeTruthy();


    wrapper.setProps({ className: 'testClass' });

    expect(wrapper.find('div.input-wrapper').hasClass('box')).toBeFalsy();

    expect(wrapper.find('div.input-wrapper').hasClass('active')).toBeTruthy();

    expect(wrapper.find('div.input-wrapper').hasClass('testClass')).toBeTruthy();
  });

  it('should have maxLength limit', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Input onChange={onChange} maxLength={5} onBlur={jest.fn()} />);

    wrapper.find('input').props().onChange({ target: { value: 'value' } });

    expect(onChange).toHaveBeenCalled();

    wrapper.find('input').props().onChange({ target: { value: 'new value' } });
    // should not call onChange twice
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should throw error if no predefined allowedSymbols found', () => {
    const wrapper = mount(<Input allowedSymbols="lala-land" />);

    const input = wrapper.find('input');

    const error = new Error('L.Input: no such predefined allowedSymbols - "lala-land"!');

    expect(() => input.props().onChange({ target: { value: 'anything' } })).toThrow(error);
  });

  it('should throw error allowedSymbols is not string or RegExp', () => {
    const wrapper = mount(<Input allowedSymbols={777} />);

    const input = wrapper.find('input');

    const error = new Error('L.Input: allowedSymbols prop accepts only predefined string or RegExp!');

    expect(() => input.props().onChange({ target: { value: 'anything' } })).toThrow(error);
  });
});

describe('Input VALIDATION', () => {
  it('should be invalid if value passes validation and vice versa', () => {
    const validator = (value) => value && value.length >= 4;
    const wrapper = mount(<Input onBlur={jest.fn()} isRequired invalidMessage="value length must be more than 4!" validator={validator} />);

    wrapper.find('input').props().onChange({ target: { value: 'a' } });

    wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));


    wrapper.find('input').props().onChange({ target: { value: 'value length is more than 4!' } });

    wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));
  });

  it('should be invalid if component is isRequired, value is empty and onBlur was called', () => {
    const wrapper = mount(<Input onBlur={jest.fn()} isRequired form="test-form" name="input" />);

    act(() => {
      wrapper.find('input').props().onBlur({ target: { value: '' } });
    });

    expect(wrapper.find('div.input-element-wrapper').getDOMNode().classList.contains('danger')).toBeTruthy();
  });
});
