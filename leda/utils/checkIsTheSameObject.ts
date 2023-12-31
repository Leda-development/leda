import { isFunction, isObject, isString } from 'lodash';
import type { SomeObject } from '../commonTypes';

interface CompareObjectsParams {
  compareObjectsBy?: ((suggestionListItems: SomeObject) => unknown) | string,
  obj1: unknown,
  obj2: unknown,
}

export const checkIsTheSameObject = ({
  obj1,
  obj2,
  compareObjectsBy,
}: CompareObjectsParams): boolean => {
  if (isObject(obj1) && isObject(obj2)) {
    if (isString(compareObjectsBy)) {
      if (!(compareObjectsBy in obj1)) return false; // do not compare by missing fields

      return (obj1 as SomeObject)[compareObjectsBy] === (obj2 as SomeObject)[compareObjectsBy];
    }
    if (isFunction(compareObjectsBy)) {
      if (compareObjectsBy(obj1) === undefined) return false; // do not compare by missing fields

      return compareObjectsBy(obj1) === compareObjectsBy(obj2);
    }
  }

  return obj1 === obj2;
};
