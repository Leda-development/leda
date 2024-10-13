'use client';

import * as L from '@leda';
import {
  H1, H2, P, A, Section,
} from '@/components/typography';
import { Live } from '@/components/live';
import { ButtonValidationPropsTable, ValidationSection } from '@/sections';
import { log } from '@/utils';

const Page = () => (
  <article className="mb-10">
    <Section>

      <H1>Forms and validation</H1>

      <P>
        To create a form put the same value to the <b>form</b> attribute.
      </P>
      <P>
        All form attributes except <b>form</b> and <b>name</b> are optional. Buttons do not have names.
      </P>
      <P>
        Components can be controlled or uncontrolled, it does not matter, do as you like.
      </P>
      <P>
        All form data can be retrieved from the onClick event or using <A href="/form-helpers/form">form API</A>.
      </P>

      <Live scope={{ L, log }} className="mb-6">
        {`<>
  <L.Input
    form='testForm'
    name='inputField'
    placeholder='enter an email please'
    isRequired
    requiredMessage='Do not leave me empty'
    validator='email'
    invalidMessage={<i>Please enter a valid email</i>}
    _w-48
    _mb-3
  />
  <L.Button
    form='testForm'
    onValidationFail={({ invalidForms }) => log(invalidForms)}
    shouldScrollToInvalidFields
    scrollOffset={100}
    onClick={({ form }) => log(form)}
  >
    Submit
  </L.Button>
</>`}
      </Live>

      <ValidationSection all />
    </Section>

    <Section>

      <H2>Button validation props</H2>

      <L.Div _mb-6>
        <ButtonValidationPropsTable />
      </L.Div>
    </Section>
  </article>
);

export default Page;
