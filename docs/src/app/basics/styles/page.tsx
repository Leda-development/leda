'use client';

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import Image from 'next/image';
import {
  H1, H2, H3, P, Code, A,
} from '@/components/typography';
import { Live } from '@/components/live';

const Page = () => (
  <article>
    <H1>Styles</H1>

    <section className="mb-6">
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

      <section>
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
      </section>

      <section>
        <H3>Your own CSS</H3>

        <P>
          Feel free to overwrite default styles:
        </P>
        <P>
          <Code>{"import 'leda/dist/styles/leda.base.css';"}</Code>
          <br />
          <Code>{"import 'your-custom-css.css';"}</Code>
        </P>
      </section>
    </section>

    <P>All components on this site are styled by the default css.</P>

    <Live scope={{ L }}>
      {`
<L.Button
  onClick={() => {
    console.log('clicked')
  }}
>
  Click me
</L.Div>
        `}
    </Live>

    {/* <P>
        CSS does not get updates in minor and patch Leda updates
        so no minor or patch update will break your styles.
      </P> */}

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
    wrapper: 'ld-btn text-sky-500',
  }}
>
  Click me
</L.Div>
        `}
    </Live>
  </article>
);

export default Page;
