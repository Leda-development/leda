import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';

export const NameArray = (args: any) => {
  const [props, setProps] = React.useState({});

  const { update, EventInfo } = useEventSpy();

  return (
    <L.Div _demoStory>
      <L.NumericRange
        format="#.## %"
        _width70
        max={80}
        min={20}
        name={['numer-1', 'numer-2']}
        onBlur={(event) => {
          update('Blur', event);
          console.log('event.component.name', event.component.name);
        }}
        onFocus={(event) => {
          update('Focus', event);
        }}
        onChange={(event) => {
          const { component: { value, name } } = event;
          console.log('value', value);
          console.log('name', name);
          update('Change', event);
        }}
        form="foobar"
        placeholder={['Число', 'Тоже число']}
        inputsRender={[
          ({ Element, elementProps }) => (
            <>
              <L.Span _numericTextBoxPrefix style={{ color: 'steelblue' }}>Цена от</L.Span>
              <Element {...elementProps} />
              <L.Span _numericTextBoxSuffix>млн. $</L.Span>
            </>
          ),
          ({ Element, elementProps }) => (
            <>
              <L.Span _numericTextBoxPrefix style={{ color: 'steelblue' }}>Цена до</L.Span>
              <Element {...elementProps} />
              <L.Span _numericTextBoxSuffix>млн. $</L.Span>
            </>
          ),
        ]}
        wrapperRender={({ Element, elementProps }) => (
          <Element {...elementProps}>
            <L.Span _marginRight _flexRow _colMd2>Проценты <L.I _icon20 _iSearch /></L.Span>
            {elementProps.children}
          </Element>
        )}
        isRequired={[false, true]}
        {...props}
      />
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
