/* eslint-disable arrow-body-style */
/* eslint-disable no-console */

import { isString } from 'lodash';
import * as helpers from './helpers';
import * as types from './types';

const getFormFieldHelpers = (formName: string, fieldName: string): types.FormHelpers => {
  const getField = () => helpers.getField(formName, fieldName);
  return {
    get: getField,
    reset: () => {
      const field = getField();
      try {
        field?.reset();
      } catch (error) {
        console.log(error);
        return error;
      }
      return true;
    },
    validate: (validator?: object) => {
      // TODO validation
      const field = getField();
      return helpers.validate(field, validator);
    },
  };
};

const getFormFieldsHelpers = (formName: string, fieldNames?: string[]): types.FormHelpers => {
  const getFields = () => helpers.getFields(formName, fieldNames);
  return {
    get: getFields,
    reset: () => {
      const fields = getFields();
      try {
        fields.forEach((field) => {
          field?.reset();
        });
      } catch (error) {
        console.log(error);
        return error;
      }
      return true;
    },
    validate: (validator?: object) => {
      // TODO validation
      const fields = getFields();
      return fields.every((field?: types.Field) => {
        return helpers.validate(field, validator);
      });
    },
  };
};

const form = (formName: string, fieldPick?: string | string[]) => {
  if (isString(fieldPick)) {
    return getFormFieldHelpers(formName, fieldPick);
  }
  return getFormFieldsHelpers(formName, fieldPick);
};

export {
  form,
};
