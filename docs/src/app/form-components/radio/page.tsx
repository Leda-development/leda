'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import { Live } from '@/components/live';
import {
  H1, H2, Section, THead, Table, Td, propsTableCommonHeaders,
} from '@/components/typography';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { ValidationSection } from '@/sections';
import { Controlled } from './_demo/Controlled';
import { Form } from './_demo/Form';
import { Required } from './_demo/Required';
import { Reset } from './_demo/Reset';
import { Uncontrolled } from './_demo/Uncontrolled';

const RadioPage = () => (
  <article>
    <H1>Radio</H1>
    <Section>
      <H2>RadioGroup props</H2>
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          <tr>
            <Td><b>children</b></Td>
            <Td>React.Node</Td>
            <Td>RadioButton elements</Td>
          </tr>
          <tr>
            <Td>isDisabled</Td>
            <Td>boolean</Td>
            <Td>In case you {"don't"} want it to be active</Td>
          </tr>
          <tr>
            <Td>name</Td>
            <Td>string</Td>
            <Td>...</Td>
          </tr>
          <tr>
            <Td>onChange</Td>
            <Td>(ev: ChangeEvent) ={'>'} void</Td>
            <Td>Change handler</Td>
          </tr>
          <tr>
            <Td>theme</Td>
            <Td>
              PartialGlobalDefaultTheme[
              typeof COMPONENTS_NAMESPACES.calendar
              ]
            </Td>
            <Td>...</Td>
          </tr>
          <tr>
            <Td>value</Td>
            <Td>number | string</Td>
            <Td>...</Td>
          </tr>
          <UnderscoreClasses />
        </tbody>
      </Table>
    </Section>

    <Section>
      <H2>RadioButton props</H2>
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          <tr>
            <Td>id</Td>
            <Td>string</Td>
            <Td>...</Td>
          </tr>
          <tr>
            <Td>isDisabled</Td>
            <Td>boolean</Td>
            <Td>In case you {"don't"} want it to be active</Td>
          </tr>
          <tr>
            <Td>name</Td>
            <Td>string</Td>
            <Td>...</Td>
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
              typeof COMPONENTS_NAMESPACES.calendar
              ]
            </Td>
            <Td>...</Td>
          </tr>
          <tr>
            <Td><b>value</b></Td>
            <Td>number | string</Td>
            <Td>...</Td>
          </tr>
          <UnderscoreClasses />
        </tbody>
      </Table>
    </Section>

    <Live scope={{ L }}>
      {
`() => {
  const [value, setValue] = React.useState(1);

  return (
    <L.RadioGroup
      onChange={({ component }) => {
        console.log(component.value)
        setValue(component.value)
      }}
      value={value}
    >
      <L.RadioButton value={1}>One</L.RadioButton>
      <L.RadioButton value={2}>Two</L.RadioButton>
      <L.RadioButton value={3}>Three</L.RadioButton>
    </L.RadioGroup>
  )
}`
        }
    </Live>

    <Section>
      <L.Tabs>
        <L.Tab title="Uncontrolled" tabKey={0}>
          <Uncontrolled />
        </L.Tab>
        <L.Tab title="Controlled" tabKey={1}>
          <Controlled />
        </L.Tab>
        <L.Tab title="Form" tabKey={2}>
          <Form />
        </L.Tab>
        <L.Tab title="Reset" tabKey={3}>
          <Reset />
        </L.Tab>
        <L.Tab title="Required" tabKey={4}>
          <Required />
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
  </article>
);

export default RadioPage;
