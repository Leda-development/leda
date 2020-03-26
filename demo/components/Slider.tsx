import * as React from 'react';
import * as L from '../../leda';

export const Slider = () => {
  const [firstSliderValue, setFirstSliderValue] = React.useState<number | number[] | null | undefined>(10);
  const [secondSliderValue, setSecondSliderValue] = React.useState<number | number[] | null | undefined>([2, 10, 15]);
  return (
    <L.Div _demoStory>
      <L.H4 _title>Slider</L.H4>
      <br />
      <L.Slider
        max={20}
        value={firstSliderValue}
        onChange={(event) => {
          console.log('Slider onChange', event);
          setFirstSliderValue(event.component.value);
        }}
        _width50
        labelType="current"
        unitsRender={() => 'млн.руб.'}
        name="Slider 1"
        hasTooltip
        onMove={(event) => {
          console.log('Slider onMove', event);
          setFirstSliderValue(event.component.value);
        }}
      />
      <br />
      <br />
      <L.Button
        _warning
        onClick={() => { setFirstSliderValue(10); }}
      >
        Обновить value слайдера
      </L.Button>
      {' '}
      <L.Button
        _warning
        onClick={() => { setFirstSliderValue(!Array.isArray(firstSliderValue) ? [2, 10, 15] : 10); }}
      >
        Сменить тип value слайдера
      </L.Button>
      <br />
      <br />
      <br />
      <br />
      <L.P>Слайдер с несколькими ползунками. labelType=&quot;current&quot; в этом случае не отображается</L.P>
      <L.Slider
        max={20}
        value={secondSliderValue}
        onChange={(event) => {
          console.log('Slider onChange', event);
          setSecondSliderValue(event.component.value);
        }}
        _width50
        labelType="minmax"
        unitsRender={() => 'млн.руб.'}
        name="Slider 1"
        hasTooltip
        onMove={(event) => {
          console.log('Slider onMove', event);
          setSecondSliderValue(event.component.value);
        }}
      />
    </L.Div>
  );
};
