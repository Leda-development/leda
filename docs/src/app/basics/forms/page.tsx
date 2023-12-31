'use client';

import * as L from '@leda';

import { H1, P, Code } from '@/components/typography';
import { Live } from '@/components/live';
import { log } from '@/utils';

const Page = () => (
  <article>
    <H1>Forms</H1>
    <P>
      A Leda form is a set of form components with the same <Code>form</Code> prop value.
    </P>

    <P>
      <Code>Button</Code> click event has all form data.
    </P>

    <Live scope={{ L, log }}>
      {
          `
<>
  <L.Input
    form='testForm'
    name='inputField'
    _w-48
    _mb-3
  />
  <L.Button
    form='testForm'
    onClick={({ form }) => log(form)}
  >
    Submit
  </L.Button>
</>
  `
}
    </Live>
  </article>
);

export default Page;
