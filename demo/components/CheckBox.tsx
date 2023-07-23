/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../leda';

export const CheckBox = () => {
  const [val1, setVal1] = React.useState<boolean>(true);
  const [val2, setVal2] = React.useState<boolean>(true);
  const [val3, setVal3] = React.useState<boolean>(true);
  const [val4, setVal4] = React.useState<boolean>(false);
  const [val5, setVal5] = React.useState<boolean>(true);


  const [value, setValue] = React.useState<boolean>(true);
  const [subValue1, setSubValue1] = React.useState<boolean>(true);
  const [subValue2, setSubValue2] = React.useState<boolean>(true);

  return (
    <L.Div _demoStory>
      <L.H4 _title>CheckBox</L.H4>
      <L.Div style={{ display: 'flex' }}>
        <L.Div>
          <L.CheckBox
            value={val1}
            onChange={ev => setVal1(ev.component.value)}
            checkboxIcon={val1 && L.IconTypes.Icons.MinusSquare}
          >
            Semi-checkbox
          </L.CheckBox>
 
          <L.CheckBox
            value={val2}
            onChange={ev => setVal2(ev.component.value)}
            checkboxIcon={val2 && L.IconTypes.Icons.PlusSquare}
          >
            Plus Checkbox
          </L.CheckBox>

          <L.CheckBox
            value={val3}
            onChange={ev => setVal3(ev.component.value)}
            checkboxIcon={val3 && L.IconTypes.Icons.Star}
          >
            Star Checkbox
          </L.CheckBox>

          <L.CheckBox
            value={val4}
            onChange={ev => setVal4(ev.component.value)}
          >
            Not checked standard checkbox
          </L.CheckBox>

          <L.CheckBox
            value={val5}
            onChange={ev => setVal5(ev.component.value)}
            checkboxIcon={val5 && L.IconTypes.Icons.Check}
          />
        </L.Div>


        <L.Div style={{ marginLeft: '20px' }}>
          <L.CheckBox
            isDisabled
            onChange={ev => {
              console.log(ev);
            }}
            checkboxIcon={L.IconTypes.Icons.MinusSquare}
          >
            Semi-checkbox
          </L.CheckBox>

          <L.CheckBox
            isDisabled
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
        <L.Div style={{ marginLeft: '20px' }}>
          <L.CheckBox
            value={value}
            onChange={({ component: { value } }) => {
                setValue(value);
                setSubValue1(value);
                setSubValue2(value);
            }}
            checkboxIcon={(() => {
              if (subValue1 && subValue2) return L.IconTypes.Icons.CheckSquare;
              if (!subValue1 && !subValue2) return L.IconTypes.Icons.Square;
              return L.IconTypes.Icons.MinusSquare;
            })()}
          >
            all done
          </L.CheckBox>

          <L.Div style={{ marginLeft: '20px' }}>

          <L.CheckBox
            value={subValue1}
            onChange={({ component: { value } }) => {
              setSubValue1(value);
              if (value === subValue2) setValue(value);
            }}
            checkboxIcon={subValue1 && L.IconTypes.Icons.Check}
          >
            first is done
          </L.CheckBox>
          <L.CheckBox
            value={subValue2}
            onChange={({ component: { value } }) => {
              setSubValue2(value);
              if (value === subValue1) setValue(value);
            }}
            checkboxIcon={subValue2 && L.IconTypes.Icons.Check}
          >
            second is done
          </L.CheckBox>
          </L.Div>

        </L.Div>
      </L.Div>
    </L.Div>
  );
};
