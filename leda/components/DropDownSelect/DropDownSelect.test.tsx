// @ts-nocheck
import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import { DropDownSelect } from './index';
import { Div } from '../Div';

describe('DropDownSelect SNAPSHOTS', () => {
  it('should render', () => {
    const data = [
      { txt: 'text1', val: 'value1' },
      { txt: 'text2', val: 'value2' },
      { txt: 'text3', val: 'value3' },
    ];
    const wrapper = mount(<DropDownSelect data={data} onChange={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('controllable mode', () => {
    it('should render value', () => {
      const dataObject = [
        { txt: 'text1', val: 1 },
        { txt: 'text2', val: 2 },
        { txt: 'text3', val: 3 },
      ];

      const wrapper = mount(<DropDownSelect textField="txt" value={dataObject[0]} onChange={jest.fn()} data={dataObject} />);

      expect(wrapper.props().value).toEqual(dataObject[0]);

      expect(wrapper.find('input').props().value).toEqual('text1');

      expect(wrapper).toMatchSnapshot();

      wrapper.setProps({ value: dataObject[1] });

      wrapper.update();

      expect(wrapper.props().value).toEqual(dataObject[1]);

      expect(wrapper.find('input').props().value).toEqual('text2');

      expect(wrapper).toMatchSnapshot();

      wrapper.setProps({ value: dataObject[2] });

      wrapper.update();

      expect(wrapper.props().value).toEqual(dataObject[2]);

      expect(wrapper.find('input').props().value).toEqual('text3');

      expect(wrapper).toMatchSnapshot();
    });

    it('should render data', () => {
      const dataObject = [
        { txt: 'textObj1', val: 1 },
        { txt: 'textObj2', val: 2 },
        { txt: 'textObj3', val: 3 },
      ];
      const dataString = [
        'text1',
        'text2',
        'text3',
      ];

      const wrapper = mount(<DropDownSelect data={dataString} isOpen onChange={jest.fn()} />);

      act(() => {
        wrapper.find('input').props().onFocus();
      });

      wrapper.update();

      expect(wrapper.find('li')).toHaveLength(3);

      wrapper.find('li').forEach((el, index) => {
        expect(el.text()).toEqual(dataString[index]);
      });

      expect(wrapper).toMatchSnapshot();

      act(() => {
        wrapper.find('input').props().onBlur();
      });

      wrapper.update();

      wrapper.setProps({ data: dataObject, textField: 'txt' });

      wrapper.update();

      act(() => {
        wrapper.find('input').props().onFocus();
      });

      wrapper.update();

      wrapper.find('li').forEach((el, index) => {
        expect(el.text()).toEqual(dataObject[index].txt);
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('should test different component states', () => {
    it('should be isOpen', () => {
      const data = [
        { txt: 'text1', val: 'value1' },
        { txt: 'text2', val: 'value2' },
        { txt: 'text3', val: 'value3' },
      ];
      const wrapper = mount(<DropDownSelect textField="txt" data={data} isOpen onChange={jest.fn()} />);

      expect(wrapper.find('li')).toHaveLength(3);

      expect(wrapper).toMatchSnapshot();
    });

    it('should be disabled', () => {
      const wrapper = mount(<DropDownSelect data={['1']} isDisabled onChange={jest.fn()} />);

      expect(wrapper.find('input').props().disabled).toBeTruthy();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('multi-type attributes', () => {
    describe('data', () => {
      it('should render string data', () => {
        const dataString = ['value1', 'value2', 'value3'];
        const wrapper = mount(<DropDownSelect data={dataString} isOpen onChange={jest.fn()} />);

        expect(wrapper.find('li')).toHaveLength(3);

        expect(wrapper).toMatchSnapshot();
      });

      it('should render object data', () => {
        const dataObject = [
          { text: 'text1', value: 'value1' },
          { text: 'text2', value: 'value2' },
          { text: 'text3', value: 'value3' },
        ];

        const wrapper = mount(<DropDownSelect data={dataObject} textField="text" isOpen onChange={jest.fn()} />);

        expect(wrapper.find('li')).toHaveLength(3);

        expect(wrapper).toMatchSnapshot();
      });
    });

    it('should render string placeholder', () => {
      const wrapper = mount(<DropDownSelect data={['1']} placeholder="Choose..." onChange={jest.fn()} />);

      expect(wrapper.find('input').props().placeholder).toEqual('Choose...');

      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('DropDownSelect HANDLERS', () => {
  it('should trigger onChange and have correct event format', () => {
    const onChange = jest.fn();
    const data = [
      { text: 'text1', value: 'value1' },
      { text: 'text2', value: 'value2' },
      { text: 'text3', value: 'value3' },
    ];
    const wrapper = mount(<DropDownSelect textField="text" name="ddselect" isOpen onChange={onChange} data={data} />);

    act(() => {
      wrapper.find('Li').at(1).props().onClick({ target: { value: 'value2', name: 'ddselect' } });
    });

    wrapper.update();

    expect(onChange).toHaveBeenCalled();

    const [[event]] = onChange.mock.calls;

    expect(event.target).toBeDefined();

    expect(event.target.value).toEqual(data[1]);

    expect(event.target.name).toEqual('ddselect');
  });

  it.skip('should trigger onFilterChange', () => {
    const onFilterChange = jest.fn();
    const data = [
      { text: 'atext1', value: 'value1' },
      { text: 'ctext2', value: 'value2' },
      { text: 'btext3', value: 'value3' },
    ];

    const wrapper = mount(<DropDownSelect hasFilter textField="text" name="ddselect" isOpen onFilterChange={onFilterChange} data={data} onChange={jest.fn()} />);

    act(() => {
      wrapper.find('input').last().props().onChange({ target: { value: 'value1', name: 'ddselect' } });
    });

    expect(onFilterChange).toHaveBeenCalled();

    const [[event]] = onFilterChange.mock.calls;

    expect(event.target.value).toEqual('value1');

    expect(event.target.name).toEqual('ddselect');
  });
});

describe('DropDownSelect ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = mount(<DropDownSelect data={['1']} onChange={jest.fn()} _box />);

    expect(wrapper.find('Div.dropdownselect-wrapper').first().hasClass('box')).toBeTruthy();

    wrapper.setProps({ _active: true, _box: false });

    expect(wrapper.find('Div.dropdownselect-wrapper').first().hasClass('box')).toBeFalsy();

    expect(wrapper.find('Div.dropdownselect-wrapper').first().hasClass('active')).toBeTruthy();

    wrapper.setProps({ className: 'testClass' });

    expect(wrapper.find('Div.dropdownselect-wrapper').first().hasClass('box')).toBeFalsy();

    expect(wrapper.find('Div.dropdownselect-wrapper').first().hasClass('active')).toBeTruthy();

    expect(wrapper.find('Div.dropdownselect-wrapper').first().hasClass('testClass')).toBeTruthy();
  });

  it('should display loader if dataLoading', () => {
    const wrapper = mount(<DropDownSelect data={['1']} isOpen isLoading onChange={jest.fn()} _box />);

    expect(wrapper.find('div.loader-wrapper')).toHaveLength(1);

    expect(wrapper.find('span.loader-element')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should display noDataTemplate if no data', () => {
    const nodata = <span className="nodata">No data we are sorry :((</span>;
    const wrapper = mount(<DropDownSelect isOpen noSuggestionsRender={() => nodata} onChange={jest.fn()} _box />);
    expect(wrapper.find('span.nodata').text()).toEqual('No data we are sorry :((');

    expect(wrapper).toMatchSnapshot();
  });

  it('should display custom values with string data', () => {
    const dataString = [
      'one',
      'two',
      'three',
    ];
    const wrapper = mount(<DropDownSelect
      data={dataString}
      placeholder="Choose..."
      isOpen
      itemRender={({ Element, elementProps }) => <Element {...elementProps}>{`---${elementProps.children}`}</Element>}
      onChange={jest.fn()}
      shouldAllowEmpty
    />);

    // placeholder тоже считается
    expect(wrapper.find('li')).toHaveLength(4);

    wrapper.find('li').forEach((el, index) => {
      if (index !== 0) expect(el.text()).toEqual(`---${dataString[index - 1]}`);
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom values with object data', () => {
    const dataObject = [
      { txt: 'one', val: 1 },
      { txt: 'two', val: 2 },
      { txt: 'three', val: 3 },
    ];
    const wrapper = mount(<DropDownSelect
      data={dataObject}
      placeholder="Choose..."
      textField="txt"
      isOpen
      itemRender={({ elementProps }) => (
        <Div className="custom-item">
          {
            `Item text: ${elementProps.children}`
          }
        </Div>
      )}
      onChange={jest.fn()}
    />);

    wrapper.find('div.custom-item').forEach((item, index) => {
      expect(item.text()).toEqual(`Item text: ${dataObject[index].txt}`);
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should display custom values with JSX', () => {
    const dataString = [
      'one',
      'two',
      'three',
    ];
    const wrapper = mount(<DropDownSelect
      data={dataString}
      placeholder="Choose..."
      isOpen
      itemRender={({ elementProps }) => <span className="test">{`---${elementProps.children}`}</span>}
      onChange={jest.fn()}
    />);

    expect(wrapper.find('span.test')).toHaveLength(3);

    wrapper.find('li').forEach((el, index) => {
      expect(el.text()).toEqual(`---${dataString[index]}`);
    });

    expect(wrapper).toMatchSnapshot();
  });

  describe('compareObjectsBy', () => {
    it('should set defaultValue as selected', () => {
      const data = [
        { txt: 'one', val: 1 },
        { txt: 'two', val: 2 },
        { txt: 'three', val: 3 },
        { txt: 'four', val: 4 },
      ];

      render(
        <DropDownSelect
          data={data}
          isOpen
          textField="txt"
          defaultValue={{ txt: 'one', val: 1 }}
          compareObjectsBy="val"
        />,
      );

      expect(document.querySelector('.selected').textContent).toEqual(data[0].txt);
    });

    it('should not work if the string does not match data objects structure', () => {
      const data = [
        { txt: 'one', val: 1 },
        { txt: 'two', val: 2 },
        { txt: 'three', val: 3 },
        { txt: 'four', val: 4 },
      ];

      render(
        <DropDownSelect
          data={data}
          isOpen
          textField="txt"
          defaultValue={{ txt: 'one', val: 1 }}
          compareObjectsBy="INVALID"
        />,
      );

      expect(document.querySelectorAll('li.selected')).toHaveLength(0);
    });

    it('should use function as value', () => {
      const data = [
        { txt: 'one', val: 1 },
        { txt: 'two', val: 2 },
        { txt: 'three', val: 3 },
        { txt: 'four', val: 4 },
      ];

      render(
        <DropDownSelect
          data={data}
          isOpen
          textField="txt"
          defaultValue={{ txt: 'one', val: 1 }}
          compareObjectsBy={(item) => item.val}
        />,
      );

      expect(document.querySelector('li.selected').textContent).toEqual(data[0].txt);
    });

    it('should not work if function return value does not match data objects structure', () => {
      const data = [
        { txt: 'one', val: 1 },
        { txt: 'two', val: 2 },
        { txt: 'three', val: 3 },
        { txt: 'four', val: 4 },
      ];

      render(
        <DropDownSelect
          data={data}
          isOpen
          textField="txt"
          defaultValue={{ txt: 'one', val: 1 }}
          compareObjectsBy={(item) => item.INVALID}
        />,
      );

      expect(document.querySelectorAll('li.selected')).toHaveLength(0);
    });

    it('should set value as selected', () => {
      const data = [
        { txt: 'one', val: 1 },
        { txt: 'two', val: 2 },
        { txt: 'three', val: 3 },
        { txt: 'four', val: 4 },
      ];

      render(
        <DropDownSelect
          data={data}
          isOpen
          textField="txt"
          value={{ txt: 'one', val: 1 }}
          compareObjectsBy={(item) => item.val}
        />,
      );

      expect(document.querySelector('li.selected').textContent).toEqual(data[0].txt);
    });
  });
});

describe('DropDownSelect VALIDATION', () => {
  it('should be invalid if component is isRequired, value is empty and onBlur was called', async () => {
    const data = ['abc1', 'bcd2', 'cde3'];
    const wrapper = mount(<DropDownSelect data={data} onBlur={jest.fn()} placeholder="Choose..." form="ddform" name="ddselect" isRequired onChange={jest.fn()} />);

    act(() => {
      wrapper.find('input').props().onFocus();

      wrapper.find('input').props().onBlur();
    });

    await new Promise((resolve) => setTimeout(() => {
      wrapper.update();

      expect(wrapper.find('.dropdownselect-input-wrapper').first().hasClass('danger')).toBeTruthy();

      resolve();
    }, 0));
  });
});
