import React from 'react';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  CustomEventHandler, CustomRender, SetState, SomeObject,
} from '../../commonTypes';
import { ValidationProps } from '../Validation/types';
import { FilterRules } from '../DropDownSelect/types';
import { SuggestionListProps, SuggestionTarget } from '../../src/SuggestionList/types';
import { DivProps } from '../Div';
import { TagProps } from '../Tags/types';

export type Value = SomeObject | string | number | null;

export type MultiSelectValue = Value[];

export interface MultiSelectComponent {
  <T extends MultiSelectValue | null | undefined>(props: MultiSelectProps<T>): React.ReactElement,
  displayName?: string,
}

export interface ClearEvent<T> extends React.MouseEvent {
  component: {
    deselectedValues: T[],
    selectedValue: undefined,
    name?: string,
    value: T,
  },
}

export interface MouseSelectEvent<T> extends React.MouseEvent {
  component: {
    deselectedValues?: T[],
    name?: string,
    selectedValue?: T,
    value: T[],
  },
}

export interface EnterSelectEvent<T> extends React.KeyboardEvent {
  component: {
    name?: string,
    deselectedValues: undefined,
    selectedValue: T,
    value: T[],
  },
}

export interface ResetEvent<T> {
  component: {
    deselectedValues: undefined,
    selectedValue: undefined,
    name?: string,
    value: T[],
  },
}

export interface BlurEvent<T = Value> extends React.FocusEvent<HTMLInputElement> {
  component: {
    isValid?: boolean,
    name?: string,
    value: T[],
  },
}

export interface EnterPressEvent<T = Value> extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: T[],
  },
}

export interface FocusEvent<T = Value> extends React.FocusEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: T[],
  },
}

export type ChangeEvent<T = Value> = MouseSelectEvent<T> | EnterSelectEvent<T> | ClearEvent<T> | ResetEvent<T>;

export interface MultiSelectProps<T extends MultiSelectValue | null | undefined = MultiSelectValue | null | undefined> extends ValidationProps {
  /** Browser autofill, off is the default value. Works as HTML autoComplete attribute */
  autoComplete?: string,
  /** Add "Select all" to the dropdown list */
  canSelectAll?: boolean,
  /** ... */
  compareObjectsBy?: T extends object ? ((suggestionListItems: SomeObject) => any) | string : never,
  /** Data for the dropdown list.
    * If data is an array of objects, use textField to specify which object's field should be used as text for the dropdown items
    * */
  data?: MultiSelectValue,
  /** Default value */
  defaultValue?: T,
  /** Search mode, smart is default, looks for one or several words regardless of their order, can be slow if data has thousands of elements or more */
  filterRule?: FilterRules,
  /** Grouping key */
  groupBy?: (option: Value) => string | undefined,
  /** Should show checkboxes in the dropdown list */
  hasCheckBoxes?: boolean,
  /** Whether or not to show a clear button inside the input element. Default is false */
  hasClearButton?: boolean,
  /** Input customizator */
  inputRender?: CustomRender<MultiSelectProps, MultiSelectState, React.InputHTMLAttributes<HTMLInputElement> & { ref?: React.Ref<HTMLInputElement | null>}>,
  /** Disabled state */
  isDisabled?: boolean,
  /** Display a loading icon inside the dropdown */
  isLoading?: boolean,
  /** Control opened state */
  isOpen?: boolean,
  /** Suggestion item customizator */
  itemRender?: SuggestionListProps['itemRender'],
  /** Suggestion list customizator */
  listRender?: SuggestionListProps['listRender'],
  /** Limit the number of selected elements. Reaching the limit stops displaying the dropdown */
  maxSelected?: number,
  /** Max number of elements shown separately as tags. After exceeding this number the elements will be grouped as "n values selected" */
  maxTags?: number,
  /** This will be shown when no suggestions are found */
  noSuggestionsText?: React.ReactNode,
  /** No suggestions test customizator */
  noSuggestionsRender?: any,
  /** Blur handler */
  onBlur?: (event: FocusEvent) => void,
  /** Change handler */
  onChange?: (event: ChangeEvent) => void,
  /** Focus handler */
  onFocus?: (event: FocusEvent) => void,
  /** Placeholder */
  placeholder?: string,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Select all text customizator */
  selectAllItemRender?: SuggestionListProps['selectAllItemRender'],
  /** Renders the component without an input field */
  shouldHideInput?: boolean,
  /** Suggestions do not disappear from the list on selection */
  shouldKeepSuggestions?: boolean,
  /** Selected values go first in the list */
  shouldSelectedGoFirst?: boolean,
  /** Sort dropdown list items */
  sortSuggestions?: (a: Value, b: Value) => number,
  /** Tags customizator */
  tagRender?: CustomRender<MultiSelectProps, MultiSelectState, TagProps>,
  /** Tags combined message customizator */
  tagsUnionRender?: CustomRender<MultiSelectProps, MultiSelectState, DivProps>,
  /** It is mandatory if data is an array of objects, textField specifies which object's field is used to get dropdown item text value.
   * No effect if data is an array of strings
   * */
  textField?: T extends object ? string : never,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.multiSelect],
  /** Value */
  value?: T,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<MultiSelectProps, MultiSelectState, DivProps>,
  /** _css-classes */
  [x: string]: unknown,
}

export interface MultiSelectState {
  filterValue: string,
  isFocused: boolean,
  value: MultiSelectValue,
}

export interface TagsContainerProps {
  children: React.ReactElement<TagProps>,
  hasClearButton?: boolean,
  onClearIconClick: React.MouseEventHandler<SVGElement>,
  onMouseDown: React.MouseEventHandler<HTMLElement>,
  onTagClick: CustomEventHandler<React.MouseEvent<SVGElement> & SuggestionTarget>,
  placeholder?: MultiSelectProps['placeholder'],
  shouldHideInput?: MultiSelectProps['shouldHideInput'],
  textField?: string,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.multiSelect],
  value: MultiSelectValue,
}

export interface FocusData {
  setFocused: SetState<boolean>,
  value: MultiSelectValue,
}

export interface BlurData {
  setFilterValue: SetState<string>,
  setFocused: SetState<boolean>,
  validateCurrent: () => boolean,
  value: MultiSelectValue,
}

export interface SelectData {
  data: MultiSelectProps['data'],
  setFilterValue: SetState<string>,
  setFocused: SetState<boolean>,
  setValue: SetState<MultiSelectValue>,
  value: MultiSelectValue,
}

export interface ClearData {
  setValue: SetState<MultiSelectValue>,
  value: MultiSelectValue,
}

export interface MouseDownData {
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
}

export interface FilterDataParams {
  compareObjectsBy: MultiSelectProps['compareObjectsBy'],
  data: MultiSelectProps['data'],
  filterRule?: FilterRules,
  filterValue: string,
  shouldKeepSuggestions?: boolean,
  textField?: string,
  value: MultiSelectValue,
}

export interface KeyDownData {
  filterValue: string,
  handleSelect: CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>,
  highlightedSuggestion: Value,
  setFocused: SetState<boolean>,
  setHighlightedSuggestion: SetState<Value>,
  value: MultiSelectValue,
}

export interface GetSortedSuggestionsProps {
  shouldSelectedGoFirst?: boolean,
  selectedSuggestions?: Value[],
  filteredData?: Value[],
  sortSuggestions: MultiSelectProps['sortSuggestions'],
}
