import type * as React from 'react';
import type {
  CustomRender, CustomEventHandler, SomeObject,
} from '../../commonTypes';
import type { DivProps } from '../../components/Div';
import type { LiProps } from '../../components/Li';
import type { UlProps } from '../../components/Ul';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { SelectedState } from '../../components/MultiSelect/constants';

export type Value = SomeObject | string | number | null;

export interface SuggestionTarget {
  target: {
    value: SomeObject | string | number,
  },
}

export interface SuggestionListProps {
  boundingContainerRef?: React.RefObject<HTMLElement>,
  compareObjectsBy?: ((suggestionListItem: SomeObject) => unknown) | string,
  data?: Value[],
  groupBy?: (option: Value) => string | undefined,
  groupLabelRender?: CustomRender<object, Record<string, never>, LiProps>,
  groupWrapperRender?: CustomRender<object, Record<string, never>, DivProps>,
  highlightedSuggestion?: Value,
  selectedSuggestion?: Value | Value[],
  isLoading?: boolean,
  isOpen: boolean,
  itemRender?: CustomRender<SuggestionItemProps, Record<string, never>, SuggestionElementProps>,
  listRender?: CustomRender<SuggestionListProps, Record<string, never>, UlProps>,
  noSuggestionsText?: React.ReactNode,
  noSuggestionsRender?: CustomRender<SuggestionListProps, Record<string, never>, NoSuggestionsProps>,
  onClick?: CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>,
  placeholder?: string,
  selectAllItemRender?: CustomRender<Record<string, never>, Record<string, never>, Record<string, never>>,
  selectAllState?: SelectAllState,
  shouldAllowEmpty: boolean,
  textField?: string,
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.suggestionList],
  value: string | number | SomeObject | null | (string[] | number[] | SomeObject[]),
}

export interface SuggestionElementProps {
  children: React.ReactNode,
  className?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: CustomEventHandler<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: React.Ref<any>,
}

export interface SuggestionItemProps {
  isScrollTarget: boolean,
  isPlaceholder: boolean,
  isHighlighted?: boolean,
  isSelected?: boolean,
  isSelectAllItem?: boolean,
  selectAllItemRender?: SuggestionListProps['selectAllItemRender'],
  selectAllState?: SelectedState,
  canSelectAll?: boolean,
  item: string | number | SomeObject | null,
  itemRender?: CustomRender<SuggestionItemProps, Record<string, never>, SuggestionElementProps>,
  onClick?: CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>,
  suggestionRef: React.MutableRefObject<HTMLElement | null>,
  text: string | number,
  textField?: string,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.suggestionList],
}

export interface NoSuggestionsProps {
  noSuggestionsText?: React.ReactNode,
  className?: string,
}

export interface GroupedSomeObject {
  key: string,
  dataItems: SomeObject[],
}

export interface GetSuggestionItemProps {
  compareObjectsBy?: ((suggestionListItem: SomeObject) => unknown) | string,
  highlightedSuggestion?: Value,
  placeholder?: string,
  selectAllState?: SelectedState,
  selectedSuggestion?: Value | Value[],
  suggestion: Value,
  textField?: string,
}

export interface SuggestionItemComputedProps {
  isHighlighted?: boolean,
  isPlaceholder: boolean,
  isScrollTarget: boolean,
  isSelectAllItem?: boolean,
  isSelected?: boolean,
  selectAllState?: SelectedState,
  item: string | number | SomeObject | null,
  key: string,
  text: string | number,
}

export type SelectAllState = SelectedState | undefined;
