import * as React from 'react';
import * as L from '../../../leda';

export const DateRange = (): React.ReactElement => {
  const [value1, setValue1] = React.useState<[string, string]>(['', '']);
  const [value2, setValue2] = React.useState<[string, string]>(['', '']);
  const [value3, setValue3] = React.useState<[string, string]>(['', '']);
  const [value4, setValue4] = React.useState<[string, string]>(['', '']);
  const [value5, setValue5] = React.useState<[string, string]>(['', '']);
  const [value6, setValue6] = React.useState<[string, string]>(['', '']);
  
  const handleChange1 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue1(value);
  };
  const handleChange2 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue2(value);
  };
  const handleChange3 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue3(value);
  };
  const handleChange4 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue4(value);
  };
  const handleChange5 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue5(value);
  };
  const handleChange6 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue6(value);
  };
  const testFunction = (ev) => { console.log(ev) }

  const DateRangeStyles = () => (<link rel="stylesheet">
    {`
    .daterange-wrapper {
      justify-content: space-between;
    }
    `}
  </link>)
  return (
    <L.Div>
      <L.Div _demoStory _flexRow>
        <L.DateRange
          onChange={handleChange1}
          onEnterPress={(ev) => testFunction(ev)}
          value={value1}
          name={['firstDatePicker', "secondDatePicker"]}
          placeholder={["Type your date...", "Type something...",]}
          isRequired={[true, false]}
          isDisabled={[true, false]}
          form = "111"
        />

        <L.DateRange
          max={new Date('05.04.2012')}
          min={new Date('04.03.2012')}
          onChange={handleChange2}
          onEnterPress={(ev) => testFunction(ev)}
          name='MinMaxDatePicker'
          placeholder="Type your date..."
        />

        <L.DateRange
          onChange={handleChange3}
          format='dd.MM.yyyy'
          onBlur={(ev) => testFunction(ev)}
          name = 'ThirdDateRange'
        />

      </L.Div>
      <div style={{
        height: '30vh',
      }} />

      <L.Div _demoStory _flexRow>
        <L.DateRange
          format="dd-е число  MM-го месяца  yyyy-го года"
          name = 'openedCalendar'
          onChange={handleChange4}
          value={[value4[0], "11.22.33"]}
          onFocus={(ev) => testFunction(ev)}
          isOpen
          isDisabled={[true, false]}
        />

        <L.DateRange
          format="dd-е число  MM-го месяца  yyyy-го года"
          name = 'disabledCalendar'
          onChange={handleChange5}
          value={value5}
          isDisabled={[true, false]}
          isOpen={[true, false]}
        />
       
        <L.DateRange
          max={new Date('05.04.2012')}
          min={new Date('05.03.2012')}
          onChange={handleChange6}
          onEnterPress={(ev) => testFunction(ev)}
          value={value6}
          name='MinMaxDatePickerOpened'
          placeholder="Type your date..."
          isOpen={[null, true]}
        />
         <L.Button _success
          form = "111"
          >success!</L.Button>
      </L.Div>
    </L.Div>
  )
};

(<DateRange />);