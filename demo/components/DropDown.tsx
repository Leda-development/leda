import * as React from 'react';
import * as L from '../../leda';

export const DropDown = () => {
  const containerRef = React.useRef(null);

  return (
    <L.Div _demo-story>
      <L.H4 _story-title>DropDown</L.H4>
      <br/>
      <L.DropDown _more wrapperRender={({elementProps}: any) => <L.Button {...elementProps} />}>
        <L.Span>Hello</L.Span>
        <L.Ul _txtLeft>
          <L.Li _level2>
            <L.A>Мармелад</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Суфле</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Шоколад</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Кексики</L.A>
          </L.Li>
        </L.Ul>
      </L.DropDown>

      <br />
      <br />

      <L.P>
        Позиционирование относительно произвольного контейнера в красном:
      </L.P>

      <L.Div
        ref={containerRef}
        style={{
          overflow: 'hidden',
          width: '300px',
          border: '1px solid red',
          height: '200px',
          margin: '20px',
        }}
      >
        <L.DropDown
          _more
          wrapperRender={({elementProps}: any) => <L.Button {...elementProps} />}
          boundingContainerRef={containerRef}
          style={{ float: 'right' }}
        >
          <L.Span>Hello</L.Span>
          <L.Ul _txtLeft>
            <L.Li _level2>
              <L.A>Мармелад</L.A>
            </L.Li>
            <L.Li _level2>
              <L.A>Суфле</L.A>
            </L.Li>
            <L.Li _level2>
              <L.A>Шоколад</L.A>
            </L.Li>
            <L.Li _level2>
              <L.A>Кексики</L.A>
            </L.Li>
          </L.Ul>
        </L.DropDown>
      </L.Div>
    </L.Div>
  );
};
