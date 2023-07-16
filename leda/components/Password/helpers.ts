import { PasswordStrength } from './constants';
import { PasswordProps, PasswordEvaluator, StrengthLevelToCssClassProps, PasswordRule } from './types';
import { validate } from '../../validators';
import { ValidatorObject } from '../Validation/types';
import { isNil } from 'lodash';

export const transformToCase = (letter: string, letterCase: PasswordProps['letterCase']): string | never => {
  if (letterCase === 'lower') return letter.toLowerCase();

  if (letterCase === 'upper') return letter.toUpperCase();

  throw new Error('L.Password: letterCase prop must be \'lower\' or \'upper\'!');
};

export const getValue = (valueProp: string | null | undefined, valueState: string): string => {
  if (valueProp === undefined) return valueState;

  if (valueProp === null) {
    return '';
  }

  return valueProp;
};

export const strengthLevelToCssClass = (props: StrengthLevelToCssClassProps): string => {
  const { strengthLevel, theme } = props;
  if (strengthLevel === PasswordStrength.Strong) return theme.messageStrong;
  if (strengthLevel === PasswordStrength.Medium) return theme.messageMedium;
  if (strengthLevel === PasswordStrength.Low) return theme.messageWeak;
  throw new Error('L.Password: strengthLevelToCssClass didn\'t find a suitable strength level');
};

export const getIsPasswordOk = (value: string, evaluator: PasswordEvaluator['evaluator']): boolean => {
  if (evaluator instanceof RegExp) {
    return evaluator.test(value);
  }
  return evaluator(value);
};

export const getPasswordStrength = (value = '', passwordEvaluators?: PasswordEvaluator[]): { strengthLevel: PasswordStrength, message: string } => {
  if (passwordEvaluators) {
    const evaluationResult = (() => {
      // strongest to lowest
      const strengthLevels = Object.values(PasswordStrength).reverse();

      // find the highest strength level
      // for which the password passes the evaluation
      const maxAchievedLevel = strengthLevels
        .find((level) => passwordEvaluators
          .find((evaluatorObject) => {
            const { evaluator, strengthLevel } = evaluatorObject;
            if (strengthLevel === level) return getIsPasswordOk(value, evaluator);

            // wrong strength level, go further
            return false;
          }));

      return passwordEvaluators.find(({ strengthLevel }) => (strengthLevel === maxAchievedLevel));
    })();

    if (evaluationResult) {
      const { strengthLevel, evaluationMessage } = evaluationResult;
      return {
        strengthLevel,
        message: evaluationMessage,
      };
    }

    return {
      strengthLevel: PasswordStrength.Low,
      message: 'Weak password',
    };
  }

  if (value == null) {
    return {
      strengthLevel: PasswordStrength.Low,
      message: 'Weak password',
    };
  }

  if (validate.password(value)) {
    return {
      strengthLevel: PasswordStrength.Medium,
      message: 'Not so strong password',
    };
  }

  return {
    strengthLevel: PasswordStrength.Low,
    message: 'Weak password',
  };
};

export const rulesToValidators = (rules: PasswordRule[]): ValidatorObject[] => {
  return rules.map(({ rule }) => {
    return {
      validator: rule,
    }
  });
}; 

export const isValuePassingRule = (value: string | null, rule: RegExp | ((password: string) => boolean)): boolean => {
  if (isNil(value)) return false;

  if (rule instanceof RegExp) {
    return rule.test(value);
  }

  return rule(value);
}