'use client'

import * as L from '@leda';
import { H1, H2, P, Code, Section, Table, Th, Td } from '@/components/typography';
import { Live } from '@/components/live';

const Page = () => {
  return (
    <div>
      <H1>Customization</H1>
      
      <P>
        You have access to component elements by using <Code>...Render</Code> props.
      </P>
      <P>
        E.g. <Code>wrapperRender</Code> gives you access to the outer wrapper of a component.
      </P>
      <P>
        Each <Code>...Render</Code> prop requires a function: 
      </P>

      <P><Code>{`RenderEvent => React.ReactNode`}</Code></P>

      <P>Each component has its own set of customizators, see the documentation.</P>

      <Section>
        <H2>RenderEvent props</H2>  

        <Table>
          <thead>
            <tr>
              <Th className='text-left'>Name</Th>  
              <Th className='text-left'>Description</Th>
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

      <Section>
        <H2>A few examples</H2>
        
        <L.P _mt-6>
          Adding attributes to elements:
        </L.P>

          <Live scope={{ L }}>
{`
<L.Input
  inputRender={({ Element, elementProps }) => <Element {...elementProps} aria-test-attribute />}
  _w-48
/>`}
          </Live>
        
        <P>
          Completely replacing Element with another:
        </P>


          <Live scope={{ L }}>
{`
<L.Input
  wrapperRender={({ elementProps }) => <span {...elementProps} />}
  _w-48
/>`}
          </Live>

        <P>
          Or make a whatever combination you like.
        </P>

        <P>
          The only thing is that a valid React node must be returned.
        </P>
      </Section>
    </div>
  )
}

export default Page;