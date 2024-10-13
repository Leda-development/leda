'use client';

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import Image from 'next/image';
import {
  H1, H2, H3, P, Code, A,
  Section,
} from '@/components/typography';
import { Live } from '@/components/live';

const Page = () => (
  <article>
    <H1>Styles</H1>

    <Section>
      <H2>Default styles</H2>
      <P>
        Leda has some default styles so it is ready to use immediately.
      </P>
      <P>
        <Code>{"import 'leda/dist/styles/leda.base.css';"}</Code>
      </P>

      <P>
        There are a few ways to change styles:
      </P>

      <Section>
        <H3>Variables</H3>

        <Image
          src="/variables.png"
          alt="css variables list"
          width={300}
          height={300}
          className="mb-4"
        />

        <P>
          Each component has it's own set of variables covering every
          numeric or color value. So you can create your own variables file
          to change the way all components look.
        </P>
        <P>
          Just add it after default styles import:
        </P>
        <P>
          <Code>{"import 'leda/dist/styles/leda.base.css';"}</Code>
          <br />
          <Code>{"import 'your-variables.css';"}</Code>
        </P>
      </Section>
      <Section>
        <H2>Theme</H2>
        <P className="mt-4">
          Each Form and Layout component exposes a <Code>theme</Code> prop.
        </P>
        <P>
          It lets you add your own css-classes to any component's element.
        </P>

        <P>
          In this site we use
          {' '}<A target="_blank" href="https://tailwindcss.com/">Tailwind</A>{' '}
          utility classes:
        </P>

        <Live scope={{ L }}>
          {`
<L.Button
  theme={{
    wrapper: 'ld-btn bg-sky-500 border-sky-600',
  }}
>
  Click me
</L.Div>
            `}
        </Live>
      </Section>
    </Section>
  </article>
);

export default Page;
