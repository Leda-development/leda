'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import { useState } from 'react';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import {
  H1, H2, P, Section, Td,
} from '@/components/typography';
import { Live } from '@/components/live';
import { PropsTableSection, ValidationSection } from '@/sections';
import { log } from '@/utils';

const CheckBoxPage = () => {
  const [selected, setSelected] = useState<string | number>(0);

  return (
    <article>
      <H1>CheckBox</H1>
      <PropsTableSection>
        <tr>
          <Td>checkboxIcon</Td>
          <Td>L.IconTypes.Icons | false | null</Td>
          <Td>
            <P>
              Checkbox icon, it is independent from the value, see examples
            </P>
          </Td>
        </tr>
        <tr>
          <Td>children</Td>
          <Td>React.Node</Td>
          <Td>Label content</Td>
        </tr>
        <tr>
          <Td>defaultValue</Td>
          <Td>boolean</Td>
          <Td>Where to start</Td>
        </tr>
        <tr>
          <Td>id</Td>
          <Td>string</Td>
          <Td>Just an id</Td>
        </tr>
        <tr>
          <Td>isDisabled</Td>
          <Td>boolean</Td>
          <Td>In case you {"don't"} want it to be active</Td>
        </tr>
        <tr>
          <Td>onChange</Td>
          <Td>(ev: ChangeEvent) ={'>'} void</Td>
          <Td>Change handler</Td>
        </tr>
        <ShouldRender />
        <tr>
          <Td>theme</Td>
          <Td>
            PartialGlobalDefaultTheme[
            typeof COMPONENTS_NAMESPACES.checkBox
            ]
          </Td>
          <Td>...</Td>
        </tr>
        <tr>
          <Td>value</Td>
          <Td>boolean</Td>
          <Td>Value</Td>
        </tr>
        <UnderscoreClasses />
      </PropsTableSection>

      <Section>
        <H2>Examples</H2>

        <L.Tabs
          activeTabKey={selected}
          onChange={(ev) => setSelected(ev.component.value)}
          theme={{
            container: 'tabs-container relative',
          }}
          shouldScrollTabs
        >
          <L.Tab
            title="Basic"
            tabKey={0}
          >
            <Live scope={{ L }}>
              {
`() => {
  const [value, setValue] = React.useState(true);

  return (
    <L.CheckBox
      onChange={({ component }) => setValue(component.value)}
      value={value}
    >
      click me
    </L.CheckBox>
  );
}`
              }
            </Live>
          </L.Tab>

          <L.Tab
            title="Custom icons"
            tabKey={1}
          >
            <Live scope={{ L }}>
              {
`() => {
  const [value1, setValue1] = React.useState(false);
  const [value2, setValue2] = React.useState(false);
  const [value3, setValue3] = React.useState(false);
  const [value4, setValue4] = React.useState(false);

  return (
    <>
      <L.CheckBox
        onChange={({ component }) => setValue1(component.value)}
        value={value1}
        checkboxIcon={value1 && L.IconTypes.Icons.Check}

      >
        check style
      </L.CheckBox>

      <L.CheckBox
        onChange={({ component }) => setValue2(component.value)}
        value={value2}
        checkboxIcon={value2 ? L.IconTypes.Icons.CheckCircle : L.IconTypes.Icons.Circle}

      >
        circle
      </L.CheckBox>

      <L.CheckBox
        onChange={({ component }) => setValue3(component.value)}
        value={value3}
        checkboxIcon={value3 && L.IconTypes.Icons.Star}

      >
        star
      </L.CheckBox>

      <L.CheckBox
        onChange={({ component }) => setValue4(component.value)}
        value={value4}
        checkboxIcon={value4 ? L.IconTypes.Icons.PlusSquare : L.IconTypes.Icons.MinusSquare}

      >
        tree 
      </L.CheckBox>
      
      {value4 && <L.Span _ml-6>hi</Span>}
    </>
  );
}`
              }
            </Live>
          </L.Tab>

          <L.Tab
            title="Colored"
            tabKey={2}
          >
            <Live scope={{ L }}>
              {
`() => {
  const [value, setValue] = React.useState(false);

  return (
    <L.CheckBox
      onChange={({ component }) => setValue(component.value)}
      value={value}
      theme={{
        iconChecked: 'text-sky-500',
        iconUnchecked: 'text-orange-500',
      }}
    >
      click me
    </L.CheckBox>
  );
}`
              }
            </Live>
          </L.Tab>

          <L.Tab
            title="Semi"
            tabKey={3}
          >
            <Live scope={{ L }}>
              {
`() => {
  const [value, setValue] = React.useState(false);
  const [subValues, setSubValues] = React.useState([false, false]);

  return (
    <>
      <L.CheckBox
        value={value}
        onChange={({ component: { value } }) => {
            setValue(value);
            setSubValues(subValues.map(() => value));
        }}
        checkboxIcon={(() => {
          if (subValues.every((val) => val === true)) return L.IconTypes.Icons.CheckSquare;
          if (subValues.every((val) => val === false)) return L.IconTypes.Icons.Square;
          return L.IconTypes.Icons.MinusSquare;
        })()}
      >
        all done
      </L.CheckBox>

      <L.Div _ml-4>
        <L.CheckBox
          value={subValues[0]}
          onChange={({ component: { value } }) => {
            const subValuesCopy = [...subValues];
            subValuesCopy[0] = value;
            setSubValues(subValuesCopy);
            if (subValuesCopy.every((val) => val === value)) setValue(value);
          }}
          checkboxIcon={subValues[0] && L.IconTypes.Icons.Check}
        >
          first is done
        </L.CheckBox>
        
        <L.CheckBox
          value={subValues[1]}
          onChange={({ component: { value } }) => {
            const subValuesCopy = [...subValues];
            subValuesCopy[1] = value;
            setSubValues(subValuesCopy);
            if (subValuesCopy.every((val) => val === value)) setValue(value);
          }}
          checkboxIcon={subValues[1] && L.IconTypes.Icons.Check}
        >
          second is done
        </L.CheckBox>
      </L.Div>
    </>
  );
}`
              }
            </Live>
          </L.Tab>
        </L.Tabs>
      </Section>

      <ValidationSection
        form
        isValid
        isRequired
        invalidMessage
        name
        requiredMessage
        shouldValidateUnmounted
        validator
      />

      <Section>
        <H2>Examples</H2>

        <L.Tabs>
          <L.Tab title="Form" tabKey={0}>
            <Live scope={{ L, log }}>
              {
`() => {

  return (
    <>
      <L.CheckBox
        form='demoCheckBoxForm'
        name='checkbox'
        _mb-2
      >
        click me
      </L.CheckBox>

      <L.Button
        form='demoCheckBoxForm'
        onClick={({ form }) => log(form)}
      >
        Submit
      </L.Button>
    </>
  );
}`
              }
            </Live>
          </L.Tab>
          <L.Tab title="Required" tabKey={1}>
            <Live scope={{ L, log }}>
              {
`() => {

  return (
    <>
      <L.CheckBox
        form='demoCheckBoxForm'
        name='checkbox'
        isRequired
        _mb-2
      >
        I agree
      </L.CheckBox>

      <L.Button
        form='demoCheckBoxForm'
        onClick={({ form }) => log(form)}
      >
        Submit
      </L.Button>
    </>
  );
}`
              }
            </Live>
          </L.Tab>
        </L.Tabs>
      </Section>
    </article>
  );
};

export default CheckBoxPage;
