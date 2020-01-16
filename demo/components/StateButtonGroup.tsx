/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../leda';

export const StateButtonGroup = ({ data, setProps }) => {
  const [value, setValue] = React.useState(data[0]);

  return (
    <>
      <L.ButtonGroup
        data={data}
        value={value}
        textField="text"
        _warning
        onChange={ev => {
          const evValue = ev.component.value;

          if (!evValue.props) return;

          setValue(evValue);
          setProps(evValue.props);
        }}
      />
      <br />
    </>
  );
};
