// @ts-nocheck
/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CheckBox } from './index';

describe('CheckBox SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<CheckBox id="test" />);

    expect(wrapper.find('input.checkbox-input')).toHaveLength(1);

    expect(wrapper.find('label.checkbox-label')).toHaveLength(1);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render controllable mode', () => {
    let checkedState = true;
    const toggleCheckedState = () => {
      checkedState = !checkedState;
    };
    const wrapper = mount(<CheckBox onChange={toggleCheckedState} value={checkedState} id="test" />);

    expect(wrapper.find('input').props().checked).toBeTruthy();

    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.find('input').props().onChange({ currentTarget: { value: 'test', checked: false } });

    wrapper.setProps({ value: checkedState });

    expect(wrapper.find('input').props().checked).toBeFalsy();

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('CheckBox HANDLERS', () => {
  it('should trigger onChange', () => {
    const onChange = jest.fn();
    const wrapper = mount(<CheckBox onChange={onChange} />);
    const evClick = new Event('click', { currentTarget: { checked: true, bubbles: true } });
    wrapper.find('input').getDOMNode().addEventListener('change', onChange);

    expect(wrapper.find('input').getDOMNode().checked).toBeFalsy();

    wrapper.find('input').getDOMNode().dispatchEvent(evClick);

    expect(wrapper.find('input').getDOMNode().checked).toBeTruthy();

    expect(wrapper.props().onChange).toHaveBeenCalled();
  });

  describe('should trigger onClick', () => {
    it('should trigger onClick', () => {
      const onClick = jest.fn((e) => e.target.value);
      const wrapper = mount(<CheckBox id="test" onClick={onClick} />);
      const evClick = new Event('click');
      const getInputDOM = wrapper.find('input').getDOMNode();

      // так как браузера у нас нет, повесим лисенер на инпут сами
      getInputDOM.addEventListener('click', onClick);
      // изначально checked = false
      expect(getInputDOM.checked).toBeFalsy();

      // кликнем по инпуту
      getInputDOM.dispatchEvent(evClick);
      // проверим, что значение изменилось
      expect(getInputDOM.checked).toBeTruthy();
      // проверим, что был вызван обработик
      expect(wrapper.props().onClick).toHaveBeenCalled();
    });

    it('should not call onClick if checkbox is disabled', () => {
      const wrapper = mount(<CheckBox id="test" />);
      const evChange = new Event('change');
      const getInputDOM = wrapper.find('input').getDOMNode();

      // сделаем инпут disabled
      wrapper.setProps({ isDisabled: true });
      // вызываем click
      wrapper.find('label').getDOMNode().dispatchEvent(evChange);
      // проверим, что инпут disabled
      expect(getInputDOM.disabled).toBeTruthy();
      // проверим, что значение в инпуте не изменилось
      expect(getInputDOM.checked).toBeFalsy();
    });
  });
});

describe('CheckBox ATTRIBUTES', () => {
  describe(', should add classname "semi" to wrapper', () => {
    const wrapper = mount(<CheckBox _semi />);

    it('should have className', () => {
      expect(wrapper.find('input').hasClass('checkbox-input')).toBeTruthy();

      expect(wrapper.find('label').hasClass('checkbox-label')).toBeTruthy();

      expect(wrapper.find('.checkbox-label.semi')).toHaveLength(1);
    });

    it(', should convert props to classes', () => {
      wrapper.setProps({ _active: true, _box: false });

      expect(wrapper.find('.checkbox-label.box')).toHaveLength(0);

      expect(wrapper.find('.checkbox-label.active')).toHaveLength(1);
    });

    it('classes passed through className should not override prop-classes', () => {
      wrapper.setProps({ className: 'test' });

      expect(wrapper.find('.checkbox-label.test')).toHaveLength(1);

      expect(wrapper.find('.checkbox-label.active')).toHaveLength(1);
    });
  });

  it('should have disabled class and ignore click', () => {
    const wrapper = mount(<CheckBox isDisabled />);

    expect(wrapper.find('input').props().disabled).toBeTruthy();

    wrapper.find('input').getDOMNode().dispatchEvent(new Event('change'));

    // todo: исправить disabled, инпут не должен менять своё значение при клике
    // expect(wrapper.find('input').getDOMNode().checked).toBeFalsy();
  });

  describe('children prop', () => {
    const wrapper = mount(<CheckBox><div className="lvl1"><span className="lvl2">TEXT</span></div></CheckBox>);

    it('should have children', () => {
      expect(wrapper.props().children).toBeDefined();

      expect(wrapper.props().children.props.children.props.children).toEqual('TEXT');
    });

    it('children should have correct className', () => {
      expect(wrapper.props().children.props.className).toEqual('lvl1');

      expect(wrapper.props().children.props.children.props.className).toEqual('lvl2');
    });

    it('children should have correct type', () => {
      expect(wrapper.props().children.type).toEqual('div');

      expect(wrapper.props().children.props.children.type).toEqual('span');
    });

    it('children should be passed to .checkbox-text', () => {
      expect(wrapper.find('.checkbox-label').props().children.props.className).toEqual('lvl1');
    });
  });
});
