/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../leda';

export const DatePicker = (): React.ReactElement => {
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const handleChange1 = (event) => {
    const { date, value } = event.component;
    setValue1(value);
    console.log(value, date);
  };
  const handleChange2 = (event) => {
    const { date, value } = event.component;
    setValue2(value);
    console.log(value, date);
  };
  const handleChange3 = (event) => {
    const { date, value } = event.component;
    setValue3(value);
    console.log(value, date);
  };
  const testFunction = (ev) => { console.log(ev) }
  return (
    <L.Div>
      <L.Div _demoStory _flexRow>
        <L.DatePicker
          max={new Date('04.12.2030')}
          min={new Date('18.01.2012')}
          onChange={handleChange1}
          onEnterPress={(ev) => testFunction(ev)}
          value={value1}
          name='firstDatePicker'
          placeholder="Type your date..."
        />

        <L.DatePicker
          onChange={handleChange2}
          format='dd.MM.yyyy'
          onBlur={(ev) => testFunction(ev)}

        />

      </L.Div>
      <div style={{
        height: '30vh',
      }} />
      <L.Div _demoStory _flexRow>
        <L.DatePicker
          format="dd-е число  MM-го месяца  yyyy-го года"
          onChange={handleChange3}
          value={value3}
          onFocus={(ev) => testFunction(ev)}
          isOpen
        />
        <L.DatePicker
          format="dd-е число  MM-го месяца  yyyy-го года"
          onChange={handleChange3}
          value={value3}
          isDisabled
        />
      </L.Div>
    </L.Div>
  )
};

(<DatePicker />);
