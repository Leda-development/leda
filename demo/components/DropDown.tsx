import * as React from 'react';
import * as L from '../../leda';

export const DropDown = () => (
  <L.Div _demoStory>
    <L.H4 _title>DropDown</L.H4>
    <br />
    <L.DropDown _more wrapperRender={({ elementProps }: any) => <L.Button {...elementProps} />}>
      <L.I _icon20 _iMore />
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
);
