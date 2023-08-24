'use client';

import * as L from '@leda';
import { UnderscoreClasses } from '@/components/commonProps';
import {
  CodeBlock, H1, H2, P, Section, THead, Table, Td, propsTableCommonHeaders,
} from '@/components/typography';
import { Live } from '@/components/live';

const CollapsePage = () => (
  <article>
    <H1>Collapse</H1>

    <Section>
      <H2>Collapse props</H2>
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          <tr>
            <Td>activePanelKey</Td>
            <Td>string | string[] | null</Td>
            <Td>Active panel/panels keys</Td>
          </tr>
          <tr>
            <Td><b>children</b></Td>
            <Td>React.ReactNode</Td>
            <Td>Collapsible items</Td>
          </tr>
          <tr>
            <Td>isAccordion</Td>
            <Td>boolean</Td>
            <Td>Only one panel can be open in the uncontrolled mode if enabled</Td>
          </tr>
          <tr>
            <Td>onSelect</Td>
            <Td>
              <CodeBlock>
                {`CustomEventHandler<SelectEvent>

===
interface SelectEvent {
  component: {
    value: string | string[] | null,
  },
}
                  `}
              </CodeBlock>
            </Td>
            <Td>Panel select handler</Td>
          </tr>
          <tr>
            <Td>theme</Td>
            <Td>
              PartialGlobalDefaultTheme[
              typeof COMPONENTS_NAMESPACES.collapse
              ]
            </Td>
            <Td>...</Td>
          </tr>
        </tbody>
      </Table>
    </Section>

    <Section>
      <H2>Collapse.Heading props</H2>
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          <tr>
            <Td><b>children</b></Td>
            <Td>React.ReactNode</Td>
            <Td>Children</Td>
          </tr>
          <tr>
            <Td>iconRender</Td>
            <Td>{'CustomRender<HeadingProps, { }, IconProps>'}</Td>
            <Td>Heading icon customizator</Td>
          </tr>
          <tr>
            <Td>onClick</Td>
            <Td>{'React.MouseEventHandler<HTMLDivElement>'}</Td>
            <Td>Click handler</Td>
          </tr>
          <tr>
            <Td>wrapperRender</Td>
            <Td>{'CustomRender<HeadingProps, { }, HeadingWrapperProps>'}</Td>
            <Td>Wrapper element customizator</Td>
          </tr>
          <UnderscoreClasses />
        </tbody>
      </Table>
    </Section>

    <Section>
      <H2>Collapse.Body props</H2>
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          <tr>
            <Td><b>children</b></Td>
            <Td>React.ReactNode</Td>
            <Td>Children</Td>
          </tr>
          <tr>
            <Td>isLoading</Td>
            <Td>boolean</Td>
            <Td>Loading state</Td>
          </tr>
          <tr>
            <Td>onClose</Td>
            <Td>{'CustomEventHandler<BodyClickCustomEvent>'}</Td>
            <Td>Panel close handler</Td>
          </tr>
          <tr>
            <Td>onCloseByClick</Td>
            <Td>{'CustomEventHandler<BodyClickCustomEvent>'}</Td>
            <Td>Panel close handler triggered by a click</Td>
          </tr>
          <tr>
            <Td>onOpen</Td>
            <Td>{'CustomEventHandler<BodyClickCustomEvent>'}</Td>
            <Td>Panel open handler</Td>
          </tr>
          <tr>
            <Td>transition</Td>
            <Td>string</Td>
            <Td>
              <P>
                <a
                  href="https://developer.mozilla.org/ru/docs/Web/CSS/transition"
                  target="_blank"
                  className="text-cyan-700 underline"
                  rel="noreferrer"
                >
                  CSS transition format
                </a>.
              </P>
              <P>
                <i>height 250ms cubic-bezier(.4, 0, .2, 1)</i> by default
              </P>
            </Td>
          </tr>
          <tr>
            <Td>wrapperRender</Td>
            <Td>{'CustomRender<HeadingProps, { }, HeadingWrapperProps>'}</Td>
            <Td>Wrapper element customizator</Td>
          </tr>
          <UnderscoreClasses />
        </tbody>
      </Table>
    </Section>

    <Section>
      <H2>Collapse.Panel props</H2>
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          <tr>
            <Td><b>children</b></Td>
            <Td>React.ReactNode</Td>
            <Td>Children</Td>
          </tr>
          <tr>
            <Td>isDisabled</Td>
            <Td>boolean</Td>
            <Td>In case you want to disable the panel</Td>
          </tr>
          <tr>
            <Td>name</Td>
            <Td>string</Td>
            <Td>...</Td>
          </tr>
          <tr>
            <Td><b>panelKey</b></Td>
            <Td>string</Td>
            <Td>A key to put into Collapse activePanelKey prop</Td>
          </tr>
          <tr>
            <Td>wrapperRender</Td>
            <Td>{'CustomRender<PanelProps, { isClicked: boolean }, PanelWrapperProps>'}</Td>
            <Td>Wrapper element customizator</Td>
          </tr>
          <UnderscoreClasses />
        </tbody>
      </Table>
    </Section>

    <Live scope={{ L }}>
      {`
() => {
  const [activeKey, setActiveKey] = React.useState(['2']);

  return (
    <L.Collapse
      activePanelKey={activeKey}
      onSelect={(event) => setActiveKey(event.component.value)}
    >
      <L.Collapse.Panel panelKey="1">
        <L.Collapse.Heading><b>First panel heading</b></L.Collapse.Heading>
        <L.Collapse.Body>
          <L.Div _p-4>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            <br />
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </L.Div>
        </L.Collapse.Body>
      </L.Collapse.Panel>

      <L.Collapse.Panel
        panelKey="2"
      >
        <L.Collapse.Heading><b>Second panel heading</b></L.Collapse.Heading>
        <L.Collapse.Body>
          <L.Div _p-4>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            <br />
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </L.Div>
        </L.Collapse.Body>
      </L.Collapse.Panel>
    </L.Collapse>
  );
}
  `}
    </Live>
  </article>
);

export default CollapsePage;
