/* eslint-disable arrow-body-style */

import { isArray, isObject } from 'lodash';

import * as types from './types';

export const getForm = (name: string): types.Form | undefined => {
  // @ts-ignore
  const forms: types.Form[] = window[Symbol.for('leda/validation-forms')] || [];
  return forms.find(({
    name: formName,
  }) => {
    return name === formName;
  });
};


const getFormFields = (formName: string): types.Field[] => {
  return getForm(formName)?.fields ?? [];
};

export const pickField = (fields: types.Field[], fieldName: string): types.Field | undefined => {
  return fields.find((formField: types.Field) => {
    return fieldName === formField.name;
  });
};

export const getField = (formName: string, fieldName: string): types.Field | undefined => {
  const fields = getFormFields(formName);
  return pickField(fields, fieldName);
};

export const getFields = (formName: string, fieldNames?: string[]): (types.Field | undefined)[] => {
  const fields = getFormFields(formName);
  if (fieldNames) {
    return fieldNames.map((fieldName: string) => {
      return pickField(fields, fieldName);
    });
  }
  return fields;
};

export const validate = (field?: types.Field, validator?: any) => {
  // TODO validation
  if (!isObject(field)) return null;
  if (field.isRequired && (field.value ?? false)) return false;
  if (isArray(field.validators)) {
    return field.validators.every((fieldValidator: any) => {
      return fieldValidator(field.value);
    });
  }
  return validator(field.value);
};
