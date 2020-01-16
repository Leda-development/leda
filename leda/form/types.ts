import {
  Form, Field,
} from '../components/Validation/types';

export {
  Form, Field,
};

export interface FormHelpers {
  get: () => undefined | Field | (undefined | Field)[],
  reset: () => boolean,
  [key: string]: () => unknown,
}
