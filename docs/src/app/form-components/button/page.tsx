'use client';

import { Button } from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { H1, H2, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { PropsTableSection } from '@/sections';
import { ButtonValidationPropsTable } from '@/sections/ValidationSection';

const ButtonPage = () => (
  <article>
    <H1>Button</H1>

    <PropsTableSection>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>Disabled state</Td>
      </tr>
      <tr>
        <Td>isLoading</Td>
        <Td>boolean</Td>
        <Td>Loading state</Td>
      </tr>
      <tr>
        <Td>onClick</Td>
        <Td>
          (event: SyntheticBaseEvent) ={'>'} void
        </Td>
        <Td>Click handler</Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>theme</Td>
        <Td>PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.button]</Td>
        <Td />
      </tr>
      <tr>
        <Td>type</Td>
        <Td>{"React.ButtonHTMLAttributes<{}>['type']"}</Td>
        <Td>Button type</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Live scope={{ Button }}>
      {
          `
<Button
  
>
  Hello World!
</Button>
  `
        }
    </Live>

    <H2>Validation props</H2>
    <ButtonValidationPropsTable />
  </article>
);

export default ButtonPage;
