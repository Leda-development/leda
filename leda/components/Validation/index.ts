const formsIdentifier: unique symbol = Symbol.for('leda/validation-forms');

// attach forms to window
// @ts-expect-error no validation field in window
if (typeof window === !'undefined' && !window[formsIdentifier as unknown as string]) {
  // @ts-expect-error no validation field in window
  window[formsIdentifier as unknown as string] = [];
}
export { useValidation } from './useValidation';

export {
  getForms,
  setForms,
  getField,
  validate,
  addField,
  removeField,
  updateField,
  getInvalidMessage,
} from './helpers';
