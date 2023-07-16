import React from 'react';
import { Div } from '../Div';
import { PasswordEvaluationMessageProps } from './types';
import { getPasswordStrength, strengthLevelToCssClass } from './helpers';

export const PasswordEvaluationMessage = (props: PasswordEvaluationMessageProps) => {
  const {
    value, theme, minPasswordEvaluationLength, passwordEvaluators,
  } = props;

  if (
    value === null
    || value.length < minPasswordEvaluationLength
  ) {
    return null;
  }

  const { strengthLevel, message } = getPasswordStrength(value, passwordEvaluators);

  return (
    <Div
      className={strengthLevelToCssClass({ theme, strengthLevel })}
    >
      {message}
    </Div>
  );
};
