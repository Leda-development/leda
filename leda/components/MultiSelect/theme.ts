/* eslint-disable key-spacing */
import { defaultSuggestionListTheme } from '../../src/SuggestionList/theme';

export const defaultMultiSelectTheme = {
  checkBoxWrapper:           'ld-multiselect-checkbox-wrapper',
  checkBoxContainer:         'ld-multiselect-checkbox-container',
  checkBoxLabel:             'ld-multiselect-checkbox-label',
  clearIcon:                 'ld-multiselect-clear-icon',
  input:                     'ld-multiselect-input',
  inputWrapper:              'ld-multiselect-input-wrapper',
  inputWrapperDisabled:      'ld-disabled',
  inputWrapperFocused:       'ld-focused',
  inputWrapperInvalid:       'ld-danger',
  inputWrapperRequired:      'ld-required',
  placeholder:               'ld-multiselect-placeholder',
  tagsContainer:             'ld-multiselect-tags-container',
  tagsUnion:                 'ld-multiselect-tags-union',
  wrapper:                   'ld-multiselect-wrapper',
  /** SuggestionList theme */
  ...defaultSuggestionListTheme,
};
