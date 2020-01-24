/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../leda';

export const DatePicker = (): React.ReactElement => {
    const [value, setValue] = React.useState('');
  
    const handleChange = (event) => {
      const { date, value } = event.component;
      setValue(value);
      console.log(value, date);
    };
  
    return (
 <L.Div _demoStory>
    <L.DatePicker
        onChange={handleChange}
        value={value}
      />
    <div style={{
      height: '30vh',
    }} />  
    <L.DatePicker
      max={new Date(Date.now())}
      min={new Date('01.01.2018')}
      onChange={handleChange}
      value={value}
    />
     <div style={{
      height: '30vh',
    }} />  
    <L.DatePicker
      format="dd-е число  MM-го месяца  yyyy-го года"
      onChange={handleChange}
      value={value}
    />
  
</L.Div>
  ) };
  
  (<DatePicker/>);
  