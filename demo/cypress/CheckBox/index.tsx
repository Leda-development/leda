/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../leda';


export const CheckBox = (): React.ReactElement => {
  const [value, setValue] = React.useState(true);
  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <L.Div _demoStory>
      <L.CheckBox
        onChange={() => alert('Alert!')}
        name="checkBoxMain">
        Main
      </L.CheckBox>
      <br />
      <br />
      <L.CheckBox name="checkBoxButton">
        <L.Button isLoading onClick={() => alert('Alert!')}>isLoading</L.Button>
      </L.CheckBox>
      <br />
      <br />
      <L.CheckBox
        isDisabled
        name="checkBoxDisabled"
        onChange={() => alert('Alert!')}>
        isDisabled
      </L.CheckBox>
      <br />
      <br />
      <L.CheckBox
        name="checkBoxSemi"
        value={value}
        onChange={event => handleChange(event.component.value)}
        _semi={true}>
        isSemi
      </L.CheckBox>
    </L.Div>
  )
};
