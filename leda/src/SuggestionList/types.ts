import * as React from 'react';
import { CustomRender, CustomEventHandler, SomeObject } from '../../commonTypes';
import { DivProps } from '../../components/Div';
import { LiProps } from '../../components/Li';
import { UlProps } from '../../components/Ul';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { GlobalRenderField } from '../../components/LedaProvider/globalDefaultRenders';

export type Value = SomeObject | string | number | null;

export interface SuggestionTarget {
  target: {
    value: SomeObject | string | number | GroupedSomeObject,
  },
}

interface GeneralSuggestionProps {
  compareObjectsBy?: ((suggestionListItem: SomeObject) => any) | string,
  hasCheckBoxes?: boolean,
  highlightedSuggestion?: Value,
  selectedSuggestion?: Value,
  itemRender?: CustomRender<SuggestionItemProps, {}, LiProps>,
  onClick?: CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>,
  placeholder?: string,
  textField?: string,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.suggestionList],
  value: string | number | SomeObject | null | (string[] | number[] | SomeObject[] | GroupedSomeObject[]),
}

export interface SuggestionListProps extends GeneralSuggestionProps {
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement | null }>,
  canSelectAll?: boolean,
  canSelectGroup?: boolean,
  data?: Value[],
  groupLabelRender?: CustomRender<{}, {}, LiProps>,
  groupWrapperRender?: CustomRender<{}, {}, DivProps>,
  isLoading?: boolean,
  isOpen: boolean,
  listRender?: CustomRender<SuggestionListProps, {}, UlProps>,
  noSuggestionsRender?: CustomRender<SuggestionListProps, {}, NoSuggestionsProps>,
  resultedData: Value[] | GroupedSomeObject[],
  shouldAllowEmpty: boolean,
}

export interface SelectAllProps extends GeneralSuggestionProps {
  canSelectAll?: boolean,
  data?: Value[],
  suggestionRef: React.MutableRefObject<HTMLElement | null>,
  suggestions: (Value | GroupedSomeObject)[],
}

export interface GroupLabelProps extends GeneralSuggestionProps {
  canSelectGroup?: boolean,
  groupLabelRender?: CustomRender<{}, {}, LiProps>,
  suggestionRef: React.MutableRefObject<HTMLElement | null>,
  suggestionRenders: GlobalRenderField,
  suggestion: Value | GroupedSomeObject,
}

export interface SuggestionItemProps {
  hasCheckBoxes?: boolean,
  isChosen?: boolean,
  isPlaceholder: boolean,
  isHighlighted?: boolean,
  isScrollTarget: boolean,
  isSelected?: boolean,
  isSemi?: boolean,
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

export interface GroupedSomeObject {
  key: string,
  dataItems: SomeObject[],
  isSelected?: boolean,
}

export interface GetSuggestionItemProps {
  compareObjectsBy?: ((suggestionListItem: SomeObject) => any) | string,
  highlightedSuggestion?: Value,
  isGroupLabel?: boolean,
  placeholder?: string,
  selectedSuggestion?: Value,
  suggestion: Value | GroupedSomeObject,
  textField?: string,
}

export interface SuggestionItemComputedProps {
  isScrollTarget: boolean,
  isPlaceholder: boolean,
  isHighlighted?: boolean,
  isSelected?: boolean,
  item: string | number | SomeObject | null,
  key: string,
  text: string | number,
}
