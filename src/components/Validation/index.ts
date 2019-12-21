import { Form } from './types';

const formsIdentifier: symbol = Symbol.for('leda/validation-forms');

// attach forms to window
// @ts-ignore
if (!(window)[formsIdentifier]) {
  // @ts-ignore
  window[formsIdentifier] = [];
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
