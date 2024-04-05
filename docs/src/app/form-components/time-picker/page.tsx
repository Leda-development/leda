'use client';

import { Tabs, Tab } from '@leda/index';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { H1, Section, Td } from '@/components/typography';
import { PropsTableSection, ValidationSection } from '@/sections';
import { Controlled } from './_demo/Controlled';
import { Form } from './_demo/Form';
import { Required } from './_demo/Required';
import { Reset } from './_demo/Reset';
import { Uncontrolled } from './_demo/Uncontrolled';

const TimePickerPage = () => (
  <article>
    <H1>TimePicker</H1>

    <PropsTableSection>
      <tr>
        <Td>date</Td>
        <Td>Date | null</Td>
        <Td>...</Td>
      </tr>
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
        <Td>string</Td>
        <Td>Placeholder</Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>timeMax</Td>
        <Td>[number, number]</Td>
        <Td>Max allowed time, [hours, minutes]</Td>
      </tr>
      <tr>
        <Td>timeMin</Td>
        <Td>[number, number]</Td>
        <Td>Min allowed time, [hours, minutes]</Td>
      </tr>
      <tr>
        <Td>value</Td>
        <Td>string | Date | null</Td>
        <Td>Selected date</Td>
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
        <Tab title="Reset" tabKey={3}>
          <Reset />
        </Tab>
        <Tab title="Required" tabKey={4}>
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

export default TimePickerPage;
