import React from 'react';
import { Div } from '../Div';
import { PasswordRulesMessageProps } from './types';
import { isValuePassingRule } from './helpers';

export const PasswordRulesMessage = (props: PasswordRulesMessageProps) => {
  const {
    value, theme, passwordRules,
  } = props;

  return (
    <Div
      className={theme?.messageWrapper}
    >
      { passwordRules?.map(({ rule, ruleMessage }) => {
        if (isValuePassingRule(value, rule)) return null;

        return (
          <div
            className={theme?.ruleMessage}
          >
            { ruleMessage }
          </div>
        )
      }) }
    </Div>
  );
};
