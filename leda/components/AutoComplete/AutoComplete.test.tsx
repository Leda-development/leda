// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { AutoComplete } from './index';
import { fixJSON } from '../../utils';

describe('AutoComplete SNAPSHOTS', () => {
  it('should render basic usage', () => {
    const wrapper = mount(<AutoComplete data={['1', '2', '3']} onChange={jest.fn()} value="1" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render value in controllable mode', () => {
    const wrapper = mount(<AutoComplete data={['1', '2', '3']} value="1" onChange={jest.fn()} />);
    let wrapperJSON = toJson(wrapper);

    expect(wrapper.props().value).toEqual('1');

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();

    wrapper.setProps({ value: '2' });

    expect(wrapper.props().value).toEqual('2');

    wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should render data in controllable mode', () => {
    const dataString = ['value1', 'value2', 'value3'];
    const dataObject = [
      { text: 'text1', value: 'value1' },
      { text: 'text2', value: 'value2' },
      { text: 'text3', value: 'value3' },
    ];
    const wrapper = mount(<AutoComplete data={dataString} onChange={jest.fn()} value="value1" />);
    let wrapperJSON = toJson(wrapper);

    expect(wrapper.props().data).toHaveLength(3);

    wrapper.props().data.forEach((el, index) => {
      expect(el).toEqual(dataString[index]);
    });

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();

    wrapper.setProps({ data: dataObject });

    wrapper.props().data.forEach((el, index) => {
      expect(el.text).toEqual(dataObject[index].text);

      expect(el.value).toEqual(dataObject[index].value);
    });

    wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  describe('should render multi-type attributes', () => {
    it('should render data', () => {
      const dataString = ['value1', 'value2', 'value3'];
      const dataObject = [
        { text: 'text1', value: 'value1' },
        { text: 'text2', value: 'value2' },
        { text: 'text3', value: 'value3' },
      ];

      let wrapper = mount(<AutoComplete data={dataString} isOpen onChange={jest.fn()} value={dataString[0]} />);

      let wrapperJSON = toJson(wrapper);

      expect(fixJSON(wrapperJSON)).toMatchSnapshot();

      wrapper = mount(<AutoComplete data={dataObject} textField="text" value={dataObject[0].text} isOpen onChange={jest.fn()} />);

      wrapperJSON = toJson(wrapper);

      expect(fixJSON(wrapperJSON)).toMatchSnapshot();
    });
  });

  describe('should render different component states', () => {
    it('should render readonly', () => {
      const wrapper = mount(<AutoComplete readOnly onChange={jest.fn()} data={['1', '2', '3']} value="1" />);

      const wrapperJSON = toJson(wrapper);

      expect(wrapper.find('input').props().readOnly).toBeTruthy();

      expect(fixJSON(wrapperJSON)).toMatchSnapshot();
    });

    it('should render opened', () => {
      const wrapper = mount(<AutoComplete isOpen onChange={jest.fn()} data={['1', '2', '3']} />);

      const wrapperJSON = toJson(wrapper);

      expect(wrapper.find('SuggestionItem')).toHaveLength(3);

      expect(fixJSON(wrapperJSON)).toMatchSnapshot();
    });

    it('should render loading', () => {
      const wrapper = mount(<AutoComplete data={['1', '2', '3']} value="1" isOpen isLoading onChange={jest.fn()} />);

      const wrapperJSON = toJson(wrapper);

      expect(wrapper.find('Loader')).toHaveLength(1);

      expect(wrapper.find('Loader Icon')).toHaveLength(1);

      expect(fixJSON(wrapperJSON)).toMatchSnapshot();
    });

    it('should render disabled', () => {
      const wrapper = mount(<AutoComplete data={['1', '2', '3']} value="1" isDisabled onChange={jest.fn()} />);

      const wrapperJSON = toJson(wrapper);

      expect(wrapper.find('input').props().disabled).toBeTruthy();

      expect(fixJSON(wrapperJSON)).toMatchSnapshot();
    });
  });

  it('should test component validation', () => {
    const wrapper = mount(<AutoComplete
      name="name"
      onFocus={jest.fn()}
      onBlur={jest.fn()}
      isRequired
      form="test"
      onChange={jest.fn()}
      data={['1', '2', '3']}
      value=""
    />);

    act(() => {
      wrapper.find('input').props().onBlur({
        target: {
          value: '',
        },
      });
    });

    wrapper.update();

    expect(wrapper.find('InvalidMessageWrapper')).toHaveLength(1);

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });
});

describe('AutoComplete HANDLERS', () => {
  it('should test onFocus', () => {
    const onFocusHandler = jest.fn();
    const wrapper = mount(<AutoComplete className="test" onFocus={onFocusHandler} data={['1', '2', '3']} value="1" onChange={jest.fn()} />);

    act(() => {
      wrapper.find('input').props().onFocus({
        target: {
          value: '1',
        },
      });
    });

    const [[event]] = onFocusHandler.mock.calls;

    expect(onFocusHandler).toHaveBeenCalled();

    expect(event.target).toBeDefined();

    expect(event.target.value).toEqual('1');
  });

  it('should test onBlur', () => {
    const onBlurHandler = jest.fn();
    const wrapper = mount(<AutoComplete data={['1', '2', '3']} value="1" onChange={jest.fn()} name="auto" onBlur={onBlurHandler} />);

    wrapper.find('input').props().onBlur({ target: { value: '1' } });

    const [[event]] = onBlurHandler.mock.calls;

    expect(onBlurHandler).toHaveBeenCalled();

    expect(event.target).toBeDefined();

    expect(event.component.name).toEqual('auto');

    expect(event.target.value).toEqual('1');
  });

  it('should test onChange', () => {
    const onChangeHandler = jest.fn();
    const wrapper = mount(<AutoComplete data={['1', '2', '3']} value="1" name="auto" onChange={onChangeHandler} />);

    // введем в инпут 'test'
    act(() => {
      wrapper.find('input').props().onChange({
        currentTarget: {
          value: '2',
        },
      });
    });

    const [[event]] = onChangeHandler.mock.calls;

    // проверим, что обработчик onChange был вызван
    expect(onChangeHandler).toHaveBeenCalled();
    // проверим, что обработчик был вызван с правильными параметрами
    expect(event.component.value).toEqual('2');

    expect(event.component.name).toEqual('auto');
  });
});

describe('AutoComplete ATTRIBUTES', () => {
  describe('className', () => {
    it('should test className prop', () => {
      const wrapper = mount(<AutoComplete data={['1', '2', '3']} value="1" className="test-class" onChange={jest.fn()} />);

      expect(wrapper.find('div.test-class')).toHaveLength(1);
    });

    it('should convert danger prop to className', () => {
      const wrapper = mount(<AutoComplete _danger data={['1', '2', '3']} value="1" onChange={jest.fn()} />);

      expect(wrapper.find('div.danger')).toHaveLength(1);
    });

    it('should convert active prop to className', () => {
      const wrapper = mount(<AutoComplete _active data={['1', '2', '3']} value="1" onChange={jest.fn()} />);

      expect(wrapper.find('div.active')).toHaveLength(1);
    });
  });

  describe.skip('data attribute', () => {
    it('should test string type', () => {
      const dataTest = ['value1', 'value2', 'value3'];

      const wrapper = mount(<AutoComplete isOpen data={dataTest} onChange={jest.fn()} />);

      const texts = wrapper.find('SuggestionItem').map((node) => node.text());

      expect(texts).toEqual(dataTest);
    });

    it('should test object type', () => {
      const dataTest = [
        { text: 'text1', value: 'value1' },
        { text: 'text2', value: 'value2' },
        { text: 'text3', value: 'value3' },
      ];

      const wrapper = mount(<AutoComplete textField="text" isOpen data={dataTest} onChange={jest.fn()} />);

      const texts = wrapper.find('SuggestionItem').map((node) => node.text());

      expect(texts).toEqual(dataTest.map((el) => el.text));
    });
  });

  it('should test disabled', () => {
    const wrapper = mount(<AutoComplete data={['1', '2', '3']} isDisabled onChange={jest.fn()} value="1" />);

    expect(wrapper.find('input').props().disabled).toBeTruthy();

    expect(wrapper.find('.disabled')).toHaveLength(1);
  });

  it('should adjust value', () => {
    const dataTest = ['value1', 'value2', 'value3'];
    const onChange = jest.fn();
    const wrapper = mount(<AutoComplete shouldCorrectValue data={dataTest} onChange={onChange} value="value1" />);

    wrapper.setProps({ value: 'val' });

    wrapper.find('input').props().onBlur({ target: {} });

    expect(onChange).toHaveBeenCalledWith({
      component: {
        method: 'trigger', name: undefined, value: '', suggestion: null,
      },
      target: {},
    });
  });

  it('should filter data', () => {
    const dataTest = ['value1', 'vamue2', 'calue3'];

    const changeHandler = jest.fn();

    const wrapper = mount(<AutoComplete isOpen data={dataTest} onChange={changeHandler} />);

    expect(wrapper.find('SuggestionItem')).toHaveLength(3);

    act(() => {
      wrapper.find('input').props().onChange({
        currentTarget: {
          value: 'va',
        },
      });
    });

    wrapper.update();

    expect(changeHandler).toHaveBeenCalled();

    expect(wrapper.find('SuggestionItem')).toHaveLength(2);

    act(() => {
      wrapper.find('input').props().onChange({
        currentTarget: {
          value: 'vam',
        },
      });
    });

    wrapper.update();

    expect(wrapper.find('SuggestionItem').text()).toEqual('vamue2');
  });
});
