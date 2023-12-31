import {
  Code, H1, H2, P,
} from '@/components/typography';

const Home = () => (
  <article>
    <H1>Leda the React components library</H1>
    <P>
      Super simple and powerful forms. Versatile validation.
    </P>
    <P>
      Controlled and ucontrolled mode for form components.
    </P>
    <P>
      Supports React 16.8.0 and above (the one with hooks).
    </P>
    <P>
      <Code>npm i leda</Code>
    </P>

    <H2>Import and usage</H2>
    <P>Import and use components as any other:</P>
    <P>
      <Code>
        {'import { SomeComponent } from \'leda\''} <br />
        ... <br />
        {'<SomeComponent />'}
      </Code>
    </P>
  </article>
);

export default Home;
