'use client';

import * as L from '@leda';
import React from 'react';
import { Live } from '@/components/live';

export const SubmitEventDemo = () => (
  <Live scope={{ L }}>
    {`
() => {
  const data = [
    { name: 'Argentina', id: 1 },
    { name: 'Chile', id: 2 },
    { name: 'Spain', id: 3 }
  ];

  const formName = 'AutoCompleteSubmitEventForm'
  const componentName = 'AutoComplete'

  const [value, setValue] = React.useState(null);

  return (
    <>
    <L.AutoComplete
      form={formName}
      name={componentName}
      data={data}
      textField='name'
      onChange={({ component }) => {
        setValue(component.value);
      }}
      value={value}
      _w-48
      _mb-4
    />
    <L.Button
      form={formName}
      onClick={({ form }) => {
        const {
          suggestion, value
        } = form[formName][componentName]

        // printing the main data
        console.log(value, suggestion)

        // see the full event
        console.log(form[formName][componentName])
      }}
      _mb-4
    >
      Submit
    </L.Button>
    <br />
    <L.Button
      onClick={() => {
        const data = L.form(formName).get(componentName)
        console.log(data[0])
      }}
    >
      Get values using form API
    </L.Button>
    </>
  );
}`}
  </Live>
);
