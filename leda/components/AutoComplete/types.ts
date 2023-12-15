import type * as React from 'react';
import type { FILTER_RULES } from '../../utils';
import type { ValidationProps } from '../Validation/types';
import type { CustomRender, Values } from '../../commonTypes';
import type { SuggestionListProps } from '../../src/SuggestionList/types';
import type { UlProps } from '../Ul';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { COMPONENTS_NAMESPACES } from '../../constants';

/** DataObject contains strings to show in the dropdown list
 * The object must contain a property with a string value
 * The property's name is passed through textField
*/
export interface DataObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [textField: string]: any,
}

export type Suggestion = DataObject | string | number | null;

export enum ChangeMethod {
  /** typing */
  type = 'type',
  /** clicking */
  click = 'click',
  /** pressing Enter key */
  enter = 'enter',
  /** triggering programmatically */
  trigger = 'trigger',
  /** pressing Up key */
  up = 'up',
  /** pressing Down key */
  down = 'down',
  /** pressing Escape */
  escape = 'escape',
  /** clicking clear button in the input */
  clear = 'clear',
  /** resetting through Vlidation APIs */
  reset = 'reset',
}

export interface KeyboardChangeEvent<T extends Suggestion> extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    value: string,
    method: ChangeMethod.enter | ChangeMethod.down | ChangeMethod.up,
    name?: string,
    suggestion?: T,
  },
}

export interface MouseChangeEvent<T extends Suggestion> extends React.MouseEvent<HTMLElement | SVGElement> {
  component: {
    value: string,
    method: ChangeMethod.click | ChangeMethod.clear,
    name?: string,
    suggestion?: T,
  },
}

export interface TypeChangeEvent<T extends Suggestion> extends React.ChangeEvent<HTMLInputElement> {
  component: {
    value: string,
    method: ChangeMethod.type,
    name?: string,
    suggestion?: T,
  },
}

export interface TriggerChangeEvent<T extends Suggestion> extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    method: ChangeMethod.trigger,
    name?: string,
    suggestion?: T,
  },
}

export interface ResetChangeEvent<T extends Suggestion> {
  component: {
    value: string,
    method: ChangeMethod.reset,
    name?: string,
    suggestion?: T,
  },
}

export type ChangeEvent<T extends Suggestion = Suggestion> = TypeChangeEvent<T> | KeyboardChangeEvent<T> | MouseChangeEvent<T> | TriggerChangeEvent<T> | ResetChangeEvent<T>;

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
  },
}

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    isValid: boolean,
    name?: string,
    value: string,
  },
}

export interface AutoCompleteMessages {
  nothingFound?: React.ReactNode,
}

export interface AutoCompleteProps<T extends Suggestion = Suggestion> extends ValidationProps {
  /** Browser autofill, off is the default value. Works as HTML autoComplete attribute */
  autoComplete?: string,
  /** ... */
  compareObjectsBy?: T extends object ? ((suggestionListItem: T) => unknown) | string : never,
  /** Data for the dropdown list */
  data: T[],
  /** In case you want to disable component  */
  isDisabled?: boolean,
  /** Search mode, smart is default, looks for one or several words regardless of their order, can be slow if data has thousands of elements or more */
  filterRule?: 'smart' | 'startsWith' | 'includes',
  /** How to group suggestions */
  groupBy?: (option: T) => string | undefined,
  /** Whether or not to show a clear button inside the input element. Default is false */
  hasClearButton?: boolean,
  /** Display a loading icon inside the dropdown */
  isLoading?: boolean,
  /** Control the dropdown state */
  isOpen?: boolean,
  /** Suggestion item customizator */
  itemRender?: SuggestionListProps['itemRender'],
  /** Input field customizator */
  inputRender?: CustomRender<AutoCompleteProps, AutoCompleteState, React.InputHTMLAttributes<HTMLInputElement>>,
  /** Required or not */
  isRequired?: boolean,
  /** Dropdown list customizator */
  listRender?: CustomRender<SuggestionListProps, Record<string, never>, UlProps>,
  /** The minimal number of symbols that trigger the dropdown opening */
  minSearchLength?: number,
  /** Component name */
  name?: string,
  /** Customize component texts */
  messages?: AutoCompleteMessages,
  /** No suggetions label customizator */
  noSuggestionsRender?: SuggestionListProps['noSuggestionsRender'],
  /** Blur handler */
  onBlur?: (event: BlurEvent) => void,
  /** Change handler */
  onChange: (event: ChangeEvent<T>) => void,
  /** Focus handler */
  onFocus?: (event: FocusEvent) => void,
  /** Placeholder */
  placeholder?: string,
  /** If true it puts the last correct (present in data) value into the input field or clears it. It is triggered by Blur event */
  shouldCorrectValue?: boolean,
  /** Show all data elements regardless of what is in the input field */
  shouldShowAllSuggestions?: boolean,
  /** DataObject fields to search */
  searchFields?: string[],
  /** Suggestions sorting */
  sortSuggestions?: (a: T, b: T) => number,
  /** textField is mandatory if data is an array of objects, textField specifies which object's field is used to get dropdown item text value.
   * It takes no effect if data is an array of strings
   * */
  textField?: T extends object ? string : never,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.autoComplete],
  /** Value */
  value?: string | null,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface AutoCompleteState {
  highlightedSuggestion: Suggestion,
  isFocused: boolean,
  lastCorrectValue: string,
  selectedSuggestion: Suggestion,
  stateValue: string,
}

export interface SuggestionsVal {
  data: Suggestion[],
  textField?: string,
  value?: string | null,
  filterRule?: Values<typeof FILTER_RULES>,
  isOpen?: boolean,
  minSearchLength?: number,
  shouldShowAllSuggestions?: boolean,
  searchFields?: string[],
}
