import type { SomeObject } from '../commonTypes';
import { checkIsFilled } from '../form/helpers';

// checks if a required field is empty
// it can be valid if it is the first render, or not if not the first
export const getIsEmptyAndRequired = (
  value: string | number | string [] | number[] | SomeObject | SomeObject[] | null | null[] | undefined,
  isRequired: boolean | undefined,
): boolean => {
  if (isRequired === true) return !checkIsFilled(value);
  return false;
};
