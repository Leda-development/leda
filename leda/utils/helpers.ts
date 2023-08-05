// copied from https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/round
import * as React from 'react';
import { isFunction } from 'lodash';
// eslint-disable-next-line import/no-unresolved
import { ClassValue } from 'classnames/types';
import classnames from 'classnames';
import classnamesDedupe from 'classnames/dedupe';
import { SomeObject } from '../commonTypes';

export const stringToMaxLength = (str: string, maxLength?: number) => {
  if (maxLength != null && maxLength < str.length) {
    return str.substring(0, maxLength);
  }
  return str;
};

const initRef = <T, C>(ref: React.Ref<T> | React.MutableRefObject<T>, current: C): void => {
  if (isFunction(ref)) {
    ref(current as unknown as T);
  } else if (ref) {
    (ref as React.MutableRefObject<T>).current = current as unknown as T;
  }
};

// binding of a ref to a functional component
export const bindFunctionalRef = <V, T, C>(component: V, ref: React.Ref<T> | React.MutableRefObject<T>, current: C): void => {
  if (!ref) return;
  // if component is null - write null to ref
  if (!component || !current) {
    initRef<T, null>(ref, null);
  } else {
    initRef<T, C>(ref, current);
  }
};


export const getComputedTheme = <D, T>(defaultTheme: D, theme: T): D & T => ({ ...defaultTheme, ...theme });

// bind ref to a class component
export const bindClassRef = <T, C>(instance: T, current: C | undefined | null): void => {
  if (!current || !instance) return;

  Object.keys(current).forEach((field) => {
    (instance as unknown as SomeObject)[field] = (current as unknown as SomeObject)[field];
  });
};

// returns a string that contains classes, or undefined if no classes were passed in
export const getClassNames = (...classNames: ClassValue[]): string | undefined => classnames(...classNames) || undefined;
// returns a string that contains classes without duplication, or undefined if no classes were passed in
export const getDedupedClassNames = (...classNames: ClassValue[]): string | undefined => classnamesDedupe(...classNames) || undefined;

// TEST UTILS

// when generating snapshots some properties are changed dynamically and snapshots are broken. To avoid this, let's remove unnecessary properties.
const removeProp = <T extends object>(obj: T): Partial<T> => {
  const object = { ...obj } as { props: { [x: string]: unknown}, children: unknown};
  const forbiddenProps = [
    'activedescendant',
    'anchor',
    'aria-activedescendant',
    'aria-controls',
    'aria-owns',
    'calendarGuid',
    'containerInfo',
    'id',
    'initialFocusedDate',
    'optionPrefix',
    'owns',
    'popupSettings',
    'ariaActiveDescendant',
    'ariaOwns',
    'minDate',
    'min',
    'aria-valuemin',
    'location',
    'history',
  ];

  if (object.props) {
    Object.keys(object.props).forEach((prop) => {
      if (forbiddenProps.includes(prop)) object.props[prop] = '';
      // DatePicker in the calendar has a test crash every day, because the cell with class k-today is changed, let's remove this class.
      if (prop === 'className' && object.props[prop] === 'k-today') delete object.props[prop];
    });
  }

  if (object.children && Array.isArray(object.children)) {
    object.children.forEach((child) => removeProp(child));
  }

  return object as unknown as Partial<T>;
};

export const fixJSON = <T extends object>(wrapperJSON: T): Partial<T> => removeProp(wrapperJSON);
// END OF TEST UTILS
