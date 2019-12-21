import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Tooltip } from './index';
import { I } from '../I';

describe('Tooltip SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<Tooltip title="Tips">Test</Tooltip>);

    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.unmount();
  });

  it('should render isOpened state', () => {
    const wrapper = mount(<Tooltip title="Tips" isOpened>Test</Tooltip>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Tooltip ATTRIBUTES', () => {
  it('should accept jsx in title', () => {
    const wrapper = mount(<Tooltip title={<span style={{ color: 'blue' }}>Test</span>} />);
    expect(wrapper.find('span')).toHaveLength(1);
  });

  describe('position prop', () => {
    it('should be top by default', () => {
      const wrapper = mount(<Tooltip title="TIPS">Test</Tooltip>);

      expect(wrapper.find('.tooltip').hasClass('top')).toBeTruthy();
    });

    it('should be right', () => {
      const wrapper = mount(<Tooltip position="right" title="TIPS">Test</Tooltip>);

      expect(wrapper.find('.tooltip').hasClass('right')).toBeTruthy();
    });

    it('should be bottom', () => {
      const wrapper = mount(<Tooltip position="bottom" title="TIPS">Test</Tooltip>);

      expect(wrapper.find('.tooltip').hasClass('bottom')).toBeTruthy();
    });

    it('should be left', () => {
      const wrapper = mount(<Tooltip position="left" title="TIPS">Test</Tooltip>);

      expect(wrapper.find('.tooltip').hasClass('left')).toBeTruthy();
    });
  });

  it('should have children prop', () => {
    const wrapper = mount(<Tooltip title="Tips"><div className="lvl1" style={{ float: 'right' }}><span className="lvl2">TEXT</span></div></Tooltip>);

    const div = wrapper.props().children;

    expect(div).toBeDefined();

    expect(div.type).toEqual('div');

    expect(div.props.style).toEqual({ float: 'right' });

    expect(div.props.className).toEqual('lvl1');

    const span = div.props.children;

    expect(span.type).toEqual('span');

    expect(span.props.className).toEqual('lvl2');

    expect(span.props.children).toEqual('TEXT');
  });

  it('should no wrap element', () => {
    const wrapper = mount(<Tooltip title="Test" position="top"><I _iSearch /></Tooltip>);

    expect(wrapper.find('I').parents().children()).toHaveLength(4);
  });

  it('should wrap elements', () => {
    const wrapper = mount(
      <Tooltip title="Test" position="top">
        <I _iSearch />
        <I _iSearch />
      </Tooltip>,
    );

    expect(wrapper.find('Tooltip div').at(1).children()).toHaveLength(2);

    expect(wrapper.find('Tooltip').children('div').last().children()).toHaveLength(2);
  });
});
