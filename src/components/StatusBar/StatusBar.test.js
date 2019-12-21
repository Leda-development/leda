import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { StatusBar } from './index';

const data = [
  { id: 'todo', labelText: 'To do' },
  { id: 'wip', labelText: 'In progress' },
  { id: 'done', labelText: 'Done' },
];

describe('StatusBar SNAPSHOTS', () => {
  it('should render', () => {
    const statusBar = (
      <StatusBar
        data={data}
        textField="labelText"
        value={data[0]}
      />
    );
    const wrapper = mount(statusBar);

    expect(wrapper.find('Span')).toHaveLength(6);

    expect(wrapper.find('.first .statusbar-icon').first().hasClass('progress')).toBeTruthy();

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('StatusBar HANDLERS', () => {
  it('should trigger onClick', () => {
    const onClick = jest.fn();
    const statusBar = (
      <StatusBar
        onClick={onClick}
        data={data}
        textField="labelText"
        value={data[0]}
      />
    );
    const wrapper = mount(statusBar);

    wrapper.find('span.statusbar-icon').first().props().onClick({ target: {} });

    expect(onClick).toHaveBeenCalled();
  });
});

describe('StatusBar ATTRIBUTES', () => {
  it('should add progress class to current item', () => {
    const statusBar = (
      <StatusBar
        data={data}
        textField="labelText"
        value={data[0]}
      />
    );
    const wrapper = mount(statusBar);

    expect(wrapper.find('.first .statusbar-icon').first().hasClass('progress')).toBeTruthy();
  });

  it('should give first an last item suitable className', () => {
    const statusBar = (
      <StatusBar
        data={data}
        textField="labelText"
        value={data[0]}
      />
    );
    const wrapper = mount(statusBar);

    expect(wrapper.find('.statusbar-status-item').first().hasClass('first')).toBeTruthy();

    expect(wrapper.find('.statusbar-status-item').last().hasClass('last')).toBeTruthy();
  });

  it('should add success className to all items before current', () => {
    const statusBar = (
      <StatusBar
        data={data}
        textField="labelText"
        value={data[1]}
      />
    );
    const wrapper = mount(statusBar);

    expect(wrapper.find('span.success')).toHaveLength(1);

    expect(wrapper.find('div.statusbar-status-item span.statusbar-icon').first().hasClass('success')).toBeTruthy();

    expect(wrapper.find('div.statusbar-status-item span.statusbar-icon').at(1).hasClass('progress')).toBeTruthy();
  });
});
