import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';

export const Basic = (componentProps: any) => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState<string | null>(null);

  const { update, EventInfo } = useEventSpy();

  return (
    <L.Div _box _inner _demoBg>
      <L.Password
        name="Password"
        form="AwesomePassword"
        minPasswordEvaluationLength={8}
        passwordRules={[
          {
            rule: /\d/,
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
          return password.length > 12
            ? 'good'
            : 'may be better'  
        }}
        data-test="password"
        value={value}
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
        _width30
        {...props}
      />

      <br />

      <L.Button
        form="AwesomePassword"
        onClick={(ev) => console.log('form submit ev', ev)}
        onValidationFail={({ invalidForms }) => console.log('form fail ev', invalidForms[0])}
      >
        Validate form
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
