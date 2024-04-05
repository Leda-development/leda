'use client';

import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { H1, Section, Td } from '@/components/typography';
import { PropsTableSection, ValidationSection } from '@/sections';
import { Tabs, Tab } from '@leda/index';
import { Controlled } from './_demo/Controlled';
import { Form } from './_demo/Form';
import { Required } from './_demo/Required';
import { Uncontrolled } from './_demo/Uncontrolled';

const TimeRangePage = () => (
  <article>
    <H1>TimeRange</H1>

    <PropsTableSection>
      <tr>
        <Td>format</Td>
        <Td>string</Td>
        <Td>hh:mm is default</Td>
      </tr>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>In case you want it to be disabled</Td>
      </tr>
      <tr>
        <Td>isOpen</Td>
        <Td>boolean</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>onBlur</Td>
        <Td>(ev: BlurEvent) ={'>'} void</Td>
        <Td>Blur handler</Td>
      </tr>
      <tr>
        <Td>onChange</Td>
        <Td>(ev: ChangeEvent) ={'>'} void</Td>
        <Td>Change handler</Td>
      </tr>
      <tr>
        <Td>onEnterPress</Td>
        <Td>(ev: ChangeEvent) ={'>'} void</Td>
        <Td>Enter press handler</Td>
      </tr>
      <tr>
        <Td>onFocus</Td>
        <Td>(ev: FocusEvent) ={'>'} void</Td>
        <Td>Focus handler</Td>
      </tr>
      <tr>
        <Td>placeholder</Td>
        <Td>string | [string | undefined, string | undefined]</Td>
        <Td>Placeholder</Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>timeMax</Td>
        <Td>[number, number]</Td>
        <Td>End range time</Td>
      </tr>
      <tr>
        <Td>timeMin</Td>
        <Td>[number, number]</Td>
        <Td>Start range time</Td>
      </tr>
      <tr>
        <Td>value</Td>
        <Td>[string | string] | [Date | null, Date | null]</Td>
        <Td>Input fields values</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Section>
      <Tabs>
        <Tab title="Uncontrolled" tabKey={0}>
          <Uncontrolled />
        </Tab>
        <Tab title="Controlled" tabKey={1}>
          <Controlled />
        </Tab>
        <Tab title="Form" tabKey={2}>
          <Form />
        </Tab>
        <Tab title="Required" tabKey={3}>
          <Required />
        </Tab>
      </Tabs>
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

export default TimeRangePage;
