'use client';

import * as L from '@leda';
import {
  H1, H2, P, Code, Section, Table, Th, Td,
} from '@/components/typography';
import { Live } from '@/components/live';

const Page = () => (
  <article>
    <H1>Customization</H1>

    <P>
      Component elements can be changed by using <Code>...Render</Code> props.
    </P>

    <P>
      Each <Code>...Render</Code> prop requires a function: <Code>{'RenderEvent => React.ReactNode'}</Code>
    </P>

    <P>
      RenderEvent has the original elemnent and all its props.
    </P>

    <Section>
      <H2>Adding attributes to elements</H2>

      <div className="mb-4">
        <Live scope={{ L }}>
          {`
<L.Input
  inputRender={({ Element, elementProps }) => <Element {...elementProps} aria-test-attribute />}
  _w-48
/>`}
        </Live>
      </div>

      <P>Each component has its own set of customizators, see the documentation.</P>

    </Section>

    <Section>
      <H2>RenderEvent props</H2>

      <Table>
        <thead>
          <tr>
            <Th className="text-left">Name</Th>
            <Th className="text-left">Description</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Element</Td>
            <Td>The element, use it or replace it to a different one</Td>
          </tr>
          <tr>
            <Td>elementProps</Td>
            <Td>Element props, all you need to make the element work properly</Td>
          </tr>
          <tr>
            <Td>componentProps</Td>
            <Td>Component props in case you need something from the outer space</Td>
          </tr>
          <tr>
            <Td>componentState</Td>
            <Td>The component state in case you need to know what is going on in there</Td>
          </tr>
        </tbody>
      </Table>
    </Section>
  </article>
);

export default Page;
