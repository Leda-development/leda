/* eslint-disable key-spacing */
import { defaultSuggestionListTheme } from '../../src/SuggestionList/theme';

export const defaultAutoCompleteTheme = {
  ...defaultSuggestionListTheme,
  closeIcon:                  'ld-autocomplete-clear-icon',
  input:                      'ld-autocomplete-input',
  inputWrapper:               'ld-autocomplete-input-wrapper',
  inputWrapperDisabled:       'ld-disabled',
  inputWrapperFocused:        'ld-focused',
  inputWrapperInvalid:        'ld-danger',
  inputWrapperRequired:       'ld-required',
  suggestion:                 'ld-suggestion-item',
  suggestionHighlighted:      'ld-highlighted',
  suggestionsContainer:       'ld-suggestion-wrapper',
  suggestionsList:            'ld-suggestion-list',
  wrapper:                    'ld-autocomplete-wrapper',
};
