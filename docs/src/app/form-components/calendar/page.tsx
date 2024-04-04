'use client';

import { Tab, Tabs } from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { H1, Section, Td } from '@/components/typography';
import { PropsTableSection, ValidationSection } from '@/sections';
import { Uncontrolled } from './_demo/Uncontrolled';
import { Controlled } from './_demo/Controlled';
import { Form } from './_demo/Form';
import { Reset } from './_demo/Reset';
import { Required } from './_demo/Required';

const CalendarPage = () => (
  <article className='mb-20'>
    <H1>Calendar</H1>

    <PropsTableSection>
      <tr>
        <Td>hasTodayButton</Td>
        <Td>boolean</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>max</Td>
        <Td>Date</Td>
        <Td>Max available date</Td>
      </tr>
      <tr>
        <Td>min</Td>
        <Td>Date</Td>
        <Td>Min available date</Td>
      </tr>
      <tr>
        <Td>name</Td>
        <Td>string</Td>
        <Td>Component name</Td>
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
        <Td>value</Td>
        <Td>Date</Td>
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

export default CalendarPage;
