import type * as React from 'react';

export interface AttributesType {
  className?: string,
  size?: string,
  active?: boolean,
  dropdown?: boolean,
  box?: boolean,
  userBox?: boolean,
  navBox?: boolean,
  contentBox?: boolean,
  menuBox?: string,
  primary?: boolean,
  width?: number,
}

export interface ValidatedBlurEvent<T = HTMLInputElement> extends React.FocusEvent<T> {
  target: EventTarget & T & { isValid?: boolean },
  relatedTarget: EventTarget & Element,
}

export interface DataObject { [x: string]: string | number }

// eslint-disable-next-line @typescript-eslint/ban-types
export interface RenderEvent<P = {}, S = {}, E = {}> {
  Element: React.ElementType,
  componentProps: P,
  componentState: S,
  elementProps: E,
}

export interface CustomRender<P, S, E> {
  (props: RenderEvent<P, S, E>): React.ReactNode,
}

export interface SomeObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any,
}

export interface SomeFunction {
  (x: unknown): unknown,
}

export type RecursivePartial<T> = Partial<{
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : Partial<T[P]>;
}>;

export type RecursiveRequired<T> = Required<{
  [P in keyof T]?: T[P] extends object ? RecursiveRequired<T[P]> : Required<T[P]>;
}>;

export interface CustomEventHandler<T> {
  (ev: T): void,
}

export type Values<T> = T[keyof T];

export type SetState<S> = React.Dispatch<React.SetStateAction<S>>;

// eslint-disable-next-line @typescript-eslint/ban-types
export interface Action<T, P = {}> {
  type: T,
  payload: P,
}

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : A;
