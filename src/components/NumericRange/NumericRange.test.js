

import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { NumericRange } from './index';
import { fixJSON } from '../../utils';

describe.skip('NumericRange SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<NumericRange onRangeChange={jest.fn()} />);

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should render value in controllable mode', () => {
    const wrapper = mount(<NumericRange fromValue={10} toValue={25} onRangeChange={jest.fn()} />);

    const getWrapperJSON = Wrapper => toJson(Wrapper);

    expect(wrapper.find('input').first().props().value).toEqual('10');

    expect(wrapper.find('input').last().props().value).toEqual('25');

    expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();

    wrapper.setProps({ fromValue: -1, toValue: 5 });

    wrapper.update();

    expect(wrapper.find('input').first().props().value).toEqual('-1');

    expect(wrapper.find('input').last().props().value).toEqual('5');

    expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();
  });

  it('should render min and max in controllable mode', () => {
    const wrapper = mount(<NumericRange rangeMin={0} rangeMax={5} onRangeChange={jest.fn()} />);

    const getWrapperJSON = Wrapper => toJson(Wrapper);

    expect(wrapper.find('NumericTextBox').first().props().min).toEqual(0);

    expect(wrapper.find('NumericTextBox').at(2).props().max).toEqual(5);

    expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();

    wrapper.setProps({ rangeMin: -1, rangeMax: 6 });

    wrapper.update();

    expect(wrapper.find('NumericTextBox').first().props().min).toEqual(-1);

    expect(wrapper.find('NumericTextBox').at(2).props().max).toEqual(6);

    expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();
  });
});

describe.skip('NumericRange HANDLERS', () => {
  it('should trigger onRangeChange', () => {
    const onRangeChange = jest.fn();
    const wrapper = mount(<NumericRange onRangeChange={onRangeChange} />);

    wrapper.find('NumericTextBox').at(1).props().onChange({ target: { value: 5 } });

    wrapper.find('NumericTextBox').at(1).props().onBlur();

    wrapper.find('NumericTextBox').last().props().onChange({ target: { value: 10 } });

    wrapper.find('NumericTextBox').last().props().onBlur();

    wrapper.update();

    expect(onRangeChange).toHaveBeenCalled();

    expect(wrapper.find('input').first().props().value).toEqual('5');

    expect(wrapper.find('input').last().props().value).toEqual('10');
  });

  it('should have correct event format', () => {
    const onRangeChange = jest.fn();
    const wrapper = mount(<NumericRange onRangeChange={onRangeChange} />);

    wrapper.find('NumericTextBox').at(1).props().onChange({ target: { value: 5 }, value: 5 });

    wrapper.find('NumericTextBox').at(1).props().onBlur();

    wrapper.find('NumericTextBox').last().props().onChange({ target: { value: 10 }, value: 10 });

    wrapper.find('NumericTextBox').last().props().onBlur();

    wrapper.update();

    expect(onRangeChange).toHaveBeenCalled();

    const getEvent = index => {
      const [event] = onRangeChange.mock.calls[index * 2];
      return event;
    };

    expect(getEvent(0).from).toEqual(5);

    expect(getEvent(1).to).toEqual(10);
  });
});

describe.skip('NumericRange ATTRIBUTES', () => {
  it('should have toDefault value', () => {
    const wrapper = mount(<NumericRange toDefaultValue={5} onRangeChange={jest.fn()} />);

    expect(wrapper.find('input').last().props().value).toEqual('5');
  });

  it('should have fromDefault value', () => {
    const wrapper = mount(<NumericRange fromDefaultValue={1} onRangeChange={jest.fn()} />);

    expect(wrapper.find('input').first().props().value).toEqual('1');
  });

  it('should have toMax limit', () => {
    const wrapper = mount(<NumericRange rangeMax={5} onRangeChange={jest.fn()} />);
    // потыкаем стрелочку вверх 10 раз
    for (let i = 0; i < 10; i += 1) {
      wrapper.find('input').last().props().onKeyDown({ keyCode: 38, preventDefault: () => {} });
    }

    wrapper.find('NumericTextBox').last().props().onBlur();

    wrapper.update();

    expect(wrapper.find('input').last().props().value).toEqual('5');
  });

  it('should have toMin limit', () => {
    const wrapper = mount(<NumericRange rangeMax={5} onRangeChange={jest.fn()} />);

    wrapper.find('NumericTextBox').at(1).props().onChange({ target: { value: 5 }, value: 5 });

    wrapper.find('NumericTextBox').at(1).props().onBlur();

    // потыкаем стрелочку вниз 10 раз
    for (let i = 0; i < 10; i += 1) {
      wrapper.find('input').last().props().onKeyDown({ keyCode: 40, preventDefault: () => {} });
    }

    wrapper.find('NumericTextBox').last().props().onBlur();

    wrapper.update();

    expect(wrapper.find('input').last().props().value).toEqual('5');
  });

  it('should have fromMax limit', () => {
    const wrapper = mount(<NumericRange onRangeChange={jest.fn()} />);

    wrapper.find('NumericTextBox').last().props().onChange({ target: { value: 5 }, value: 5 });

    wrapper.find('NumericTextBox').last().props().onBlur();

    // потыкаем стрелочку вверх 10 раз
    for (let i = 0; i < 10; i += 1) {
      wrapper.find('input').first().props().onKeyDown({ keyCode: 38, preventDefault: () => {} });
    }

    wrapper.find('NumericTextBox').at(1).props().onBlur();

    wrapper.update();

    expect(wrapper.find('input').first().props().value).toEqual('5');
  });

  it('should have fromMin limit', () => {
    const wrapper = mount(<NumericRange rangeMin={-2} onRangeChange={jest.fn()} />);

    // потыкаем стрелочку вниз 10 раз
    for (let i = 0; i < 10; i += 1) {
      wrapper.find('input').first().props().onKeyDown({ keyCode: 40, preventDefault: () => {} });
    }

    wrapper.find('NumericTextBox').first().props().onBlur();

    wrapper.update();

    expect(wrapper.find('input').first().props().value).toEqual('-2');
  });

  it('should render toPlaceholder', () => {
    const wrapper = mount(<NumericRange toPlaceholder="to numeric" onRangeChange={jest.fn()} />);

    expect(wrapper.find('input').last().props().placeholder).toEqual('to numeric');
  });

  it('should render fromPlaceholder', () => {
    const wrapper = mount(<NumericRange fromPlaceholder="from numeric" onRangeChange={jest.fn()} />);

    expect(wrapper.find('input').first().props().placeholder).toEqual('from numeric');
  });
});
