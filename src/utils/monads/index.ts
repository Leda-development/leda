import { isFunction, isNil } from 'lodash';
import {
  GetValue, GuardsOf, GuardsType, Otherwise, ToMaybe, ToMonad, ToString, When,
} from './Guards';
import {
  MaybeAp, MaybeIfDo, MaybeType,
} from './Maybe';
import {
  MonadAp, MonadGetValue, MonadIfDo, MonadType,
} from './Monad';

export function Guards <T, R = never>(value?: T, isCompleted = false): GuardsType<T, R> {
  const when: When<T, R> = (<C, T>(condition: C, callback: T) => {
    const calculatedCondition = !isCompleted && (isFunction(condition) ? condition(value) : condition);

    const callbackValue = isFunction(callback) && calculatedCondition ? callback(value) : callback;

    return (!isCompleted && calculatedCondition
      ? Guards(callbackValue, true)
      : Guards(value, isCompleted));
  }) as unknown as When<T, R>;

  const otherwise: Otherwise<T, R> = (<S>(callback: S) => {
    const callbackValue = !isCompleted && isFunction(callback) ? callback(value) : callback;

    return (!isCompleted
      ? Guards(callbackValue, true)
      : Guards(value, true));
  }) as unknown as Otherwise<T, R>;

  const of: GuardsOf = newValue => Guards(newValue);

  const getValue: GetValue<T, R> = (() => value) as unknown as GetValue<T, R>;

  const toMaybe: ToMaybe<R> = () => Maybe(value as unknown as R);

  const toMonad: ToMonad<R> = () => Monad(value as unknown as R);

  const toString: ToString = () => `Guards(${value})`;

  return {
    of,
    otherwise,
    when,
    getValue,
    toMaybe,
    toMonad,
    toString,
  };
}

export function Monad<T>(value: T): MonadType<T> {
  const ifDo: MonadIfDo<T> = (<S, C extends T>(condition: (value: T) => value is C, callback: (value: C) => S): MonadType<T | S> => {
    const calculatedCondition = isFunction(condition) ? condition(value) : condition;

    const callbackValue = isFunction(callback) && calculatedCondition ? callback(value as unknown as C) : callback;

    return (calculatedCondition ? Monad(callbackValue) : Monad(value)) as unknown as MonadType<T | S>;
  }) as MonadIfDo<T>;

  const of = <S>(newValue: S): MonadType<S> => Monad(newValue);

  const ap: MonadAp<T> = (<T>(valueToApply: T): MonadType<T> => (isFunction(value)
    ? Monad(value(valueToApply))
    : Monad(value) as unknown as MonadType<T>)) as unknown as MonadAp<T>;

  return {
    ap,
    ifDo,
    of,
    do: <S>(callback: (value: T) => S): MonadType<S> => Monad(isFunction(callback) ? callback(value) : callback),
    getValue: (() => value) as MonadGetValue<T>,
    toGuards: () => Guards(value),
    toMaybe: () => Maybe(value),
    toString: () => `Monad(${value})`,
  };
}

export function Maybe<T>(value: T): MaybeType<NonNullable<T>> {
  const isValueNil = isNil(value);

  return (isValueNil ? Nothing() : Just(value));
}

function Nothing<T>(): MaybeType<NonNullable<T>> {
  return {
    ap: (() => Nothing()) as unknown as MaybeAp<NonNullable<NonNullable<T>>>,
    getValue: () => {
      throw new Error('Can not get value of Nothing()');
    },
    ifDo: (() => Nothing()) as unknown as MaybeIfDo<NonNullable<NonNullable<T>>>,
    isJust: () => false,
    isNothing: () => true,
    of: newValue => Maybe(newValue),
    do: () => Nothing(),
    toGuards: () => Guards<NonNullable<T> | null | undefined>(null),
    toMonad: () => Monad<NonNullable<T> | null | undefined>(null),
    toString: () => 'Nothing()',
    withDefault: (<S>(value: S) => Just(value)) as unknown as MaybeType<NonNullable<T>>['withDefault'],
  };
}

function Just<T>(value: T): MaybeType<NonNullable<T>> {
  const ifDo: MaybeIfDo<NonNullable<NonNullable<T>>> = (<S, C extends NonNullable<T>>(condition: (value: NonNullable<T>) => value is C, callback: (value: C) => S) => {
    const calculatedCondition = isFunction(condition) ? condition(value as NonNullable<T>) : condition;

    const callbackValue = isFunction(callback) && calculatedCondition ? callback(value as C) : callback;

    return (calculatedCondition ? Maybe(callbackValue) : Just(value));
  }) as MaybeIfDo<NonNullable<NonNullable<T>>>;

  const ap: MaybeAp<NonNullable<NonNullable<T>>> = (<S>(valueToApply: S) => (isFunction(value) ? Maybe(value(valueToApply)) : Just(value))) as unknown as MaybeAp<NonNullable<NonNullable<T>>>;

  return {
    ap,
    ifDo,
    do: <S>(callback: S) => Maybe(isFunction(callback) ? callback(value) : callback),
    getValue: <T>(): T => value as unknown as T,
    isJust: () => true,
    isNothing: () => false,
    of: newValue => Maybe(newValue),
    toGuards: () => Guards<NonNullable<T> | null | undefined>(value as NonNullable<T> | null | undefined),
    toMonad: () => Monad<NonNullable<T> | null | undefined>(value as NonNullable<T> | null | undefined),
    toString: () => `Just(${value})`,
    withDefault: (() => Just(value)) as unknown as MaybeType<NonNullable<T>>['withDefault'],
  };
}
