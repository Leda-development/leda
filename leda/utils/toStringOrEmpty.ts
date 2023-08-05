import { isNil } from 'lodash';
// If the value is not null/undefined - results in a string, otherwise gives empty string
// null -> "", 1 -> "1"
export const toStringOrEmpty = (value: unknown): string => {
  if (isNil(value)) return '';

  return String(value);
};
