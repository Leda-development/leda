import * as React from 'react';
import { CustomRender, CustomEventHandler, SomeObject } from '../../commonTypes';
import { LiProps } from '../../components/Li';
import { UlProps } from '../../components/Ul';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';

export type Value = SomeObject | string | number | null;

export interface SuggestionTarget {
  target: {
    value: SomeObject | string | number,
  },
}

export interface SuggestionListProps {
  data?: Value[],
  highlightedSuggestion?: Value,
  selectedSuggestion?: Value,
  isLoading?: boolean,
  isOpen: boolean,
  itemRender?: CustomRender<SuggestionItemProps, {}, LiProps>,
  listRender?: CustomRender<SuggestionListProps, {}, UlProps>,
  noSuggestionsRender?: CustomRender<SuggestionListProps, {}, NoSuggestionsProps>,
  onClick?: CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>,
  placeholder?: string,
  shouldAllowEmpty: boolean,
  textField?: string,
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.suggestionList],
  value: string | number | SomeObject | null | (string[] | number[] | SomeObject[]),
}

export interface SuggestionItemProps {
  isScrollTarget: boolean,
  isPlaceholder: boolean,
  isHighlighted?: boolean,
  isSelected?: boolean,
  item: string | number | SomeObject | null,
  itemRender?: CustomRender<SuggestionItemProps, {}, LiProps>,
  onClick?: CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>,
  suggestionRef: React.MutableRefObject<HTMLElement | null>,
  text: string | number,
  textField?: string,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.suggestionList],
}

export interface NoSuggestionsProps {
  className?: string,
}
