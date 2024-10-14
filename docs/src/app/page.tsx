'use client';

import * as L from '@leda';
import { Live } from '@/components/live';
import {
  A,
  Code, H1, H2, Li, P,
  Section,
  Ul,
} from '@/components/typography';
import { log } from '@/utils';

const Home = () => (
  <article className="mb-10">
    <H1>Leda the React components library</H1>

    <P>Built-in forms, validation, customization etc.</P>

    <Section>
      <H2>Forms and validation</H2>

      <Ul>
        <Li>
          22 components to build forms
        </Li>
        <Li>
          declarative forms and validation
        </Li>
      </Ul>

      <P>
        Start as easy as this:
      </P>

      <div>
        <Live scope={{ Input: L.Input, Button: L.Button, log }} className="mb-6">
          {`<>
  <Input
    form="myForm" name="someName"
    _w-60 _mb-4 // tailwind css classes
  />

  <Button
    form="myForm"
    onClick={({ form }) => {
      log(form) // prints form data to the console
    }}
  >
    Submit
  </Button>
</>`}
        </Live>
      </div>

      <P>
        <A href="/basics/validation">
          More on forms and validation
        </A>
      </P>
    </Section>
    <Section>

      <H2>
        CSS classes
      </H2>
      <P>
        <Code>_w-60</Code> and <Code>_mb-4</Code> stand for <Code>className=&quot;mb-4 w-60&quot;</Code>.
        It gets handy when you need <b>conditional CSS class names</b>.
      </P>

      <P>
        Leda components can have both className and _your-class-name props.
      </P>

      <div>
        <Live scope={{ L, log }} className="mb-6">
          {`() => {
  const [isColored, setIsColored] = React.useState(false)

  return (
    <>
      <L.Div
        _mb-4
        _text-sky-600={isColored}
      >
        Hello world!
      </Div>

      <L.Button onClick={() => setIsColored(!isColored)} _mb-4>
        Toggle color
      </Button>
      
    </>
  )
}`}
        </Live>
      </div>

      <P>
        Many examples use L. notaition. We have imported Leda as follows: <Code>import * as L from &apos;@leda&apos;</Code>.
      </P>
      <P>
        L is just a namespace to get access to any Leda component in the live edit window.
      </P>
    </Section>

    <Section>
      <H2>Themes</H2>

      <P>
        All colors, sizes and other numeric values have corresponding <A href="/basics/styles">css variables</A> so you can change everything to make components look different.
      </P>

      <P>
        Also each component has a <b>theme</b> prop to add/replace css classes of any HTML element within the component.
      </P>

      <div>
        <Live scope={{ L, log }} className="mb-6">
          {`<L.Input
  theme={{
    wrapper: 'ld-wrapper w-60 mb-4',
    inputWrapper: 'ld-input-element-wrapper border-sky-500 hover:border-sky-700',
  }}
/>
`}
        </Live>
      </div>
    </Section>

    <Section>
      <H2>Requirements</H2>
      <P>
        React 16.8.0 and above (the one with hooks).
      </P>
      <P>
        <Code>npm i leda</Code>
      </P>
    </Section>

    <Section>
      <H2>Further reading</H2>

      <P>
        <A href="/basics/styles">
          Styles
        </A>
      </P>

      <P>
        <A href="/basics/customization">
          Customization
        </A>
      </P>

      <P>
        <A href="/form-helpers/form">
          Form helpers (submit forms programmaticaly)
        </A>
      </P>

      <P>
        <A href="/validation-examples/predefined-validators">
          More validation examples
        </A>
      </P>
    </Section>
  </article>
);

export default Home;
