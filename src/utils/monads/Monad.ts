import { GuardsType } from './Guards';
import { MaybeType } from './Maybe';

export interface MonadIfDo<S> {
  <T, C extends S>(condition: (value: S) => value is C, callback: (value: C) => T): MonadType<T | S>,
}

export interface MonadGetValue<S> {
  (): S,
}

export interface MonadAp<S> {
  <T>(value?: T): MonadType<S extends (...args: any[]) => infer V ? V : S>,
}

export interface MonadType<S> {
  ap: MonadAp<S>,
  ifDo: MonadIfDo<S>,
  do: <T>(callback: (value: S) => T) => MonadType<T>,
  of: <T>(value: T) => MonadType<T>,
  getValue: MonadGetValue<S>,
  toGuards: () => GuardsType<S>,
  toMaybe: () => MaybeType<NonNullable<S>>,
  toString: () => string,
}
