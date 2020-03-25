import { defaultSuggestionListTheme } from '../../src/SuggestionList/theme';

/* eslint-disable key-spacing */
export const defaultMultiSelectTheme = {
  clearIcon:                 'multiselect-clear-icon',
  input:                     'multiselect-input',
  inputFocused:              'focused',
  inputWrapper:              'multiselect-input-wrapper',
  inputWrapperFocused:       'focused',
  inputWrapperDisabled:      'disabled',
  inputWrapperInvalid:       'danger',
  wrapper:                   'multiselect-wrapper',
  tagsContainer:             'multiselect-tags-container',
  ...defaultSuggestionListTheme,
};
/* eslint-enable key-spacing */
