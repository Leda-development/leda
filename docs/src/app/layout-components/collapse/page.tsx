'use client';

import { H1, Td } from '@/components/typography';
import { PropsTableSection } from '@/sections';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { MainDemo } from './MainDemo';

const CollapsePage = () => (
  <article>
    <H1>Collapse</H1>

    <PropsTableSection>
      <tr>
        <Td><b>children</b></Td>
        <Td>React.ReactNode</Td>
        <Td>Content</Td>
      </tr>
      <tr>
        <Td>isOpen</Td>
        <Td>boolean</Td>
        <Td>Component state (controlled mode)</Td>
      </tr>
      <tr>
        <Td>onToggle</Td>
        <Td>{'(ev: { isOpen: boolean }) => void'}</Td>
        <Td>Toggle handler, the event contains the new state</Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>summary</Td>
        <Td>React.ReactNode</Td>
        <Td>Collapse summary</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <MainDemo />

  </article>
);

export default CollapsePage;
