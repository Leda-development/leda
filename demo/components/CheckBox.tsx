/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../leda';

export const CheckBox = () => {
  const [value, setValue] = React.useState<boolean>(true);
  return (
    <L.Div _demoStory>
      <L.H4 _title>CheckBox</L.H4>
      <L.Div style={{ display: 'flex' }}>
        <L.Div>
          <L.CheckBox
            name="CheBoxAry"
            value={value}
            onChange={ev => {
              console.log(ev.component.name);
              setValue(ev.component.value);
            }}
            checkedIcon={L.IconTypes.Icons.MinusSquare}
          >
            Semi-checkbox
          </L.CheckBox>
 
          <L.CheckBox
            defaultValue
            onChange={ev => {
              console.log(ev.component.value);
            }}
            checkedIcon={L.IconTypes.Icons.PlusSquare}
          >
            Plus Checkbox
          </L.CheckBox>

          <L.CheckBox
            defaultValue
            onChange={ev => {
              console.log(ev.component.value);
            }}
          >
            Checked Checkbox
          </L.CheckBox>

          <L.CheckBox onChange={ev => {
            console.log(ev);
          }}
          >
            Not Checked checkbox
          </L.CheckBox>

          <L.CheckBox /> {/* Чекбокс без текста */}
        </L.Div>
        <L.Div style={{ marginLeft: '20px' }}>
          <L.CheckBox
            isDisabled
            defaultValue
            onChange={ev => {
              console.log(ev);
            }}
            checkedIcon={L.IconTypes.Icons.MinusSquare}
          >
            Semi-checkbox
          </L.CheckBox>

          <L.CheckBox
            isDisabled
            defaultValue
            onChange={ev => {
              console.log(ev);
            }}
          >
            Disabled Checked Checkbox
          </L.CheckBox>

          <L.CheckBox
            isDisabled
            onChange={ev => {
              console.log(ev);
            }}
          >
            Disabled Checkbox <br /> with multiline description
          </L.CheckBox>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
