'use client';

import * as L from '@leda';
import { Live } from '@/components/live';
import { CodeBlock, H1, Td } from '@/components/typography';
import { PropsTableSection, ValidationSection } from '@/sections';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';

const SwitcherPage = () => (
  <article>
    <H1>Switcher</H1>
    <PropsTableSection>
      <tr>
        <Td>children</Td>
        <Td>React.ReactNode</Td>
        <Td>Label content</Td>
      </tr>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>In case you want to disable the component</Td>
      </tr>
      <tr>
        <Td>onChange</Td>
        <Td>
          <CodeBlock>
            {`(event: ChangeEvent) => void

===
interface ChangeEvent extends React.MouseEvent<HTMLDivElement> {
  component: {
    name?: string,
    value: boolean,
  },
}
              `}
          </CodeBlock>
        </Td>
        <Td>
          <p>Change handler</p>
        </Td>
      </tr>
      <tr>
        <Td>onClick</Td>
        <Td>
          <CodeBlock>
            {'(ev: React.MouseEvent<HTMLDivElement>) => void,'}
          </CodeBlock>
        </Td>
        <Td>
          Handlers drag handler
        </Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>theme</Td>
        <Td>
          PartialGlobalDefaultTheme[
          typeof COMPONENTS_NAMESPACES.switcher
          ]
        </Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>value</Td>
        <Td>boolean</Td>
        <Td>The value</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Live scope={{ L }}>
      {
          `
<L.Switcher
  onChange={({ component }) => console.log(component.value)}
>
  Click me
</L.Switcher>
  `
        }
    </Live>

    <ValidationSection
      form
      name
    />
  </article>
);

export default SwitcherPage;
