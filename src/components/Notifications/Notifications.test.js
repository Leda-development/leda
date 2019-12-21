import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Notifications } from './index';
// TODO: починить тесты
describe.skip('Notifications SNAPSHOTS', () => {
  it('should render basic usage', () => {
    const items = [
      {
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'success',
        color: 'success',
        delay: 10,
        id: 1,
      },
      {
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'danger',
        color: 'danger',
        delay: 10,
        id: 2,
      },
    ];

    const wrapper = mount(<Notifications
      items={items}
      onClose={jest.fn()}
      maxItems={3}
    />);

    expect(wrapper.find('NotificationItem')).toHaveLength(2);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render items < maxItems', () => {
    const items = [
      {
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'success',
        color: 'success',
        delay: 10,
        id: 1,
      },
      {
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'danger',
        color: 'danger',
        delay: 10,
        id: 2,
      },
      {
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'danger',
        color: 'danger',
        delay: 10,
        id: 3,
      },
      {
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'danger',
        color: 'danger',
        delay: 10,
        id: 4,
      },
      {
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'danger',
        color: 'danger',
        delay: 10,
        id: 5,
      },
    ];

    const wrapper = mount(<Notifications
      items={items}
      onClose={jest.fn()}
      maxItems={3}
    />);

    expect(wrapper.find('NotificationItem')).toHaveLength(3);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe.skip('Notifications handlers', () => {
  it('should trigger onClick close', () => {
    const items = [
      {
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'success',
        color: 'success',
        delay: 10,
        id: 1,
      },
      {
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'danger',
        color: 'danger',
        delay: 10,
        id: 2,
      },
    ];
    const wrapper = mount(<Notifications
      items={items}
      maxItems={3}
    />);

    wrapper.setProps({ onClose: ev => wrapper.setProps({ items: items.filter(item => ev.component.id !== item.id) }) });

    wrapper.update();

    wrapper.find('.uicon-close').first().props().onClick({ target: {} });

    wrapper.update();

    expect(wrapper.find('NotificationItem')).toHaveLength(1);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe.skip('Notifications timeout delete items', () => {
  it('should delete by timeout items', done => {
    const items = [
      {
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'success',
        color: 'success',
        delay: 1000,
        id: 1,
      },
    ];

    const wrapper = mount(<Notifications
      items={items}
      maxItems={3}
    />);

    wrapper.setProps({ onClose: ev => wrapper.setProps({ items: items.filter(item => ev.component.id !== item.id) }) });

    wrapper.update();

    expect(wrapper.find('NotificationItem')).toHaveLength(1);

    setTimeout(() => {
      wrapper.update();

      wrapper.update();

      expect(wrapper.find('NotificationItem')).toHaveLength(0);

      expect(toJson(wrapper)).toMatchSnapshot();

      done();
    }, 2000);
  });
});

describe.skip('Notifications add item', () => {
  it('should add new item', () => {
    const items = [
      {
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'success',
        color: 'success',
        delay: 10,
        id: 1,
      },
    ];

    const wrapper = mount(<Notifications
      items={items}
      onClose={jest.fn()}
      maxItems={3}
    />);

    const item = {
      text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      icon: 'danger',
      color: 'danger',
      delay: 10,
      id: 2,
    };

    const newItems = [...items, item];

    wrapper.setProps({ items: newItems });

    wrapper.update();

    expect(wrapper.state().items).toHaveLength(2);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should add new items and delete more than maxItems', () => {
    const items = [
      {
        text: '1Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'success',
        color: 'success',
        delay: 10,
        id: 1,
      },
      {
        text: '2Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
        icon: 'danger',
        color: 'danger',
        delay: 10,
        id: 2,
      },
    ];

    const wrapper = mount(<Notifications
      items={items}
      onClose={jest.fn()}
      maxItems={3}
    />);

    const item = {
      text: '3Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      icon: 'warning',
      color: 'warning',
      delay: 10,
      id: 3,
    };

    const newItems = [...items, item];

    wrapper.setProps({ items: newItems });

    wrapper.update();

    expect(wrapper.state().items).toHaveLength(3);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
