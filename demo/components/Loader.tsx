/* eslint-disable no-alert,react/prop-types, no-console */
import * as React from 'react';
import * as L from '../../leda';
import { StateButtonGroup } from './StateButtonGroup';

export const Loader = () => {
  const [props, setProps] = React.useState({ });

  return (
    <L.Div _demo-story>
      <L.H4 _story-title>Loader</L.H4>
      <p>Лоадер как обертка:</p>
      <L.Loader
        isLoading
        onClick={ev => console.log('ev', ev)}
        {...props}
      >
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </L.Loader>
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: { } },
          { text: 'Spinner', props: { iconRender: ({ elementProps }) => <L.Div _loader-spinner {...elementProps} /> } },
          { text: 'Custom', props: { iconRender: ({ elementProps }) => <><L.Div _loader-hourglass {...elementProps}></L.Div><L.Span>БЛАБЛАБЛАБЛАБЛА</L.Span></> } },
          { text: 'Disabled', props: { isLoading: false } },
        ]}
        setProps={setProps}
      />
      <br />
      <br />
      <L.Button
        _warning
        onClick={() => {
          setProps(prevProps => ({ ...prevProps, isGlobal: true }));
          setTimeout(() => { setProps(prevProps => ({ ...prevProps, isGlobal: false })); alert('Полноэкранный лоадер отключен'); }, 6000);
        }}
      >
        Включить глобальный лоадер на 6 сек
      </L.Button>
    </L.Div>
  );
};
