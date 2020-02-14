import {
  Form, Field, PredefinedValidator,
} from '../components/Validation/types';

export {
  Form, Field,
};

export interface UnifiedValidator {
  (value: any): boolean,
}

export type Validator = UnifiedValidator | PredefinedValidator | RegExp;

export type InvalidMessage = string;

export interface UnifiedValidatorWrapper {
  validate: UnifiedValidator,
  invalidMessage?: InvalidMessage,
}

export interface ValidatorWrapper {
  validator: Validator | Validator[],
  invalidMessage?: string,
}

export interface FormFieldHelpers {
  get: () => Field | undefined,
  reset: () => boolean,
  validate: (warpedValidator?: ValidatorWrapper | ValidatorWrapper[]) => Field | undefined,
}

export interface FormFieldsHelpers {
  get: () => Field[],
  reset: () => boolean,
  validate: () => Field[],
}
