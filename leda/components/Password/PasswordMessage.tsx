import React from 'react';
import { Div } from '../Div';
import { PasswordMessageProps } from './types';
import { getPasswordStrength, strengthLevelToCssClass } from './helpers';

export const PasswordMessage = (props: PasswordMessageProps) => {
  const {
    value, theme, minPasswordEvaluationLength, passwordEvaluators, passwordRules,
  } = props;

  if (
    value === null
    || value.length < minPasswordEvaluationLength
  ) {
    return (
      <Div
        className={theme?.messageDefault}
      >
        { passwordRules ?? 'Use at least 8 latin lower- and uppercase letters and numbers' }
      </Div>
    );
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
