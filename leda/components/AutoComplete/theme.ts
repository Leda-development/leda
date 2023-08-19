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
  wrapper:                    'ld-autocomplete-wrapper',
};
