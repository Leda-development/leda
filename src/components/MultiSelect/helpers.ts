import { filterSuggestionByRule } from '../../utils';
import { getText } from '../../src/SuggestionList/helpers';
import { FilterDataParams, MultiSelectProps, Value } from './types';

export const filterData = ({
  data,
  filterValue,
  filterRule,
  value,
  textField,
}: FilterDataParams): MultiSelectProps['data'] => {
  if (!data) return undefined;
  // убираем все значения, которые уже выбраны и фильтруем по filterValue
  const filteredData = (data as Value[])
    .filter(item => !(value as Value[]).find(val => (getText(item, textField) === getText(val, textField))))
    .filter(item => filterSuggestionByRule(getText(item, textField), filterValue || '', filterRule));

  if (filteredData.length === 0) return undefined;

  return filteredData as Value[];
};

export const getValue = (valueProp: Value[] | null | undefined, valueState: Value[]): Value[] => {
  if (valueProp === undefined) return valueState;

  if (valueProp === null) return [];

  return valueProp;
};
