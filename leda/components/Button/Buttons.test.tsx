// @ts-nocheck
import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import { Button } from './index';
import { Input } from '../Input';


describe('Check Button snapshots collection', () => {
  test('is Button changed?', () => {
    const wrapper = render((
      <Button>test</Button>
    ));
    expect(wrapper.container)
      .toMatchSnapshot();
  });
  test('is Button with isLoading attributes changed?', () => {
    const wrapper = render((
      <Button isLoading>test</Button>
    ));
    expect(wrapper.container)
      .toMatchSnapshot();
  });
  test('is Button with isDisabled attributes changed?', () => {
    const wrapper = render((
      <Button isDisabled>test</Button>
    ));
    expect(wrapper.container)
      .toMatchSnapshot();
  });
  test('is Button with Form and onClick props changed?', () => {
    const wrapper = render((
      <div>
        <Input form="test" name="in" isRequired />
        <Button onClick={jest.fn()} form="test" isDisabled>test</Button>
      </div>
    ));
    expect(wrapper.container)
      .toMatchSnapshot();
  });
});
describe('Check Button basic condition set', () => {
  test('is Button have Primary class?', () => {
    render((
      <Button _primary>test</Button>
    ));
    expect(document.querySelectorAll('button.primary'))
      .toHaveLength(1);
  });
  test('is Button have Secondary class?', () => {
    render((
      <Button _secondary>test</Button>
    ));
    expect(document.querySelectorAll('button.secondary'))
      .toHaveLength(1);
  });
  test('is Button have Success class?', () => {
    render((
      <Button _success>test</Button>
    ));
    expect(document.querySelectorAll('button.success'))
      .toHaveLength(1);
  });
  test('is Button have Warning class?', () => {
    render((
      <Button _warning>test</Button>
    ));
    expect(document.querySelectorAll('button.warning'))
      .toHaveLength(1);
  });
  test('is Button have Danger class?', () => {
    render((
      <Button _danger>test</Button>
    ));
    expect(document.querySelectorAll('button.danger'))
      .toHaveLength(1);
  });
});
describe('Check Button advanced condition set', () => {
  test('is Button have Loading class?', () => {
    render((
      <Button isLoading>test</Button>
    ));
    expect(document.querySelectorAll('button.loading'))
      .toHaveLength(1);
  });
  test('is Button with isLoading attributes don`t run onClick?', () => {
    const onClickHandler = jest.fn();
    render((
      <Button isLoading onClick={onClickHandler}>test</Button>
    ));
    expect(onClickHandler)
      .not
      .toHaveBeenCalled();
  });
  test('is Button have Disabled class?', () => {
    render((
      <Button isDisabled>test</Button>
    ));
    expect(document.querySelectorAll('button.disabled'))
      .toHaveLength(1);
  });
  test('is Button with isDisabled attributes don`t run onClick?', () => {
    const onClickHandler = jest.fn();
    render((
      <Button isDisabled onClick={onClickHandler}>test</Button>
    ));
    expect(onClickHandler)
      .not
      .toHaveBeenCalled();
  });
});
describe('Check Button size set', () => {
  test('is Button have Small size class?', () => {
    render((
      <Button _small>test</Button>
    ));
    expect(document.querySelectorAll('button.small'))
      .toHaveLength(1);
  });
  test('is Button have Large size class?', () => {
    render((
      <Button _large>test</Button>
    ));
    expect(document.querySelectorAll('button.large'))
      .toHaveLength(1);
  });
  test('is Button have Block class?', () => {
    render((
      <Button _block>test</Button>
    ));
    expect(document.querySelectorAll('button.block'))
      .toHaveLength(1);
  });
});
describe('Check Button Form validation role collection', () => {
  test('is Button click and assigned Form submit right?', () => {
    const onClick = jest.fn();

    render((
      <div>
        <Input form="test" name="email" />
        <Button onClick={onClick} form="test">test</Button>
      </div>
    ));
    screen.getByText('test').click();
    expect(onClick).toBeCalledTimes(1);
  });
  test('is Button click and all From field valid?', () => {
    const onSubmitValid = jest.fn();
    const onSubmitInvalid = jest.fn();
    const email = 'some@email.ru';

    render((
      <div>
        <Input form="test" name="email" invalidMessage="error" isRequired validator="email" value={email} />
        <Button onClick={onSubmitValid} onValidationFail={onSubmitInvalid} form="test">test</Button>
      </div>
    ));
    screen.getByText('test').click();
    expect(onSubmitValid).toBeCalledTimes(1);
    expect(onSubmitInvalid).toBeCalledTimes(0);
  });
  test('is Button click and some field is not valid?', () => {
    const onSubmitValid = jest.fn();
    const onSubmitInvalid = jest.fn();
    const email = '-----';

    render((
      <div>
        <Input form="test" name="email" invalidMessage="error" isRequired validator="email" value={email} />
        <Button onClick={onSubmitValid} onValidationFail={onSubmitInvalid} form="test">test</Button>
      </div>
    ));
    screen.getByText('test').click();
    expect(onSubmitValid).toBeCalledTimes(0);
    expect(onSubmitInvalid).toBeCalledTimes(1);
  });
});
