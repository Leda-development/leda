import { PasswordProps, PasswordRule } from './types';
import { ValidatorObject } from '../Validation/types';
import { isNil } from 'lodash';

export const transformToCase = (letter: string, letterCase: PasswordProps['letterCase']): string | never => {
  if (letterCase === 'lower') return letter.toLowerCase();

  if (letterCase === 'upper') return letter.toUpperCase();

  throw new Error('L.Password: letterCase prop must be \'lower\' or \'upper\'!');
};

export const getValue = (valueProp: string | null | undefined, valueState: string): string => {
  if (valueProp === undefined) return valueState;

  if (valueProp === null) {
    return '';
  }

  return valueProp;
};

export const rulesToValidators = (rules: PasswordRule[]): ValidatorObject[] => {
  return rules.map(({ rule }) => {
    return {
      validator: rule,
    }
  });
}; 

export const isValuePassingRule = (value: string | null, rule: RegExp | ((password: string) => boolean)): boolean => {
  if (isNil(value)) return false;

  if (rule instanceof RegExp) {
    return rule.test(value);
  }

  return rule(value);
}