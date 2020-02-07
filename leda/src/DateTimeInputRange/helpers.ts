import {
  isString, isNil, isBoolean, isDate,
} from 'lodash';
import { stringToDate } from '../DateTimeInput/helpers';
import { DateTimeInputRangeProps } from './types';

export const isDateValue = (value: DateTimeInputRangeProps['value']): value is [Date | null, Date | null] => Array.isArray(value)
  && value.length === 2
  && (isNil(value[0]) || isDate(value[0]))
  && (isNil(value[1]) || isDate(value[1]));

export const getDateRangeFromValue = (props: DateTimeInputRangeProps): [Date | null, Date | null] => {
  const { value: valueProp, format } = props;

  if (!valueProp) return [null, null];

  if (isDateValue(valueProp)) return valueProp;

  return [stringToDate(valueProp[0], format), stringToDate(valueProp[1], format)];
};

export const getPlaceholder = (placeholder?: [string | undefined, string | undefined] | string): [string | undefined, string | undefined] => {
  if (isString(placeholder)) return [placeholder, placeholder];

  if (Array.isArray(placeholder)) return placeholder;

  return [undefined, undefined];
};

export const getRequired = (isRequired?: [boolean | undefined, boolean| undefined] | boolean): [boolean | undefined, boolean| undefined] => {
  if (isBoolean(isRequired)) return [isRequired, isRequired];

  if (Array.isArray(isRequired)) return isRequired;

  return [undefined, undefined];
};

export const getDisabled = (isDisabled?: [boolean | undefined, boolean| undefined] | boolean): [boolean | undefined, boolean| undefined] => {
  if (isBoolean(isDisabled)) return [isDisabled, isDisabled];

  if (Array.isArray(isDisabled)) return isDisabled;

  return [undefined, undefined];
};

export const getOpen = (isOpen?: [boolean | undefined, boolean| undefined] | boolean): [boolean | undefined, boolean| undefined] => {
  if (isBoolean(isOpen)) return [isOpen, isOpen];

  if (Array.isArray(isOpen)) return isOpen;

  return [undefined, undefined];
};

export const getName = (name?: string | [string | undefined, string | undefined]): [string | undefined, string | undefined] => {
  if (isString(name)) return [`${name}-from`, `${name}-to`];

  if (Array.isArray(name) && name.length === 2) return name;

  return [undefined, undefined];
};

export const getRequiredMessage = (message?: string | [string | undefined, string | undefined]): [string | undefined, string | undefined] => {
  if (isString(message)) return [message, message];

  if (Array.isArray(message) && message.length === 2) return message;

  return [undefined, undefined];
};
