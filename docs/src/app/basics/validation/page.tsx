'use client';

import * as L from '@leda';
import {
  H1, H2, P, Code,
} from '@/components/typography';
import { Live } from '@/components/live';
import { ButtonValidationPropsTable, ValidationSection } from '@/sections';
import { log } from '@/utils';

const Page = () => (
  <article>
    <H1>Validation</H1>

    <Live scope={{ L, log }} className='mb-6'>
      {`
<>
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

    <P>
      Each Form component (except Button) has Validation props
      which help validate user input, show messages etc.
    </P>

    <P>
      <Code>form</Code> and <Code>name</Code> are obligatorty fields to enable validation.
    </P>

    <ValidationSection all />

    <H2>Button validation props</H2>

    <ButtonValidationPropsTable />

    <P>
      See Validation examples section for more.
    </P>
  </article>
);

export default Page;
