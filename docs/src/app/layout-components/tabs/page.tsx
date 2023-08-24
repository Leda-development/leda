'use client';

import * as L from '@leda';
import { UnderscoreClasses } from '@/components/commonProps';
import {
  H1, H2, Section, THead, Table, Td, propsTableCommonHeaders,
} from '@/components/typography';
import { Live } from '@/components/live';

const TabsPage = () => (
  <article>
    <H1>Tabs</H1>

    <Section>
      <H2>Tabs props</H2>
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          <tr>
            <Td>activeTabKey</Td>
            <Td>string | number</Td>
            <Td>Active tab number</Td>
          </tr>
          <tr>
            <Td>children</Td>
            <Td>React.ReactNode</Td>
            <Td>Tabs</Td>
          </tr>
          <tr>
            <Td>onChange</Td>
            <Td>(ev: ChangeEvent) ={'>'} void</Td>
            <Td>Tabs change handler</Td>
          </tr>
          <tr>
            <Td>shouldScrollTabs</Td>
            <Td>boolean</Td>
            <Td>Horizontal tabs scroll</Td>
          </tr>
          <tr>
            <Td>tabContentNode</Td>
            <Td>HTMLElement | null</Td>
            <Td>DOM-node to put tab content in</Td>
          </tr>
          <tr>
            <Td>theme</Td>
            <Td>
              PartialGlobalDefaultTheme[
              typeof COMPONENTS_NAMESPACES.tabs
              ]
            </Td>
            <Td>...</Td>
          </tr>
          <UnderscoreClasses />
        </tbody>
      </Table>
    </Section>

    <Section>
      <H2>Tab props</H2>
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          <tr>
            <Td>children</Td>
            <Td>React.ReactNode</Td>
            <Td>Tab content</Td>
          </tr>
          <tr>
            <Td>isDisabled</Td>
            <Td>boolean</Td>
            <Td>In case you want the tab to be disabled</Td>
          </tr>
          <tr>
            <Td>tabKey</Td>
            <Td>string | number</Td>
            <Td>Tab number, should start from 0</Td>
          </tr>
          <tr>
            <Td>theme</Td>
            <Td>
              PartialGlobalDefaultTheme[
              typeof COMPONENTS_NAMESPACES.tabs
              ]
            </Td>
            <Td>...</Td>
          </tr>
          <tr>
            <Td>title</Td>
            <Td>string | React.ReactNode</Td>
            <Td>Tab title</Td>
          </tr>
          <UnderscoreClasses />
        </tbody>
      </Table>
    </Section>

    <Live scope={{ L }}>
      {`
() => {
  const [selected, setSelected] = React.useState(0);

  return (
    <L.Tabs
      activeTabKey={selected}
      onChange={(ev) => setSelected(ev.component.value)}
    >
      <L.Tab title={'Tab 1'} tabKey={0}>
        <div className='p-4'>Tab 1 content</div>
      </L.Tab>
      <L.Tab title={'Tab 2'} tabKey={1}>
        <div className='p-4'>Tab 2 content</div>
      </L.Tab>
      <L.Tab title={'Tab 3'} tabKey={2}>
        <div className='p-4'>Tab 3 content</div>
      </L.Tab>
    </L.Tabs>
  );
};
  `}
    </Live>
  </article>
);

export default TabsPage;
