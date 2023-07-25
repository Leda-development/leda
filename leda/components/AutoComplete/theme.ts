/* eslint-disable key-spacing */
import { defaultSuggestionListTheme } from '../../src/SuggestionList/theme';

export const defaultAutoCompleteTheme = {
  ...defaultSuggestionListTheme,
  closeIcon:                  'ld-input-icon',
  input:                      'ld-input-element',
  inputWrapper:               'ld-input-element-wrapper',
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
