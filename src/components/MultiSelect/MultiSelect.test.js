import React from 'react';
import { mount } from 'enzyme';
import { MultiSelect } from './index';

describe('MultiSelect SNAPSHOTS', () => {
  it('should render basic usage', () => {
    const wrapper = mount(<MultiSelect data={['1', '2', '3']} onChange={jest.fn()} value={['1']} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render value in controllable mode', () => {
    const wrapper = mount(<MultiSelect data={['1', '2', '3']} value={['1']} onChange={jest.fn()} />);

    expect(wrapper.props().value).toEqual(['1']);

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ value: ['2'] });

    expect(wrapper.props().value).toEqual(['2']);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render data in controllable mode', () => {
    const dataString = ['value1', 'value2', 'value3'];
    const dataObject = [
      { text: 'text1', value: 'value1' },
      { text: 'text2', value: 'value2' },
      { text: 'text3', value: 'value3' },
    ];
    const wrapper = mount(<MultiSelect data={dataString} onChange={jest.fn()} value={['value1']} />);

    expect(wrapper.props().data).toHaveLength(3);

    wrapper.props().data.forEach((el, index) => {
      expect(el).toEqual(dataString[index]);
    });

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ data: dataObject });

    wrapper.props().data.forEach((el, index) => {
      expect(el.text).toEqual(dataObject[index].text);

      expect(el.value).toEqual(dataObject[index].value);
    });


    expect(wrapper).toMatchSnapshot();
  });
});
// TODO: починить тест
describe.skip('MultiSelect ATTRIBUTES', () => {
  it('should list isOpen', () => {
    const wrapper = mount(<MultiSelect data={['1', '2', '3']} isOpen onChange={jest.fn()} value={['1']} />);

    expect(wrapper.find('#react-autowhatever-1 li')).toHaveLength(2);

    expect(wrapper).toMatchSnapshot();
  });

  it('should list loading', () => {
    const wrapper = mount(<MultiSelect data={['1', '2', '3']} isLoading isOpen onChange={jest.fn()} value={['1']} />);

    expect(wrapper.find('div.loader-wrapper')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render templates', () => {
    const wrapper = mount(
      <MultiSelect
        data={['1', '2', '3']}
        isOpen
        onChange={jest.fn()}
        value={['1']}
        suggestionsFooterRender={() => <span className="footer">Footer</span>}
        suggestionsHeaderRender={() => <span className="header">Header</span>}
      />,
    );

    expect(wrapper.find('.footer')).toHaveLength(1);

    expect(wrapper.find('.header')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render noData template', () => {
    const wrapper = mount(
      <MultiSelect
        data={['1', '2', '3']}
        isOpen
        onChange={jest.fn()}
        value={['1']}
        suggestionsFooterRender={() => <span className="footer">Footer</span>}
        suggestionsHeaderRender={() => <span className="header">Header</span>}
      />,
    );

    expect(wrapper.find('.footer')).toHaveLength(1);

    expect(wrapper.find('.header')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();

    wrapper.find('input').prop('onChange')({ target: { value: 'test' } });

    wrapper.update();

    expect(wrapper.find('div.nodata').text()).toEqual('Ничего не найдено');

    expect(wrapper).toMatchSnapshot();
  });
});

describe.skip('MultiSelect HANDLERS', () => {
  it('should test onFocus', () => {
    const onFocusHandler = jest.fn();

    const wrapper = mount(
      <MultiSelect
        data={['1', '2', '3']}
        isOpen
        onChange={jest.fn()}
        value={['1']}
        suggestionsFooterRender={() => <span className="footer">Footer</span>}
        suggestionsHeaderRender={() => <span className="header">Header</span>}
        onFocus={onFocusHandler}
      />,
    );

    wrapper.find('input').props().onFocus({ target: { value: '1' } });

    const [[event]] = onFocusHandler.mock.calls;

    expect(onFocusHandler).toHaveBeenCalled();

    expect(event.target).toBeDefined();

    expect(event.target.value).toEqual('1');

    expect(wrapper.find('#react-autowhatever-1').hasClass('multiselect-suggestions-container')).toBeTruthy();

    expect(wrapper).toMatchSnapshot();
  });

  it('should test onBlur', () => {
    const onBlurHandler = jest.fn();
    const wrapper = mount(<MultiSelect data={['1', '2', '3']} value={['2']} onChange={jest.fn()} name="auto" onBlur={onBlurHandler} />);

    expect(wrapper).toMatchSnapshot();

    wrapper.find('input').props().onBlur({ target: { value: '1' } });

    const [[event]] = onBlurHandler.mock.calls;

    expect(onBlurHandler).toHaveBeenCalled();

    expect(event.target).toBeDefined();

    expect(event.target.name).toEqual('auto');

    expect(event.target.value).toEqual('1');

    expect(wrapper.find('#react-autowhatever-1').hasClass('multiselect-suggestions-container opened')).toBeFalsy();

    expect(wrapper).toMatchSnapshot();
  });

  it('should test onSelect', () => {
    let val = ['2'];

    const onSelectHandler = ev => {
      const { target } = ev;
      val = [...val, target.value];
      return val;
    };

    const wrapper = mount(
      <MultiSelect
        isOpen
        data={['1', '2', '3']}
        value={val}
        name="auto"
        onSelect={ev => wrapper.setProps({ value: onSelectHandler(ev) })}
      />,
    );

    wrapper.find('Item').first().simulate('click');

    wrapper.update();

    expect(wrapper.find('Tag')).toHaveLength(2);

    expect(wrapper).toMatchSnapshot();
  });

  it('should test onDeselect', () => {
    let val = ['1', '2'];

    const onSelectHandler = ev => {
      const { target } = ev;
      val = [...val, target.value];
      return val;
    };

    const onDeselectHandler = ev => {
      const { target } = ev;
      val = val.filter(item => item !== target.value[0]);
      return val;
    };

    const wrapper = mount(
      <MultiSelect
        isOpen
        data={['1', '2', '3']}
        value={val}
        name="auto"
        onSelect={ev => wrapper.setProps({ value: onSelectHandler(ev) })}
        onDeselect={ev => wrapper.setProps({ value: onDeselectHandler(ev) })}
      />,
    );

    wrapper.find('Item').last().simulate('click');

    wrapper.update();

    expect(wrapper.find('Tag')).toHaveLength(3);

    expect(wrapper).toMatchSnapshot();

    wrapper.find('Tag').last().prop('onIconClick')({ target: { value: '2' }, stopPropagation: () => {} });

    wrapper.find('Tag').first().prop('onIconClick')({ target: { value: '2' }, stopPropagation: () => {} });

    wrapper.update();

    expect(wrapper.find('Tag')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should test onDeselect by clear button', () => {
    let val = ['1', '2', '3'];

    const onSelectHandler = ev => {
      const { target } = ev;
      val = [...val, target.value];
      return val;
    };

    const onDeselectHandler = ev => {
      const { target } = ev;
      val = val.filter(item => !target.value.includes(item));
      return val;
    };

    const wrapper = mount(
      <MultiSelect
        isOpen
        data={['1', '2', '3']}
        value={val}
        name="auto"
        hasClearButton
        onSelect={ev => wrapper.setProps({ value: onSelectHandler(ev) })}
        onDeselect={ev => wrapper.setProps({ value: onDeselectHandler(ev) })}
      />,
    );

    wrapper.find('input').prop('onChange')({ target: { value: 'test' } });

    wrapper.update();

    expect(wrapper.find('input').prop('value')).toEqual('test');

    expect(wrapper.find('Icon span.k-i-close')).toHaveLength(4);

    wrapper.find('Icon span.k-i-close').last().prop('onClick')({ target: { value: '2' }, stopPropagation: () => {} });

    wrapper.update();

    expect(wrapper.find('input').prop('value')).toEqual('');

    expect(wrapper.find('Tag')).toHaveLength(0);

    expect(wrapper).toMatchSnapshot();
  });
});
