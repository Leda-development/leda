import { Guards, Maybe, Monad } from './index';
import { equals, greater, less } from '../guardsHelpers';

describe('Guards', () => {
  it('should change state when condition is true and vice versa', () => {
    const result1 = Guards(5)
      .when(equals(5), 10)
      .getValue();

    expect(result1).toEqual(10);

    const str = 'some val';
    const result2 = Guards(str)
      .when(str.length >= 10, inwards => `${inwards}ue here!`)
      .getValue();

    expect(result2).toEqual(str);
  });

  it('should use otherwise', () => {
    const result1 = Guards(5)
      .when(equals(10), 10)
      .otherwise(15)
      .getValue();

    expect(result1).toEqual(15);

    const str = 'some val';
    const result2 = Guards(str)
      .when(str.length >= 10, inwards => `${inwards}ue here!`)
      .otherwise(x => x.slice(0, -4))
      .getValue();

    expect(result2).toEqual('some');
  });
});

describe('Maybe', () => {
  it('should be Just(value) or Nothing()', () => {
    expect(Maybe(5).toString()).toEqual('Just(5)');

    expect(Maybe({}).toString()).toEqual('Just([object Object])');

    expect(Maybe([]).toString()).toEqual('Just()');

    expect(Maybe(false).toString()).toEqual('Just(false)');

    expect(Maybe(null).toString()).toEqual('Nothing()');

    expect(Maybe(undefined).toString()).toEqual('Nothing()');
  });

  it('should replace value with default', () => {
    const result1 = Maybe(5)
      .do(x => x * 10)
      .withDefault(0)
      .getValue();

    expect(result1).toEqual(50);

    const result2 = Maybe(null)
      .do(100)
      .withDefault(0)
      .getValue();

    expect(result2).toEqual(0);

    const result3 = Maybe(5)
      .do(100)
      .withDefault(0)
      .getValue();

    expect(result3).toEqual(100);

    const result4 = Maybe(undefined)
      .do(x => x * 10)
      .withDefault(5)
      .getValue();

    expect(result4).toEqual(5);
  });
});

describe('Monad', () => {
  it('should create chainings', () => {
    const result1 = Monad(5)
      .do(x => x * 10)
      .do(x => x - 20)
      .do(x => x + 100)
      .getValue();

    expect(result1).toEqual((5 * 10) - 20 + 100);

    const result2 = Monad('some')
      .do(x => `${x} value`)
      .do(x => x.slice(0, -2))
      .do(x => x.slice(2))
      .getValue();

    expect(result2).toEqual('me val');
  });

  it('should call func if condition is true', () => {
    const result = Monad(5)
      .ifDo(equals(10), 0)
      .ifDo(greater(6), 15)
      .ifDo(equals(15), x => x * 2)
      .ifDo(less(3), x => x - 100)
      .getValue();

    expect(result).toEqual(-70);
  });
});
