/* eslint-disable react/prop-types */

import { isString, isBoolean } from 'lodash';
import {
  Guards,
} from '../../utils';
import { NumericRangeProps } from './types';

export const getName = (name?: string | [string | undefined, string | undefined]): [string | undefined, string | undefined] => {
  if (isString(name)) return [`${name}-from`, `${name}-to`];

  if (Array.isArray(name) && name.length === 2) return name;

  return [undefined, undefined];
};

export const getPlaceholder = (placeholder?: string | [string | undefined, string | undefined]): [string | undefined, string | undefined] => Guards(placeholder)
  .when(Array.isArray, () => placeholder as [string | undefined, string | undefined])
  .when(isString, () => [placeholder, placeholder] as [string | undefined, string | undefined])
  .otherwise(() => [undefined, undefined] as [string | undefined, string | undefined])
  .getValue();

export const getRequired = (isRequired?: boolean | [boolean, boolean]): [boolean, boolean] => Guards(isRequired)
  .when(Array.isArray, () => isRequired as [boolean, boolean])
  .when(isBoolean, () => [isRequired, isRequired] as [boolean, boolean])
  .otherwise(() => [false, false] as [boolean, boolean])
  .getValue();

export const getDisabled = (isDisabled?: boolean | [boolean, boolean]): [boolean, boolean] => Guards(isDisabled)
  .when(Array.isArray, () => isDisabled as [boolean, boolean])
  .when(isBoolean, () => [isDisabled, isDisabled] as [boolean, boolean])
  .otherwise(() => [false, false] as [boolean, boolean])
  .getValue();

export const getControlledValue = (value: NumericRangeProps['value']): [number | null, number | null] | undefined => {
  if (value === undefined) return undefined;

  if (value === null) return [null, null];

  return value;
};
