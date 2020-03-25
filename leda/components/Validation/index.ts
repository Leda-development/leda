import * as helpers from '../../form/helpers';

// attach forms to window
if (!helpers.getForms()) {
  helpers.setForms([]);
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
