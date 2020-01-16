// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import { DropDown } from './index';

describe('DropDown SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<DropDown />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('DropDown ATTRIBUTES', () => {
  describe('className prop', () => {
    const wrapper = mount(<DropDown _box>default</DropDown>);

    it('should have className given by prop', () => {
      expect(wrapper.find('span').hasClass('box')).toBeTruthy();
    });

    it('should change classes through props', () => {
      wrapper.setProps({ _active: true, _box: false });

      expect(wrapper.find('span').hasClass('box')).toBeFalsy();

      expect(wrapper.find('span').hasClass('active')).toBeTruthy();
    });

    it('className should not change prop-classes', () => {
      wrapper.setProps({ className: 'testClass' });

      expect(wrapper.find('span').hasClass('box')).toBeFalsy();

      expect(wrapper.find('span').hasClass('active')).toBeTruthy();

      expect(wrapper.find('span').hasClass('testClass')).toBeTruthy();
    });
  });

  it('should be wrapped in wrapper', () => {
    const wrapper = mount(<DropDown wrapperRender={() => <span />} />);

    expect(wrapper.getDOMNode().tagName).toEqual('SPAN');

    wrapper.setProps({ wrapperRender: () => <div /> });

    expect(wrapper.getDOMNode().tagName).toEqual('DIV');

    wrapper.setProps({ wrapperRender: () => <p /> });

    expect(wrapper.getDOMNode().tagName).toEqual('P');
  });

  it('should have children prop', () => {
    const wrapper = shallow(<DropDown><div className="lvl1"><span className="lvl2">TEXT</span></div></DropDown>);

    expect(wrapper.props().children).toBeDefined();

    expect(wrapper.props().children.type).toEqual('div');

    expect(wrapper.props().children.props.className).toEqual('lvl1');

    expect(wrapper.props().children.props.children.type).toEqual('span');

    expect(wrapper.props().children.props.children.props.className).toEqual('lvl2');

    expect(wrapper.props().children.props.children.props.children).toEqual('TEXT');
  });
});
