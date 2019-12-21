import { MaybeType } from './Maybe';
import { MonadType } from './Monad';

export interface GuardsOf {
  <T>(value: T): GuardsType<T>,
}

export interface When<S, R> {
   <T, C extends S>(condition: ((value: S) => value is C) | ((value: S) => boolean) | (() => boolean), callback: (value: C) => T): GuardsType<S, T | R>,
}

export interface Otherwise<S, R> {
  <T>(callback: (value: S) => T): GuardsType<S, T | R>,
}

export interface GetValue<S, R> {
  (): R,
}

export interface ToMaybe<S> {
  (): MaybeType<NonNullable<S>>,
}

export interface ToMonad<S> {
  (): MonadType<S>,
}

export interface ToString {
  (): string,
}

export interface GuardsType<S, R = never> {
  of: GuardsOf,
  when: When<S, R>,
  otherwise: Otherwise<S, R>,
  getValue: GetValue<S, R>,
  toMaybe: ToMaybe<R>,
  toMonad: ToMonad<R>,
  toString: ToString,
}
