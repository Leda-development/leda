import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';
import { PasswordStrength } from '../../../leda/components/Password/constants';

export const Basic = (componentProps: any) => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState<string | null>(null);

  const { update, EventInfo } = useEventSpy();

  return (
    <L.Div _box _inner _demoBg>
      <L.Password
        minPasswordEvaluationLength={5}
        passwordRules="Set strong password"
        passwordEvaluators={[
          {
            strengthLevel: PasswordStrength.Low,
            evaluator: (password) => {
              if (
              password.length > 12
              ) {
                return true;
              }
              return false;
            },
            evaluationMessage: 'Weak password',
          },
          {
            strengthLevel: PasswordStrength.Medium,
            evaluator: (password) => {
              if (
                password.length > 12
              ) {
                return true;
              }
              return false;
            },
            evaluationMessage: 'Not so good password',
          },
          {
            strengthLevel: PasswordStrength.Strong,
            evaluator: (password) => {
              if (
                /[!@#$%*]/.test(password)
              ) {
                return true;
              }
              return false;
            },
            evaluationMessage: 'Strong password',
          },
        ]}
        name="Password"
        form="AwesomePassword"
        data-test="password"
        value={value}
        // invalidMessage="invalidMessage"
        // requiredMessage="requiredMessage"
        onChange={(ev) => {
          setValue(ev.component.value);
          update('Change', ev);
        }}
        placeholder="Enter your password..."
        onFocus={(ev) => {
          update('Focus', ev);
        }}
        onEnterPress={({ component }) => {
          console.log(component.name, component.value);
        }}
        onBlur={(ev) => {
          update('Blur', ev);
        }}
        isRequired
        requiredMessage="Required"
        validator="password"
        _width30
        {...props}
      />

      <br />

      <L.Button
        form="AwesomeInput"
        onClick={(ev) => console.log('awesome form submit ev', ev)}
        onValidationFail={(ev) => console.log('awesome form fail ev', ev)}
      >
        Validate an awesome input
      </L.Button>

      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'Disabled', props: { isDisabled: true } },
        ]}
        setProps={setProps}
      />
      <br />
      <EventInfo />
    </L.Div>
  );
};
