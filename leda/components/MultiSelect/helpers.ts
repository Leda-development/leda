import { isFunction, isObject, isString } from 'lodash';
import { filterSuggestionByRule } from '../../utils';
import { getText } from '../../src/SuggestionList/helpers';
import {
  CompareItemsParams, FilterDataParams, MultiSelectProps, Value,
} from './types';

export const checkIsTheSameItem = ({
  dataItem,
  currentItem,
  compareObjectsBy,
}: CompareItemsParams): boolean => {
  if (isObject(dataItem) && isObject(currentItem)) {
    if (isString(compareObjectsBy)) return dataItem[compareObjectsBy] === currentItem[compareObjectsBy];
    if (isFunction(compareObjectsBy)) return compareObjectsBy(dataItem) === compareObjectsBy(currentItem);
  }

  return dataItem === currentItem;
};

export const filterData = ({
  compareObjectsBy,
  data,
  filterRule,
  filterValue,
  textField,
  value: values,
}: FilterDataParams): MultiSelectProps['data'] => {
  if (!data) return undefined;

  const filteredData = (data as Value[])
    // убираем все значения, которые уже выбраны
    .filter((item) => !values.find((value) => checkIsTheSameItem({ dataItem: item, currentItem: value, compareObjectsBy })))
    // и фильтруем по filterValue
    .filter((item) => filterSuggestionByRule(getText(item, textField), filterValue || '', filterRule));

  if (filteredData.length === 0) return undefined;

  return filteredData as Value[];
};

export const getValue = (valueProp: Value[] | null | undefined, valueState: Value[]): Value[] => {
  if (valueProp === undefined) return valueState;

  if (valueProp === null) return [];

  return valueProp;
};
