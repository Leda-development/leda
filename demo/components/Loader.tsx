import * as React from 'react';
import * as L from '../../leda';
import { StateButtonGroup } from './StateButtonGroup';

const data = [
  { text: 'Default', props: {} },
  { text: 'Spinner', props: { iconRender: ({ elementProps }: any) => <L.Div _loaderSpinner {...elementProps} /> } },
  { text: 'Custom', props: { iconRender: ({ elementProps }: any) => <><L.Div _loaderHourglass {...elementProps} /><L.Span>БЛАБЛАБЛАБЛАБЛА</L.Span></> } },
  { text: 'Disabled', props: { isLoading: false } },
];

export const Loader = () => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _demoStory>
      <L.H4 _title>Loader</L.H4>
      <p>Лоадер как обертка:</p>
      <L.Loader
        isLoading
        onClick={(event) => {
          console.log('event', event);
        }}
        {...props}
      >
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </L.Loader>
      <StateButtonGroup
        data={data}
        setProps={setProps}
      />
      <L.Button
        _warning
        onClick={() => {
          setProps((prevProps) => ({ ...prevProps, isGlobal: true }));
          setTimeout(() => {
            setProps((prevProps) => ({
              ...prevProps, isGlobal: false,
            }));

            alert('Полноэкранный лоадер отключен');
          }, 6000);
        }}
        style={{ marginLeft: '20px' }}
      >
        Включить глобальный лоадер на 6 сек
      </L.Button>
    </L.Div>
  );
};
