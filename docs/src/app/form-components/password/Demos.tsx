'use client';

import * as L from '@leda';
import zxcvbn from 'zxcvbn';
import { Live } from '@/components/live';
import { Section } from '@/components/typography';

export const Demos = () => (
  <Section>
    <Live scope={{ L, zxcvbn }}>
      {`
<>
  <L.Password
    form='passwordForm'
    name='password1'
    isRequired
    passwordRules={[
      {
        rule: /\\d/,
        ruleMessage: 'numbers'
      },
      {
        rule: /[a-z]/,
        ruleMessage: 'lowercase latin letters'
      },
      {
        rule: /[A-Z]/,
        ruleMessage: 'uppercase latin letters'
      },
      {
        rule: (password) => password.length > 7,
        ruleMessage: '8 symbols and more'
      }
    ]}
    passwordStrength={(password) => {
      const crackTimeText = zxcvbn(password).crack_times_display.online_no_throttling_10_per_second;
      return crackTimeText && (
        <L.Div _text-stone-600>
          time to crack your password: {crackTimeText}
        </L.Div>
      );
    }}
    minPasswordEvaluationLength={4}
    placeholder="Enter your password..."
    _w-64
    _mb-4
  />
  
  <L.Password
    form='passwordForm'
    name='password2'
    validator={value => L.form('passwordForm', 'password1').get().value === value}
    invalidMessage='Passwords do not match'
    isRequired
    placeholder='Repeat the password'
    _w-64
    _mb-4
  />
  
  <L.Button
    form='passwordForm'
    onClick={({ form }) => console.log('form submit ev', form)}
    onValidationFail={({ invalidForms }) => console.log('form fail ev', invalidForms[0])}
  >
    Submit
  </L.Button>
</>
`}
    </Live>
  </Section>
);
