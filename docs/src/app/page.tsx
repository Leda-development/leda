'use client'

import * as L from '@leda';
import { Live } from '@/components/live';
import {
  A,
  Code, H1, H2, P,
} from '@/components/typography';
import { log } from '@/utils';

const Home = () => (
  <article className='mb-10'>
    <H1>Leda the React components library</H1>
    <P>
      Hi!
    </P>
    
    <section>
      <H2>This is the simplest Leda form</H2>
      <div>
        <Live scope={{ L, log }} className='mb-6'>
          {`() => {
  return (
    <>
      <L.Input
        form="leda-simplest-form"
        name="input"
        _w-60
        _mb-4
      />

      <L.Button
        form="leda-simplest-form"
        onClick={({ form }) => {
          log(form)
        }}
      >
        Submit
      </L.Button>
    </>
  )
}`}
        </Live>
      </div>

      <P>
        Components can be controlled or uncontrolled,
        all form data can be retrieved from the onClick event.
      </P>
      <P>
        To create a form just put the same name to the <b>form</b> attribute.
      </P>
      <P>
        Many examples use L. notaition. It is because we imported Leda as follows <Code>import * as L from '@leda'</Code>.
        It is just the namespace to let you use any Leda component in the live edit window.
      </P>
      <P>
        <Code>_w-60</Code> and <Code>_mb-4</Code> stand for <Code>className="mb-4 w-60"</Code>.
        It gets handy when you need <b>conditional CSS class names</b>.
      </P>

      <div>
        <Live scope={{ L, log }} className='mb-6'>
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
        Leda components can have both className and _your-class-name props.
      </P>
    </section>

    <section>
      <H2>Adding CSS classes to other component elements</H2>

      <div>
        <Live scope={{ L, log }} className='mb-6'>
          {`() => {
  return (
    <>
      <L.Input
        form="leda-simplest-form-2"
        name="input"
        isRequired
        theme={{
          wrapper: 'ld-wrapper w-60 mb-4',
          inputWrapperRequired: 'border-orange-300'
        }}
      />

      <L.Button
        form="leda-simplest-form-2"
        onClick={({ form }) => {
          log(form)
        }}
      >
        Submit
      </L.Button>
    </>
  )
}`}
        </Live>
      </div>
    </section>

    <section>
      <H2>And much more</H2>

      <P>
        <A href={"/basics/styles"}>
          Styles
        </A>
      </P>

      <P>
        <A href={"/basics/customization"}>
          Customization
        </A>
      </P>

      <P>
        <A href={"/basics/validation"}>
          Validation
        </A>
      </P>

      <P>
        <A href={"/form-helpers/form"}>
          Form helpers (submit forms programmaticaly)
        </A>
      </P>

      <P>
        <A href={"/validation-examples/predefined-validators"}>
          More validation examples
        </A>
      </P>
    </section>

    <section>
      <H2>Requirements</H2>
      <P>
        React 16.8.0 and above (the one with hooks).
      </P>
      <P>
        <Code>npm i leda</Code>
      </P>
    </section>
  </article>
);

export default Home;
