import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { StickyPanel } from './index';
import { Button } from '../Button';
import { H1 } from '../Headers';

describe('StickyPanel SNAPSHOTS', () => {
  it('should render', () => {
    const panel = (
      <StickyPanel>
        <Button _success>OK</Button>
        <Button>Cancel</Button>
      </StickyPanel>
    );

    const wrapper = mount(panel);

    expect(wrapper.find('div.stickypanel-wrapper')).toHaveLength(1);

    expect(wrapper.find('.stickypanel-container')).toHaveLength(1);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('StickyPanel ATTRIBUTES', () => {
  it('should have children', () => {
    const panel = (
      <StickyPanel>
        <H1>Would you like to continue?</H1>
        <Button success>OK</Button>
        <Button>Cancel</Button>
      </StickyPanel>
    );

    const wrapper = mount(panel);

    expect(wrapper.containsAllMatchingElements([
      <H1>Would you like to continue?</H1>,
      <Button success>OK</Button>,
      <Button>Cancel</Button>,
    ])).toBeTruthy();
  });

  it('should accept componentOffset', () => {
    const panel = (
      <StickyPanel componentOffset={200}>
        <H1>Would you like to continue?</H1>
        <Button success>OK</Button>
        <Button>Cancel</Button>
      </StickyPanel>
    );

    const wrapper = mount(panel); // eslint-disable-line
    // todo: не создает отступ, дописать тест, когда починят
  });
});
