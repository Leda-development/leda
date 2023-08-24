'use client';

import * as React from 'react';
import { isString, isNil } from 'lodash';
import { useElement } from '../../utils';
import {
  addField, getValidators, removeField, updateField, validate,
} from './helpers';
import { InvalidMessage as DefaultInvalidMessage } from './InvalidMessage';
import type {
  ValidationProps, ValidationState, ValidationExtra, ValidationResult,
} from './types';
import { defaultValidationTheme } from './theme';

export const useValidation = <P extends ValidationProps, S extends ValidationState>(
  props: P, state: S, extra: ValidationExtra,
): ValidationResult => {
  const {
    form,
    name,
    isRequired = false,
    isValid: isValidProp,
    shouldValidateUnmounted,
    validator,
    invalidMessage,
    requiredMessage,
    invalidMessageRender,
  } = props;

  const value = props.value === undefined && state
    ? state.value
    : props.value;

  const [isValid, setIsValid] = React.useState<boolean>(true);

  const [messages, setMessages] = React.useState<string[] | undefined>([]);

  // add/remove the field using mount/unmount
  React.useEffect((): (() => void) | void => {
    if (isString(form) && name) {
      const validators = getValidators(validator, invalidMessage);

      addField({
        formName: form,
        fieldName: name,
        value,
        setIsValid,
        setMessages,
        shouldValidateUnmounted,
        validators,
        isRequired,
        requiredMessage,
        reset: extra.reset,
      });

      return (): void => {
        removeField(form, name);

        setIsValid(true);
      };
    }

    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, name]);

  // update forms on every props change
  // required for correct validation
  React.useEffect(() => {
    if (form && name) {
      const validators = getValidators(validator, invalidMessage);

      updateField({
        formName: form,
        fieldName: name,
        value,
        isValidProp,
        isRequired,
        validators,
        shouldValidateUnmounted,
        requiredMessage,
      });
    }
  }, [form, isRequired, name, value, isValidProp, validator, invalidMessage, shouldValidateUnmounted, requiredMessage]);

  // user gets this function to validate the current field
  // it can be called in a handler, e.g. in onBlur
  const validateCurrent = React.useCallback((val?: unknown) => (isNil(isValidProp) ? validate(form, name, val) : isValidProp), [form, isValidProp, name]);

  const InvalidMessage = useElement(
    'InvalidMessage',
    DefaultInvalidMessage,
    invalidMessageRender,
    props,
    state,
  );

  const invalidMessageComponent = React.useMemo(() => {
    const message: React.FC<{}> = () => <InvalidMessage theme={defaultValidationTheme} isValid={isValid} messages={messages} />;
    message.displayName = 'InvalidMessageWrapper';

    return message;
  }, [isValid, messages]);

  // return a dummy if there is no form
  // this line cannot be moved higher in the file because of hooks rules
  if (!form) return { isValid: true, validateCurrent: () => true, InvalidMessage: invalidMessageComponent };

  return {
    isValid,
    validateCurrent,
    InvalidMessage: invalidMessageComponent,
  };
};
