import {
  isFunction, isString, isRegExp,
} from 'lodash';
import { PREDEFINED_VALIDATORS } from '../components/Validation/predefinedValidators';
import * as Types from './types';
import * as constants from './constants';

// eslint-disable-next-line arrow-body-style
export const getForms = (): Types.Form[] => {
  return window[constants.formsIdentifier as never] as never ?? [];
};

export const setForms = (forms: Types.Form[]): void => {
  window[constants.formsIdentifier as never] = forms as never;
};

const getForm = (name: string): Types.Form | undefined => {
  const forms = getForms();
  return forms.find(({
    name: formName,
  }) => name === formName);
};

const removeForm = (name: string): Types.Form | undefined => {
  const oldForm = getForm(name);
  const oldForms = getForms();
  const newForms = oldForms.filter((form) => form.name !== name);
  setForms(newForms);
  return oldForm;
};

const getFormFields = (formName: string): Types.Field[] => getForm(formName)?.fields ?? [];

const pickField = (
  fields: Types.Field[], fieldName: string,
): Types.Field | undefined => fields.find((formField: Types.Field) => fieldName === formField.name);

export const getField = (formName: string, fieldName: string): Types.Field | undefined => {
  const fields = getFormFields(formName);
  return pickField(fields, fieldName);
};

export const getFields = (formName: string, fieldNames?: string[]): Types.Field[] => {
  const fields = getFormFields(formName);
  if (fieldNames == null) {
    return fields;
  }
  return fieldNames.reduce<Types.Field[]>((accumulator, fieldName: string) => {
    const field = pickField(fields, fieldName);
    if (field) {
      accumulator.push(field);
    }
    return accumulator;
  }, []);
};

export const removeField = (formName: string, fieldName: string): Types.Field[] => {
  const fields = getFormFields(formName);
  const fieldKeys = fields.reduce<number[]>((accumulator, field, index) => {
    if (field.name === fieldName) {
      accumulator.push(index);
    }
    return accumulator;
  }, []);
  const removedFields: Types.Field[] = [];
  fieldKeys.forEach((key, index) => {
    removedFields.push(...fields.splice(key - index, 1));
  });
  return removedFields;
};

export const removeFields = (formName: string, fieldNames?: string[]): Types.Field[] => {
  const removedFields: Types.Field[] = [];
  if (fieldNames == null) {
    removedFields.push(...removeForm(formName)?.fields ?? []);
  } else {
    fieldNames.forEach((fieldName: string) => {
      removedFields.push(...removeField(formName, fieldName));
    });
  }
  return removedFields;
};

export const unifyValidatorWrapper = (validatorWrapper: Types.ValidatorWrapper): Types.UnifiedValidatorWrapper => {
  const {
    validator,
  } = validatorWrapper;
  const unifiedValidatorWrapper: Types.UnifiedValidatorWrapper = {
    validate: () => true,
  };
  if (Array.isArray(validator)) {
    unifiedValidatorWrapper.validate = (value) => validator.every((element) => {
      const validate = unifyValidatorWrapper({
        validator: element,
      });
      return validate.validate(value);
    });
  } else if (isFunction(validator)) {
    unifiedValidatorWrapper.validate = validator;
  } else if (isRegExp(validator)) {
    unifiedValidatorWrapper.validate = (value: string) => value.match(validator) != null;
  } else if (isString(validator)) {
    const predefinedValidator = PREDEFINED_VALIDATORS[validator];
    unifiedValidatorWrapper.validate = predefinedValidator.validator;
    if (validatorWrapper.invalidMessage == null && predefinedValidator.invalidMessage) {
      unifiedValidatorWrapper.invalidMessage = predefinedValidator.invalidMessage;
    }
  }
  if (unifiedValidatorWrapper.invalidMessage == null && validatorWrapper.invalidMessage) {
    unifiedValidatorWrapper.invalidMessage = validatorWrapper.invalidMessage;
  }
  return unifiedValidatorWrapper;
};
