import * as React from 'react';
import * as L from '../../leda';
import { Span } from '../../leda/components/Span';
import { StateButtonGroup } from './StateButtonGroup';

export const Rating = () => {
  const [value, setValue] = React.useState(1);
  const [props, setProps] = React.useState<any>();

  return (
    <L.Div _demoStory>
      <L.H4 _title>Rating</L.H4>
      <L.Div>
        <L.Rating
          max={10}
          value={value}
          onChange={(ev) => setValue(ev.component.value)}
          {...props} 
        />
        <br />
        <br />
        <Span>Кастомизация иконок: </Span>
        <br />
        <L.Rating
          icon={L.IconTypes.Icons.BatteryCharging}
          max={10}
          value={value}
          {...props}
          onChange={(ev) => setValue(ev.component.value)}
        />
      </L.Div>
      <br />
      <L.Button onClick={() => setValue(0)}>Обнулить рейтинг</L.Button>
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'Disabled', props: { isDisabled: true } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
