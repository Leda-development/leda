/* eslint-disable react/prop-types, no-console */
import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';

export const Controlled = (some: any): React.ReactElement => {
  const [props, setProps] = React.useState<any>({});
  const ref = React.useRef(null);

  const [value, setValue] = React.useState<string>('8002000600');

  const { update, EventInfo } = useEventSpy();

  return (
    <L.Div _box _inner>
      {'Здесь лейбл:  '}
      <L.MaskedInput
        mask="+7 (###) ###-##-##"
        placeholderChar="*"
        isRequired
        data-test="maskedinput"
        requiredMessage="Required"
        onChange={ev => {
          setValue(ev.component.value);
          update('Change', ev);
        }}
        form="masked"
        name="masked-name"
        _width-30
        ref={ref}
        value={value}
        onFocus={ev => {
          update('Focus', ev);
          console.log(ref.current);
        }}
        onBlur={ev => {
          update('Blur', ev);
        }}
        {...props}
      />
      <br />
      <L.MaskedInput
        mask="###-###-### ##"
        placeholder="___-___-___ __"
        _width-30
      />
      <br />
      <L.MaskedInput
        mask="LL##LL####"
        placeholder="Car number"
        _width-30
      />
      <br />
      <L.MaskedInput
        mask="####-####-####-####"
        placeholderChar="X"
        _width-30
      />
      <br />
      <L.Button onClick={() => { setProps({}); }}>Defaults</L.Button>
      {'  '}
      <L.Button onClick={() => { setValue(''); }}>Clear Value</L.Button>
      {'  '}
      <L.Button onClick={() => { setValue('9818862798'); }}>Set Value</L.Button>
      {'  '}
      <L.Button onClick={() => { setProps({ ...props, isDisabled: !props.isDisabled }); }} _warning={props.isDisabled}>Toggle isDisabled</L.Button>
      {'  '}
      <L.Button form="masked" _warning>Validate</L.Button>
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Icon left', props: { ...props, prefixRender: () => (<L.I _icon20 _iSearch />) } },
          { text: 'Text left', props: { ...props, prefixRender: () => 'from' } },
        ]}
        setProps={setProps}
      />
      {'  '}
      <StateButtonGroup
        data={[
          { text: 'Icon right', props: { ...props, suffixRender: () => (<L.I _icon20 _iSearch />) } },
          { text: 'Text right', props: { ...props, suffixRender: () => 'USD' } },
        ]}
        setProps={setProps}
      />
      <br />
      <br />
      <EventInfo />
    </L.Div>
  );
};
