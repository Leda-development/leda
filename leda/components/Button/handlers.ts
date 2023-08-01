import * as React from 'react';
import { isFunction, intersection } from 'lodash';
import { getForms, validate } from '../Validation';
import { ButtonProps } from './types';
import { fromFormArraytoFormObject } from './helpers';

export const createClickHandler = (props: ButtonProps) => (ev: React.MouseEvent<HTMLButtonElement>): void => {
  const {
    onClick, onValidationFail, isDisabled, isLoading, scrollDelay,
    scrollOffset, form: formProp, shouldScrollToInvalidFields,
  } = props;

  if (isDisabled || isLoading) return;

  // if the button is connected to a form
  if (formProp) {
    const buttonFormNames = Array.isArray(formProp) ? formProp : [formProp];
    const formNames = getForms().map((form) => form.name);
    const validButtonFormNames = intersection(formNames, buttonFormNames);

    const isEachFormValid = validButtonFormNames
      .map((currentForm) => validate(currentForm)) // validate all forms
      .every((item) => item); // tell me if all of them are valid

    if (!isEachFormValid) {
      const invalidForms = getForms()
        .filter((currentForm) => validButtonFormNames.includes(currentForm.name))
        .filter((currentForm) => currentForm.fields.some((field) => !field.isValid));

      if (isFunction(onValidationFail)) {
        onValidationFail({ ...ev, invalidForms });
      }

      if (shouldScrollToInvalidFields && invalidForms.length > 0) {
        const firstInvalidFormName = invalidForms[0].name;
        // data-form form is used for ButtonGroup
        // don't use [form=""] as it will grab buttons too
        const formElements = document.querySelectorAll(`input[form="${firstInvalidFormName}"], [data-form="${firstInvalidFormName}"`);
        // waiting for data to update
        setTimeout(() => {
          const invalidElement = Array.from(formElements).find((element) => element.getAttribute('aria-invalid') === 'true');

          if (invalidElement) {
            const invalidElementRect = invalidElement.getBoundingClientRect();
            const isIE = !!(document as any).documentMode || /Edge/.test(navigator.userAgent);
            const offset = invalidElementRect.top - (scrollOffset ?? 0);
            if (isIE) {
              window.scrollBy(0, offset);
            } else {
              window.scrollBy({
                top: offset,
                behavior: 'smooth',
              });
            }
          }
        }, scrollDelay ?? 0);
      }

      return;
    }
  }

  if (isFunction(onClick)) {
    if (!formProp) {
      onClick(ev);
      return;
    }

    const forms = getForms(formProp);
    const formsObject = fromFormArraytoFormObject(forms);

    const customEvent = {
      ...ev,
      forms,
      form: formsObject,
    };

    onClick(customEvent);
  }
};
