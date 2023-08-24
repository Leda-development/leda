'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import {
  H1, H2, P, Code, A,
} from '@/components/typography';
import { Live } from '@/components/live';

const Page = () => (
  <article>
    <H1>Styles</H1>

    <H2>Default styles</H2>
    <P className="mt-4">
      For rapid development you can use dafault Leda styles and enhance it later.
    </P>
    <P>
      First import or copy the css file into your project.
    </P>
    <P>
      <Code>{"import ledaStyles from 'leda/dist/styles/leda.light.css';"}</Code>
    </P>
    <P>
      Then modify the file or add new css to rewrite the default styles.
    </P>

    <P>All components on this site are styled by the default css.</P>

    <Live scope={{ L }}>
      {`
<L.Button
  isDisabled
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
      It gives access to css classes of a component.
    </P>

    <P>
      E.g. Button component has a few css classes:
    </P>
    <P className="pl-4">
      <Code>button-wrapper</Code> with basic component styles
    </P>
    <P className="pl-4">
      <Code>disabled</Code> for the disabled state
    </P>

    <P>
      and more, see the docs for the Button component.
    </P>

    <P>
      The classes can be replaced/augmented as follows (in this site we use
      {' '}<A target="_blank" href="https://tailwindcss.com/">Tailwind</A>{' '}
      utility classes):
    </P>

    <Live scope={{ L }}>
      {`
<L.Button
  theme={{
    wrapper: 'pt-2 pb-1 px-4 bg-sky-100 border border-sky-300 hover:border-sky-200 text-sky-500 rounded-md text-xs',
    disabled: 'bg-stone-100 border-stone-300 hover:border-stone-200 text-stone-500 cursor-not-allowed'
  }}
  isDisabled
>
  Click me
</L.Div>
        `}
    </Live>

    <P>
      The code above changes default classes for one component.
      To apply changes globally use <A href="/components/leda-provider">Leda</A> provider:
    </P>

    <Live scope={{ L }}>
      {`
<L.Leda
  theme={{
    button: {
      wrapper: 'pt-2 pb-1 px-4 bg-orange-100 border border-orange-300 hover:border-orange-200 text-orange-500 rounded-md text-xs',
      disabled: 'bg-stone-100 border-stone-300 hover:border-stone-200 text-stone-500 cursor-not-allowed'
    }
  }}
>
  <L.Button
    isDisabled
  >
    Click me harder
  </L.Button>
</L.leda>
        `}
    </Live>
  </article>
);

export default Page;
