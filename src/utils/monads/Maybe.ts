import { GuardsType } from './Guards';
import { MonadType } from './Monad';

export interface MaybeType<S> {
  ap: MaybeAp<NonNullable<S>>,
  getValue: () => S,
  ifDo: MaybeIfDo<NonNullable<S>>,
  isJust: () => boolean,
  isNothing: () => boolean,
  of: <T>(value: T) => MaybeType<NonNullable<T>>,
  do: <T>(callback: (value: S) => T) => MaybeType<NonNullable<T>>,
  toGuards: () => GuardsType<S | undefined | null>,
  toMonad: () => MonadType<S | undefined | null>,
  toString: () => string,
  withDefault: <T>(value: T) => MaybeType<NonNullable<S | T>>,
}

export interface MaybeIfDo<S> {
  <T, C extends S>(condition: (value: S) => value is C, callback: (value: C) => T): MaybeType<NonNullable<T | S>>,
}

export interface MaybeAp<S> {
  <T>(value?: T): MaybeType<S extends (...args: any[]) => infer V ? NonNullable<V> : NonNullable<S>>,
}
