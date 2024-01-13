import {
  isArray, isFunction, isNil, isString, isRegExp, isObject,
} from 'lodash';
import { PREDEFINED_VALIDATORS } from './predefinedValidators';
import type {
  AddFieldData,
  Field,
  Form, FormGetField, NormalizedValidatorObject,
  PredefinedValidator, RemoveFieldOptions, UpdateFieldData,
  Validator,
  ValidatorObject,
} from './types';
import { checkIsFilled } from '../../form/helpers';

export const getForms = (formName?: string | string[]): Form[] => {
  // @ts-expect-error no validation field in window
  const forms: Form[] = window[Symbol.for('leda/validation-forms')] || [];

  if (isString(formName)) {
    const form = forms.find((currentForm: Form) => currentForm.name === formName);
    return form ? [form] : [];
  }

  if (isArray(formName)) {
    return forms.filter((form: Form) => formName.includes(form.name));
  }

  // get all available forms
  return forms;
};

export const setForms = (newForms: Form[]): void => {
  // @ts-expect-error no validation field in window
  window[Symbol.for('leda/validation-forms')] = newForms;
};

export const getField = (formName?: string, fieldName?: string): Field | undefined => {
  if (!formName || !fieldName) return undefined;

  const forms = getForms();

  const currentForm = forms.find((form) => form.name === formName);

  if (!currentForm) return undefined;

  const currentField = currentForm.fields.find((field) => field.name === fieldName);

  if (!currentField) return undefined;

  return currentField;
};

export const validate = (formName: string | undefined, fieldName?: string, externalValue?: unknown): boolean => {
  const forms: Form[] = getForms();

  const currentForm = forms.find((form) => form.name === formName);

  if (!currentForm) return false;

  if (!fieldName) {
    return currentForm.fields.map((field) => validate(formName, field.name)).every((result) => result);
  }

  const currentField = getField(formName, fieldName);

  if (!currentField) return false;

  const invalidMessages: string[] = [];

  let isValid = true;

  const value = externalValue === undefined ? currentField.value : externalValue;

  const isFilled = checkIsFilled(value);

  // do not check validators if the field is mandatory and not filled in
  if (
    (currentField.isRequired && !isFilled)
    // checkboxes
    || (currentField.isRequired && (value === false))
  ) {
    isValid = false;

    if (currentField.requiredMessage) invalidMessages.push(currentField.requiredMessage);
  } else if (isFilled) {
    currentField.validators.forEach((validator) => {
      // if validator has the form { validator, invalidMessage } - retrieve the error message
      if (isObject(validator) && 'validator' in validator) {
        const result = validator.validator(value);

        if (!result) {
          if (validator.invalidMessage) invalidMessages.push(validator.invalidMessage);

          isValid = false;
        }
      }
    });
  }

  const newForms = [...forms.map((form: Form): Form => {
    if (form.name !== formName) return form;

    const newFields = currentForm.fields.map((field) => {
      if (field.name !== fieldName) return field;

      return {
        ...field, isValid, invalidMessages, value,
      };
    });

    return { name: formName, fields: newFields };
  })];

  setForms(newForms);

  currentField.setIsValid(isValid);

  currentField.setMessages(invalidMessages);

  return isValid;
};

export const addField = ({
  formName,
  fieldName,
  value,
  setIsValid,
  setMessages,
  shouldValidateUnmounted = false,
  validators,
  isRequired = false,
  requiredMessage,
  reset,
  suggestion,
}: AddFieldData): void => {
  const forms: Form[] = getForms();

  const currentForm = forms.find((form) => form.name === formName);

  if (!currentForm) {
    const newForms = [...forms, {
      name: formName,
      fields: [{
        name: fieldName,
        isValid: true,
        value,
        setIsValid,
        setMessages,
        shouldValidateUnmounted,
        validators,
        isRequired,
        requiredMessage,
        reset,
        suggestion,
      }],
    }];

    setForms(newForms);

    return;
  }

  const currentField = currentForm.fields.find((field) => field.name === fieldName);

  if (!currentField) {
    const newForms = [...forms.map((form: Form): Form => {
      if (form.name !== formName) return form;

      const newFields = [...currentForm.fields, {
        name: fieldName,
        isValid: true,
        setIsValid,
        setMessages,
        value,
        shouldValidateUnmounted,
        validators,
        isRequired,
        requiredMessage,
        reset,
        suggestion,
      }];

      return { name: formName, fields: newFields };
    })];

    setForms(newForms);

    return;
  }

  if (currentField.shouldValidateUnmounted) {
    const newForms = [...forms.map((form: Form): Form => {
      if (form.name !== formName) return form;

      const newFields = [...currentForm.fields.map((field) => {
        if (field.name !== fieldName) return field;

        return { ...field, setIsValid };
      })];

      return { name: formName, fields: newFields };
    })];

    setForms(newForms);
  }
};

export const removeField = (formName: string, fieldName: string, options: RemoveFieldOptions = {}): void => {
  const { shouldRemoveUnmounted } = options;

  const forms: Form[] = getForms();

  const currentForm = forms.find((form) => form.name === formName);

  if (!currentForm) {
    return;
  }

  const currentField = currentForm.fields.find((field) => field.name === fieldName);

  if (!currentField) {
    return;
  }

  if (currentField.shouldValidateUnmounted && shouldRemoveUnmounted !== true) {
    const newForms = [...forms.map((form: Form): Form => {
      if (form.name !== formName) return form;

      const newFields = [...currentForm.fields.map((field) => {
        if (field.name !== fieldName) return field;
        // stub for unmounted component
        return { ...field, setIsValid: () => {} };
      })];

      return { name: formName, fields: newFields };
    })];

    setForms(newForms);

    return;
  }

  const newForms = [...forms.map((form: Form): Form => {
    if (form.name !== formName) return form;

    const newFields = currentForm.fields.filter((field) => field.name !== fieldName);

    return { name: formName, fields: newFields };
  })];

  setForms(newForms.filter((form) => form.fields.length !== 0));
};

export const removeForm = (formName: string): void => {
  const forms: Form[] = getForms();

  const currentForm = forms.find((form) => form.name === formName);

  if (!currentForm) {
    return;
  }

  setForms(forms.filter((form) => (form.name !== formName)));
};

export const updateField = ({
  formName,
  fieldName,
  value,
  isValidProp,
  isRequired = false,
  requiredMessage,
  shouldValidateUnmounted = false,
  suggestion,
  validators,
}: UpdateFieldData): void => {
  const forms: Form[] = getForms();

  const currentForm = forms.find((form) => form.name === formName);

  if (!currentForm) {
    return;
  }

  const currentField = currentForm.fields.find((field) => field.name === fieldName);

  if (!currentField) {
    return;
  }

  const isValid = (() => {
    // if validation is controlled
    if (!isNil(isValidProp)) return isValidProp;
    // if the value has changed - remove invalid state
    if (value !== currentField.value) return true;
    // if the field mandatoryity has changed - remove invalid state
    if (isRequired !== currentField.isRequired) return true;
    // do nothing
    return currentField.isValid;
  })();

  const invalidMessages = value !== currentField.value ? [] : currentField.invalidMessages;

  const newForms = [...forms.map((form: Form): Form => {
    if (form.name !== formName) return form;

    const newFields = currentForm.fields.map((field) => {
      if (field.name !== fieldName) return field;

      return {
        ...field,
        isValid,
        value,
        isRequired,
        requiredMessage,
        shouldValidateUnmounted,
        suggestion,
        validators,
      };
    });

    return { name: formName, fields: newFields };
  })];

  if (currentField.isValid !== isValid) {
    currentField.setIsValid(isValid);
  }
  // if invalidMessages changed or were removed (length === 0)
  if (currentField.invalidMessages !== invalidMessages && invalidMessages && invalidMessages.length !== 0) {
    currentField.setMessages(invalidMessages);
  }

  setForms(newForms);
};

export const getInvalidMessage = (formName?: string, fieldName?: string): string[] | undefined => {
  const forms: Form[] = getForms();

  const currentForm = forms.find((form) => form.name === formName);

  if (!currentForm) {
    return undefined;
  }

  const currentField = currentForm.fields.find((field) => field.name === fieldName);

  if (!currentField) {
    return undefined;
  }

  return currentField.invalidMessages;
};

export const getPredefinedValidator = (type: PredefinedValidator, customMessage?: string): NormalizedValidatorObject => {
  const predefinedValidator = PREDEFINED_VALIDATORS[type];

  if (!predefinedValidator) throw new Error('L.Validator: no such predefined validator');

  return customMessage ? { validator: predefinedValidator.validator, invalidMessage: customMessage } : predefinedValidator;
};

const getRegExpValidator = (validator: RegExp, invalidMessage?: string): NormalizedValidatorObject => {
  const testRegExp: Validator = (value) => !!value.match(validator);

  return { validator: testRegExp, invalidMessage };
};

const getArrayValidator = (
  validator: ValidatorObject[],
  customMessage?: string,
): NormalizedValidatorObject[] => validator
  .map((validatorItem) => {
    if (!isObject(validatorItem)) throw new Error(`L.Validation: type of validator ${JSON.stringify(validator)} is incorrect!`);
    // { function, message? }
    if (isFunction(validatorItem.validator)) {
      return { validator: validatorItem.validator, invalidMessage: validatorItem.invalidMessage };
    }

    // { predefinedValidator, message? }
    if (isString(validatorItem.validator)) {
      const predefinedValidator = getPredefinedValidator(validatorItem.validator as PredefinedValidator);

      return customMessage ? { validator: predefinedValidator.validator, invalidMessage: customMessage } : predefinedValidator;
    }

    // { regexp, message? }
    if (isRegExp(validatorItem.validator)) {
      return {
        validator: (value: string) => !!(value).match(validatorItem.validator as RegExp),
        invalidMessage: validatorItem.invalidMessage,
      };
    }

    throw new Error(`L.Validation: type of validator ${JSON.stringify(validator)} is incorrect!`);
  });

export const getValidators = (
  validator?: Validator | PredefinedValidator | RegExp | ValidatorObject[],
  invalidMessage?: string,
): NormalizedValidatorObject[] => {
  if (!validator) return [];

  if (isFunction(validator)) return [{ validator, invalidMessage }];

  if (isString(validator)) return [getPredefinedValidator(validator as PredefinedValidator, invalidMessage)];

  if (isRegExp(validator)) return [getRegExpValidator(validator, invalidMessage)];

  if (Array.isArray(validator)) return getArrayValidator(validator, invalidMessage);

  throw new Error(`L.Validation: type of validator ${JSON.stringify(validator)} is incorrect!`);
};

export const getFieldValidState = (formName: string, fieldName: string): FormGetField | undefined => {
  const rawField = getField(formName, fieldName);
  if (rawField == null) return undefined;

  const {
    name, value, validators, isRequired, suggestion,
  } = rawField;

  const isFilled = checkIsFilled(value);
  const isValid = (() => {
    if (isRequired && !isFilled) return false;
    return !validators.some((validator) => !validator.validator(value));
  })();

  return {
    name,
    value,
    isFilled,
    isRequired,
    isValid,
    suggestion,
  };
};
