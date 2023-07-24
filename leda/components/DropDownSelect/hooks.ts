import * as React from 'react';
import { getText } from '../../src/SuggestionList/helpers';
import { useElement } from '../../utils';
import { Div } from '../Div';
import { Span } from '../Span';
import { filterData } from './helpers';
import {
  CustomElements, DropDownSelectProps, DropDownSelectState, UseCustomElementsExtra, Value,
} from './types';

export const useSyncedHighlightedValue = ({
  filterValue,
  shouldFilterValues,
  mergeState,
  data,
}: {
  filterValue: string | null,
  shouldFilterValues: boolean,
  mergeState: React.Dispatch<Partial<DropDownSelectState>>,
  data: DropDownSelectProps['data'],
}): void => {
  React.useEffect((): void => {
    if (shouldFilterValues && data && filterValue) {
      const filteredData = filterData({ data, filterValue }) || [];
      // обновляем highlighted value
      mergeState({
        highlightedSuggestion: getText(filteredData[0]) || null,
      });
    }
  }, [data, shouldFilterValues, filterValue, mergeState]);
};

export const useCustomElements = (
  props: DropDownSelectProps,
  state: DropDownSelectState,
  { inputSuggestion }: UseCustomElementsExtra,
): CustomElements => {
  const {
    wrapperRender, inputRender, iconRender,
  } = props;

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender,
    props,
    state,
  );

  const Input = useElement(
    'Input',
    'input' as unknown as React.FC<React.InputHTMLAttributes<HTMLInputElement>>,
    inputRender,
    {
      ...props,
      suggestion: inputSuggestion,
    },
    state,
  );

  return {
    Wrapper,
    Input,
  };
};

export const useCorrectSuggestionsInControlledMode = ({
  mergeState,
  valueProp,
}: {
  mergeState: React.Dispatch<Partial<DropDownSelectState>>,
  valueProp?: Value,
}) => {
  React.useEffect(() => {
    if (valueProp !== undefined) {
      mergeState({
        highlightedSuggestion: valueProp,
        selectedSuggestion: valueProp,
      });
    }
  }, [mergeState, valueProp]);
};
