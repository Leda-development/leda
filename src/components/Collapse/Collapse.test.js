/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import { Collapse } from './index';
import { Div } from '../Div';
import { H1 } from '../Headers';

describe('Collapse SNAPSHOTS', () => {
  it('should render closed state', () => {
    const component = (
      <Collapse onSelect={jest.fn()} activePanelKey="0">
        <Collapse.Panel panelKey="1">
          <Collapse.Heading>
            <H1>HEADING</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div>SOME TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
      </Collapse>
    );

    const wrapper = mount(component);

    expect((wrapper.find('.react-css-collapse-transition').first().props()).isOpen).toBeFalsy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render opened state', () => {
    const component = (
      <Collapse onSelect={jest.fn()} activePanelKey="1">
        <Collapse.Panel panelKey="1">
          <Collapse.Heading>
            <H1>HEADING</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div>SOME TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
      </Collapse>
    );

    const wrapper = mount(component);

    expect(wrapper.find('div').last().text()).toEqual('SOME TEST');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('multi-opened state in controlled mode', () => {
    const component = (
      <Collapse isAccordion onSelect={jest.fn()} activePanelKey={['1', '2']}>
        <Collapse.Panel panelKey="1">
          <Collapse.Heading>
            <H1>HEADING 1</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div className="test-1">SOME FIRST TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
        <Collapse.Panel panelKey="2">
          <Collapse.Heading>
            <H1>HEADING 2</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div className="test-2">SOME SECOND TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
      </Collapse>
    );


    const collapse = 'Collapse.react-css-collapse-transition';

    it('should render both bodies opened', () => {
      const wrapper = mount(component);

      expect((wrapper.find(collapse).first().props() ).isOpen).toBeTruthy();

      expect((wrapper.find(collapse).last().props() ).isOpen).toBeTruthy();

      expect(toJson(wrapper)).toMatchSnapshot();

      wrapper.unmount();
    });

    it('should render only first body opened', () => {
      const wrapper = mount(component);

      wrapper.setProps({ activePanelKey: '1' });

      expect((wrapper.find(collapse).first().props() ).isOpen).toBeTruthy();

      expect((wrapper.find(collapse).last().props() ).isOpen).toBeFalsy();

      expect(toJson(wrapper)).toMatchSnapshot();

      wrapper.unmount();
    });
  });

  describe('multi-opened state in uncontrolled mode', () => {
    const component = (
      <Collapse isAccordion>
        <Collapse.Panel panelKey="1">
          <Collapse.Heading className="head-1">
            <H1>HEADING 1</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div className="test-1">SOME FIRST TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
        <Collapse.Panel panelKey="2">
          <Collapse.Heading className="head-2">
            <H1>HEADING 2</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div className="test-2">SOME SECOND TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
      </Collapse>
    );

    const collapse = 'Collapse.react-css-collapse-transition';

    it('should render both bodies closed', () => {
      const wrapper = mount(component);

      expect((wrapper.find(collapse).first().props() ).isOpen).toBeFalsy();

      expect((wrapper.find(collapse).last().props() ).isOpen).toBeFalsy();

      expect(toJson(wrapper)).toMatchSnapshot();

      wrapper.unmount();
    });

    it('should render only first body opened', () => {
      const wrapper = mount(component);

      (wrapper.find('.head-1 Div').first().props() ).onClick({ component: {} });

      wrapper.update();

      expect((wrapper.find(collapse).first().props() ).isOpen).toBeTruthy();

      expect((wrapper.find(collapse).last().props() ).isOpen).toBeFalsy();

      wrapper.unmount();
    });
  });

  it('should render loading state', () => {
    const component = (
      <Collapse onSelect={jest.fn()} activePanelKey="1">
        <Collapse.Panel panelKey="1">
          <Collapse.Heading>
            <H1>HEADING</H1>
          </Collapse.Heading>
          <Collapse.Body isLoading>
            <Div>SOME TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
      </Collapse>
    );

    const wrapper = mount(component);

    expect(wrapper.find('Loader')).toHaveLength(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Collapse HANDLERS', () => {
  it('should call onSelect handler when click on Collapse.Heading', () => {
    const onSelectHandler = jest.fn();

    const component = (
      <Collapse onSelect={onSelectHandler}>
        <Collapse.Panel panelKey="1">
          <Collapse.Heading>
            <H1>HEADING</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div>SOME TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
      </Collapse>
    );

    const wrapper = mount(component);

    (wrapper.find('Div').first().props() ).onClick({ component: {} });
    expect(onSelectHandler).toHaveBeenCalled();
  });
});

describe('Collapse ATTRIBUTES', () => {
  it('should be opened if activePanelKey equals panelKey', () => {
    let wrapper;

    const onSelectHandler = jest.fn(ev => {
      const panelKey = ev.component.value;
      wrapper.setProps({ activePanelKey: panelKey });
    });

    const component = (
      <Collapse onSelect={onSelectHandler}>
        <Collapse.Panel panelKey="1">
          <Collapse.Heading>
            <H1>HEADING 1</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div className="first">SOME FIRST TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
        <Collapse.Panel panelKey="2">
          <Collapse.Heading>
            <H1>HEADING 2</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div className="second">SOME SECOND TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
      </Collapse>
    );

    wrapper = mount(component);

    // Collapse should be closed when mounted
    expect((wrapper.find('.react-css-collapse-transition').first().props() ).isOpen).toBeFalsy();
    expect((wrapper.find('.react-css-collapse-transition').at(2).props() ).isOpen).toBeFalsy();
    // Collapse should open first panel if heading was clicked
    wrapper.find('H1').first().parent().props()
      .onClick({ component: {} });

    expect(wrapper.find('.first').last().text()).toEqual('SOME FIRST TEST');

    // Collapse should close previous panel and open different if its heading was clicked
    wrapper.find('H1').last().parent().props()
      .onClick({ component: {} });

    expect(wrapper.find('.second').last().text()).toEqual('SOME SECOND TEST');
  });

  describe('wrapper', () => {
    describe('usage Div as a wrapper', () => {
      it('should wrap Collapse.Heading', () => {
        const component = (
          <Collapse onSelect={jest.fn()}>
            <Collapse.Panel panelKey="1">
              <Collapse.Heading wrapperRender={() => <Div className="test" _box _active><span>SHOOT MYSELF IN THE LEG!</span></Div>}>
                <H1>HEADING 1</H1>
              </Collapse.Heading>
              <Collapse.Body>
                <Div className="first">SOME FIRST TEST</Div>
              </Collapse.Body>
            </Collapse.Panel>
          </Collapse>
        );
        const wrapper = mount(component);

        expect(wrapper.find('.test').last().hasClass('box')).toBeTruthy();

        expect(wrapper.find('.test').last().hasClass('active')).toBeTruthy();

        expect(wrapper.find('.test').last().children().contains(<span>SHOOT MYSELF IN THE LEG!</span>)).toBeTruthy();

        expect(wrapper.find('.test').last().children().contains(<H1>HEADING 1</H1>)).toBeFalsy();
      });

      it('should wrap Collapse.Body', () => {
        const component = (
          <Collapse onSelect={jest.fn()} activePanelKey="1">
            <Collapse.Panel panelKey="1">
              <Collapse.Heading>
                <H1>HEADING 1</H1>
              </Collapse.Heading>
              <Collapse.Body wrapperRender={() => <Div className="test" _box _active><span>SHOOT MYSELF IN THE LEG!</span></Div>}>
                <Div className="first">SOME FIRST TEST</Div>
              </Collapse.Body>
            </Collapse.Panel>
          </Collapse>
        );
        const wrapper = mount(component);

        expect(wrapper.find('.test').last().hasClass('box')).toBeTruthy();

        expect(wrapper.find('.test').last().hasClass('active')).toBeTruthy();

        expect(wrapper.find('.test').last().children().contains(<span>SHOOT MYSELF IN THE LEG!</span>)).toBeTruthy();

        expect(wrapper.find('.test').last().children().contains(<Div className="first">SOME FIRST TEST</Div>)).toBeFalsy();
      });

      it('should wrap Collapse.Panel', () => {
        const component = (
          <Collapse onSelect={jest.fn()}>
            <Collapse.Panel panelKey="1" wrapperRender={() => <Div _box _active><span>SHOOT MYSELF IN THE LEG!</span></Div>}>
              <Div>TEST</Div>
            </Collapse.Panel>
          </Collapse>
        );
        const wrapper = mount(component);

        expect(wrapper.find('div').first().hasClass('box')).toBeTruthy();

        expect(wrapper.find('div').first().hasClass('active')).toBeTruthy();

        expect(wrapper.find('div').first().children().contains(<span>SHOOT MYSELF IN THE LEG!</span>)).toBeTruthy();

        expect(wrapper.find('div').first().children().contains(<Div>TEST</Div>)).toBeFalsy();
      });
    });

    describe('usage span as a wrapper', () => {
      it('should wrap Collapse.Heading', () => {
        const component = (
          <Collapse onSelect={jest.fn()}>
            <Collapse.Panel panelKey="1">
              <Collapse.Heading wrapperRender={() => <span className="box active"><p>SHOOT MYSELF IN THE LEG!</p></span>}>
                <H1>HEADING 1</H1>
              </Collapse.Heading>
              <Collapse.Body>
                <Div className="first">SOME FIRST TEST</Div>
              </Collapse.Body>
            </Collapse.Panel>
          </Collapse>
        );
        const wrapper = mount(component);

        expect(wrapper.find('span').first().hasClass('box')).toBeTruthy();

        expect(wrapper.find('span').first().hasClass('active')).toBeTruthy();

        expect(wrapper.find('span.box').children().contains(<p>SHOOT MYSELF IN THE LEG!</p>)).toBeTruthy();

        expect(wrapper.find('span').children().contains(<H1>HEADING 1</H1>)).toBeFalsy();
      });

      it('should wrap Collapse.Body', () => {
        const component = (
          <Collapse onSelect={jest.fn()} activePanelKey="1">
            <Collapse.Panel panelKey="1">
              <Collapse.Heading>
                <H1>HEADING 1</H1>
              </Collapse.Heading>
              <Collapse.Body wrapperRender={() => <span className="box active"><p>SHOOT MYSELF IN THE LEG!</p></span>}>
                <Div className="first">SOME FIRST TEST</Div>
              </Collapse.Body>
            </Collapse.Panel>
          </Collapse>
        );
        const wrapper = mount(component);

        expect(wrapper.find('span').at(1).hasClass('box')).toBeTruthy();

        expect(wrapper.find('span').at(1).hasClass('active')).toBeTruthy();

        expect(wrapper.find('span').at(1).children().contains(<p>SHOOT MYSELF IN THE LEG!</p>)).toBeTruthy();

        expect(wrapper.find('span').at(1).children().contains(<Div className="first">SOME FIRST TEST</Div>)).toBeFalsy();
      });

      it('should wrap Collapse.Panel', () => {
        const component = (
          <Collapse onSelect={jest.fn()}>
            <Collapse.Panel panelKey="1" wrapperRender={() => <span className="box active"><p>SHOOT MYSELF IN THE LEG!</p></span>}>
              <Div>TEST</Div>
            </Collapse.Panel>
          </Collapse>
        );
        const wrapper = mount(component);

        expect(wrapper.find('span').hasClass('box')).toBeTruthy();

        expect(wrapper.find('span').hasClass('active')).toBeTruthy();

        expect(wrapper.find('span').children().contains(<p>SHOOT MYSELF IN THE LEG!</p>)).toBeTruthy();

        expect(wrapper.find('span').children().contains(<Div>TEST</Div>)).toBeFalsy();
      });
    });
    describe('usage span as a wrapper without children', () => {
      it('should wrap Collapse.Heading', () => {
        const component = (
          <Collapse onSelect={jest.fn()}>
            <Collapse.Panel panelKey="1">
              <Collapse.Heading wrapperRender={() => <span className="box active" />}>
                <H1>HEADING 1</H1>
              </Collapse.Heading>
              <Collapse.Body>
                <Div className="first">SOME FIRST TEST</Div>
              </Collapse.Body>
            </Collapse.Panel>
          </Collapse>
        );
        const wrapper = mount(component);

        expect(wrapper.find('span').first().hasClass('box')).toBeTruthy();

        expect(wrapper.find('span').first().hasClass('active')).toBeTruthy();
      });

      it('should wrap Collapse.Body', () => {
        const component = (
          <Collapse onSelect={jest.fn()} activePanelKey="1">
            <Collapse.Panel panelKey="1">
              <Collapse.Heading>
                <H1>HEADING 1</H1>
              </Collapse.Heading>
              <Collapse.Body wrapperRender={() => <span className="box active" />}>
                <Div className="first">SOME FIRST TEST</Div>
              </Collapse.Body>
            </Collapse.Panel>
          </Collapse>
        );
        const wrapper = mount(component);

        expect(wrapper.find('span').at(1).hasClass('box')).toBeTruthy();

        expect(wrapper.find('span').at(1).hasClass('active')).toBeTruthy();
      });

      it('should wrap Collapse.Panel', () => {
        const component = (
          <Collapse onSelect={jest.fn()}>
            <Collapse.Panel panelKey="1" wrapperRender={() => <span className="box active" />}>
              <Div>TEST</Div>
            </Collapse.Panel>
          </Collapse>
        );
        const wrapper = mount(component);

        expect(wrapper.find('span').hasClass('box')).toBeTruthy();

        expect(wrapper.find('span').hasClass('active')).toBeTruthy();
      });
    });
  });
});
