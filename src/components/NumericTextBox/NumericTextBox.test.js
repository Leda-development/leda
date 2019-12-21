import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { NumericTextBox } from './index';
import { fixJSON } from '../../utils';

describe.skip('NumericTextBox SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<NumericTextBox />);

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();

    wrapper.unmount();
  });

  describe('controllable mode', () => {
    const getWrapperJSON = Wrapper => toJson(Wrapper);

    it('should render format', () => {
      const wrapper = mount(<NumericTextBox format="p2" value={0.235813} />);

      expect(wrapper.find('input').props().value).toEqual('0,24 %');

      expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();

      wrapper.setProps({ format: 'c4' });

      expect(wrapper.find('input').props().value).toEqual('0,2358 ₽');

      expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();

      wrapper.unmount();
    });

    it('should render min', () => {
      // todo: починить снапшоты, они просто зависают
      const wrapper = mount(<NumericTextBox onBlur={jest.fn()} min={-2} />);

      wrapper.find('input').getDOMNode().dispatchEvent(new Event('focus'));

      // потыкаем стрелочку вниз 10 раз
      for (let i = 0; i < 10; i += 1) {
        wrapper.find('input').props().onKeyDown({ keyCode: 40, preventDefault: () => {} });
      }

      wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));

      wrapper.update();

      expect(wrapper.find('input').props().value).toEqual('-2');

      // expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();

      wrapper.setProps({ min: -6.2 });

      wrapper.find('input').getDOMNode().dispatchEvent(new Event('focus'));

      // потыкаем стрелочку вниз 10 раз
      for (let i = 0; i < 10; i += 1) {
        wrapper.find('input').props().onKeyDown({ keyCode: 40, preventDefault: () => {} });
      }

      wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));

      wrapper.update();

      expect(wrapper.find('input').props().value).toEqual('-6,2');

      // expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();

      wrapper.unmount();
    });

    it('should render max', () => {
      // todo: починить снапшоты, они просто зависают
      const wrapper = mount(<NumericTextBox onBlur={jest.fn()} max={7.3} />);

      wrapper.find('input').getDOMNode().dispatchEvent(new Event('focus'));

      // потыкаем стрелочку вверх 10 раз
      for (let i = 0; i < 10; i += 1) {
        wrapper.find('input').props().onKeyDown({ keyCode: 38, preventDefault: () => {} });
      }

      wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));

      wrapper.update();

      expect(wrapper.find('input').props().value).toEqual('7,3');

      // expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();

      wrapper.setProps({ max: 10.4 });

      wrapper.find('input').getDOMNode().dispatchEvent(new Event('focus'));

      // потыкаем стрелочку вверх 10 раз
      for (let i = 0; i < 10; i += 1) {
        wrapper.find('input').props().onKeyDown({ keyCode: 38, preventDefault: () => {} });
      }

      wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));

      wrapper.update();

      expect(wrapper.find('input').props().value).toEqual('10,4');

      // expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();

      wrapper.unmount();
    });

    it('should render step', () => {
      // todo: починить снапшоты, они просто зависают
      const wrapper = mount(<NumericTextBox step={2} onBlur={jest.fn()} min={0} />);

      wrapper.find('input').getDOMNode().dispatchEvent(new Event('focus'));
      // потыкаем стрелочку вверх
      wrapper.find('input').props().onKeyDown({ keyCode: 38, preventDefault: () => {} });

      wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));

      wrapper.update();

      expect(wrapper.find('input').props().value).toEqual('2');

      // expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();

      wrapper.setProps({ step: 0.1 });

      wrapper.find('input').getDOMNode().dispatchEvent(new Event('focus'));

      // потыкаем стрелочку вниз
      wrapper.find('input').props().onKeyDown({ keyCode: 40, preventDefault: () => {} });

      wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));

      wrapper.update();

      expect(wrapper.find('input').props().value).toEqual('1,9');

      // expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();

      wrapper.unmount();
    });

    it('should render value', () => {
      const wrapper = mount(<NumericTextBox format="p2" value={0.235813} />);

      expect(wrapper.find('input').props().value).toEqual('0,24 %');

      expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();

      wrapper.setProps({ value: 0.687421 });

      expect(wrapper.find('input').props().value).toEqual('0,69 %');

      expect(fixJSON(getWrapperJSON(wrapper))).toMatchSnapshot();

      wrapper.unmount();
    });
  });

  describe('different component states', () => {
    it('should render disabled', () => {
      const wrapper = mount(<NumericTextBox defaultValue={0} disabled onBlur={jest.fn()} />);

      expect(wrapper.find('input').props().value).toEqual('0');
      // потыкаем вверх
      wrapper.find('input').props().onKeyDown({ keyCode: 38, preventDefault: () => {} });

      wrapper.find('NumericTextBox').last().props().onBlur();

      wrapper.update();
      // не изменилось
      expect(wrapper.find('input').props().value).toEqual('0');

      expect(fixJSON(toJson(wrapper))).toMatchSnapshot();

      wrapper.unmount();
    });

    it('should render placeholder', () => {
      const wrapper = mount(<NumericTextBox placeholder="PUT_IN" onBlur={jest.fn()} />);

      expect(wrapper.find('input').props().placeholder).toEqual('PUT_IN');

      expect(fixJSON(toJson(wrapper))).toMatchSnapshot();

      wrapper.unmount();
    });
  });
});

describe.skip('NumericTextBox HANDLERS', () => {
  it('should trigger onBlur', () => {
    const onBlur = jest.fn();
    const wrapper = mount(<NumericTextBox onBlur={onBlur} />);

    wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));

    expect(onBlur).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should trigger onChange', () => {
    const onChange = jest.fn();
    const wrapper = mount(<NumericTextBox onChange={onChange} />);


    wrapper.find('input').instance().value = 25;

    wrapper.find('input').props().onChange({ nativeEvent: { } });

    expect(onChange).toHaveBeenCalled();

    expect(wrapper.state().value).toEqual(25);

    wrapper.unmount();
  });

  it('should trigger onFocus', () => {
    const onFocus = jest.fn();
    const wrapper = mount(<NumericTextBox onFocus={onFocus} />);

    wrapper.find('input').getDOMNode().dispatchEvent(new Event('focus'));

    expect(onFocus).toHaveBeenCalled();
  });

  it('should trigger onClick', () => {
    const onClick = jest.fn();
    const wrapper = mount(<NumericTextBox onClick={onClick} />);
    // нужны bubbles, тк лисенер на родителе
    wrapper.find('input').getDOMNode().dispatchEvent(new Event('click', { bubbles: true }));

    expect(onClick).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should have correct event format in onChange', () => {
    const onChange = jest.fn();
    const wrapper = mount(<NumericTextBox name="Nooberic" onChange={onChange} />);

    wrapper.find('input').instance().value = 25;

    wrapper.find('input').props().onChange({ nativeEvent: { } });

    expect(onChange).toHaveBeenCalled();

    const [[changeEvent]] = onChange.mock.calls;

    expect(changeEvent.target).toBeDefined();

    expect(changeEvent.target.value).toEqual(25);

    expect(changeEvent.target.name).toEqual('Nooberic');

    wrapper.unmount();
  });

  it('should have correct event format in onBlur', () => {
    const onBlur = jest.fn();
    const wrapper = mount(<NumericTextBox value={25} name="Nooberic" onBlur={onBlur} />);

    wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));

    expect(onBlur).toHaveBeenCalled();

    const [[blurEvent]] = onBlur.mock.calls;

    expect(blurEvent.target).toBeDefined();

    expect(blurEvent.target.value).toEqual('25');

    expect(blurEvent.target.name).toEqual('Nooberic');

    wrapper.unmount();
  });

  describe('different ways to change value', () => {
    it('should change value by clicking upper spinner', () => {
      const wrapper = mount(<NumericTextBox defaultValue={0} onChange={jest.fn()} />);

      expect(wrapper.find('input').props().value).toEqual('0');

      wrapper.find('.k-link-increase').props().onClick({ nativeEvent: {} });

      wrapper.update();

      expect(wrapper.find('input').props().value).toEqual('1');

      wrapper.unmount();
    });

    it('should change value by clicking lower spinner', () => {
      const wrapper = mount(<NumericTextBox defaultValue={0} onChange={jest.fn()} />);

      expect(wrapper.find('input').props().value).toEqual('0');

      wrapper.find('.k-link-decrease').props().onClick({ nativeEvent: {} });

      wrapper.update();

      expect(wrapper.find('input').props().value).toEqual('-1');

      wrapper.unmount();
    });

    it('should change value by input numbers', () => {
      const wrapper = mount(<NumericTextBox defaultValue={0} onChange={jest.fn()} />);

      expect(wrapper.find('input').props().value).toEqual('0');

      wrapper.find('input').instance().value = 25;

      wrapper.find('input').props().onChange({ nativeEvent: { } });

      wrapper.update();

      expect(wrapper.find('input').props().value).toEqual('25');

      wrapper.unmount();
    });
  });

  it('should round value according to current format', () => {
    const wrapper = mount(<NumericTextBox value={0.235813} format="p2" />);

    expect(wrapper.find('input').props().value).toEqual('0,24 %');

    wrapper.unmount();
  });

  it('should change format onFocus', () => {
    const wrapper = mount(<NumericTextBox value={0.235813} format="p2" />);

    expect(wrapper.find('input').props().value).toEqual('0,24 %');

    wrapper.find('input').getDOMNode().dispatchEvent(new Event('focus'));

    wrapper.update();

    expect(wrapper.find('input').props().value).toEqual('0,24');

    wrapper.unmount();
  });

  it('should change format onBlur', () => {
    const wrapper = mount(<NumericTextBox value={0.235813} format="p2" />);

    expect(wrapper.find('input').props().value).toEqual('0,24 %');

    wrapper.find('input').getDOMNode().dispatchEvent(new Event('focus'));

    wrapper.update();

    expect(wrapper.find('input').props().value).toEqual('0,24');

    wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));

    wrapper.update();

    expect(wrapper.find('input').props().value).toEqual('0,24 %');

    wrapper.unmount();
  });
});

describe.skip('NumericTextBox ATTRIBUTES', () => {
  describe('format', () => {
    it('should have number format', () => {
      const wrapper = mount(<NumericTextBox value={0.235813} format="n2" />);

      expect(wrapper.find('input').props().value).toEqual('0,24');

      wrapper.unmount();
    });

    it('should have currency format', () => {
      const wrapper = mount(<NumericTextBox value={0.235813} format="c2" />);

      expect(wrapper.find('input').props().value).toEqual('0,24 ₽');

      wrapper.unmount();
    });

    it('should have percent format', () => {
      const wrapper = mount(<NumericTextBox value={0.235813} format="p2" />);

      expect(wrapper.find('input').props().value).toEqual('0,24 %');

      wrapper.unmount();
    });

    it('should have exponential format', () => {
      const wrapper = mount(<NumericTextBox value={0.235813} format="e2" />);

      expect(wrapper.find('input').props().value).toEqual('2,36e-1');

      wrapper.unmount();
    });

    it('should have custom format', () => {
      const wrapper = mount(<NumericTextBox value={1080.235813} format="#,##0.0000000 'tests" />);

      expect(wrapper.find('input').props().value).toEqual('1 080,2358130 tests');

      wrapper.unmount();
    });
  });

  it('should accept width', () => {
    const wrapper = mount(<NumericTextBox width={35} />);

    expect(wrapper.find('.k-widget').props().style.width).toEqual('35%');

    wrapper.unmount();
  });
});

describe.skip('NumericTextBox VALIDATION', () => {
  it('should be invalid if value passes validation and vice versa', async done => {
    const onBlurHandler = jest.fn();
    const validator = value => value && value.toString().length >= 4;
    const wrapper = mount(<NumericTextBox form="test" onBlur={onBlurHandler} name="nooberic" isRequired invalidMessage="value length must be more than 4!" validator={validator} />);
    const getEvent = index => {
      const [event] = onBlurHandler.mock.calls[index];
      return event;
    };

    wrapper.find('input').instance().value = 25;

    wrapper.find('input').props().onChange({ nativeEvent: { } });

    wrapper.update();

    expect(wrapper.state().value).toEqual(25);

    wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));

    // так как onBlur в валидации работает ассинхронно, нужно подождать
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(onBlurHandler).toHaveBeenCalled();

    const firstEvent = getEvent(0);

    expect(firstEvent.target.value).toEqual('25');

    expect(firstEvent.target.name).toEqual('nooberic');

    expect(firstEvent.target.isValid).toBeFalsy();

    wrapper.update();

    expect(wrapper.state().isValid).toBeFalsy();

    expect(wrapper.state().invalidMessage).toEqual('value length must be more than 4!');


    wrapper.find('input').instance().value = 2552;

    wrapper.find('input').props().onChange({ nativeEvent: { } });

    wrapper.update();

    expect(wrapper.state().value).toEqual(2552);

    wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));

    await new Promise(resolve => setTimeout(resolve, 0));

    expect(onBlurHandler).toHaveBeenCalledTimes(2);

    const secondEvent = getEvent(1);

    expect(secondEvent.target.value).toEqual('2 552');

    expect(secondEvent.target.name).toEqual('nooberic');

    expect(secondEvent.target.isValid).toBeTruthy();

    wrapper.update();

    expect(wrapper.state().isValid).toBeTruthy();

    expect(wrapper.state().invalidMessage).toBeNull();

    wrapper.unmount();

    done();
  });

  it('should be invalid if component is isRequired, value is empty and onBlur was called', async done => {
    const onBlurHandler = jest.fn();
    const wrapper = mount(<NumericTextBox form="test" name="nooberic" onBlur={onBlurHandler} isRequired />);

    wrapper.find('input').getDOMNode().dispatchEvent(new Event('blur'));

    // так как onBlur в валидации работает ассинхронно, нужно подождать
    await new Promise(resolve => setTimeout(resolve, 0));

    const [[event]] = onBlurHandler.mock.calls;

    expect(event.target.value).toEqual('');

    expect(event.target.name).toEqual('nooberic');

    expect(event.target.isValid).toBeFalsy();

    wrapper.update();

    expect(wrapper.state().isValid).toBeFalsy();

    expect(wrapper.find('.k-widget').getDOMNode().classList.contains('danger')).toBeTruthy();

    wrapper.unmount();

    done();
  });
});
