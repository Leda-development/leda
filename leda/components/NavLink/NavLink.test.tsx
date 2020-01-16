// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { NavLink } from './index';
import { fixJSON } from '../../utils';
import { Span } from '../Span';

describe('NavLink SNAPSHOTS', () => {
  it('should render', () => {
    const link = (
      <MemoryRouter>
        <NavLink href="/test">test link</NavLink>
      </MemoryRouter>
    );
    const wrapper = mount(link);

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });
});

describe('NavLink ATTRIBUTES', () => {
  it('should have "href" route', () => {
    const link = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink href="/test">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(link);

    expect(wrapper.find('a').props().href).toEqual('/test');

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should have "href" in isExternal rout ', () => {
    const externalLink = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink isExternal href="https://google.com">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(externalLink);

    expect(wrapper.find('a').props().href).toEqual('https://google.com');

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should render react link if isExternal is true', () => {
    const externalLink = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink isExternal href="https://google.com">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(externalLink);

    expect((wrapper.find('NavLink').props()).isExternal).toBeTruthy();

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should have isExact route', () => {
    const link = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink isExact href="/test">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(link);

    expect((wrapper.find('Route').first().props()).exact).toBeTruthy();

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should work in isStrict mode', () => {
    const link = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink isStrict href="/test">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(link);

    expect((wrapper.find('Route').first().props()).strict).toBeTruthy();

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should compare location', () => {
    const link = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink location="/" href="/test">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(link);

    expect((wrapper.find('Route').first().props()).location.pathname).toEqual('/');

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });


  describe('should have className, change classes through props and className should not change prop-classes', () => {
    it('should have className', () => {
      const link = (
        <MemoryRouter initialEntries={['/']}>
          <NavLink _box isStrict href="/test">test link</NavLink>
        </MemoryRouter>
      );

      const wrapper = mount(link);

      expect(wrapper.find('li').hasClass('box')).toBeTruthy();

      const wrapperJSON = toJson(wrapper);

      expect(fixJSON(wrapperJSON)).toMatchSnapshot();
    });

    it('should change classes through props', () => {
      const link = (
        <MemoryRouter initialEntries={['/']}>
          <NavLink _inner isStrict href="/test">test link</NavLink>
        </MemoryRouter>
      );

      const wrapper = mount(link);

      expect(wrapper.find('li').hasClass('box')).toBeFalsy();

      expect(wrapper.find('li').hasClass('inner')).toBeTruthy();

      const wrapperJSON = toJson(wrapper);

      expect(fixJSON(wrapperJSON)).toMatchSnapshot();
    });

    it('should not allow className to change prop-classes', () => {
      const link = (
        <MemoryRouter initialEntries={['/']}>
          <NavLink className="testClass" _inner isStrict href="/test">test link</NavLink>
        </MemoryRouter>
      );

      const wrapper = mount(link);

      expect(wrapper.find('li').hasClass('box')).toBeFalsy();

      expect(wrapper.find('li').hasClass('inner')).toBeTruthy();

      expect(wrapper.find('li').hasClass('testClass')).toBeTruthy();

      const wrapperJSON = toJson(wrapper);

      expect(fixJSON(wrapperJSON)).toMatchSnapshot();
    });
  });

  it('should accept isActive function', () => {
    const isActive = jest.fn();
    const link = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink isActive={isActive} href="/test">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(link); // eslint-disable-line no-unused-vars

    expect(isActive).toHaveBeenCalled();

    const [[event]] = isActive.mock.calls;

    expect(event.pathname).toEqual('/');

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should render dropDownListTemplate', () => {
    const link = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink dropDownRender={() => <div className="test">LIST</div>} href="/test">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(link);

    expect(wrapper.find('.test')).toHaveLength(1);

    expect(wrapper.find('.test').text()).toEqual('LIST');

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should have children prop', () => {
    const link = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink href="/test">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(link);

    expect(wrapper.find('a').text()).toEqual('test link ');

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should render icon', () => {
    const link = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink iconRender={() => <Span _count>20</Span>} href="/test">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(link);

    expect(wrapper.find('.count').text()).toEqual('20');

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should be hidden', () => {
    const link = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink isHidden href="/test">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(link);

    expect(wrapper.find('a')).toHaveLength(0);

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should accept _blank target prop', () => {
    const link = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink target="_blank" href="/test">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(link);

    expect(wrapper.find('a')).toHaveLength(1);

    expect(wrapper.find('a').props().target).toEqual('_blank');

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });

  it('should accept _self target prop', () => {
    const link = (
      <MemoryRouter initialEntries={['/']}>
        <NavLink target="_self" href="/test">test link</NavLink>
      </MemoryRouter>
    );

    const wrapper = mount(link);

    expect(wrapper.find('a')).toHaveLength(1);

    expect(wrapper.find('a').props().target).toEqual('_self');

    const wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });
});
