'use client';

import { Button } from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import {
  H1, H2, Td, TdCode,
} from '@/components/typography';
import { Live } from '@/components/live';
import { PropsTableSection } from '@/sections';
import { ButtonValidationPropsTable } from '@/sections/ValidationSection';

const ButtonPage = () => (
  <article>
    <H1>Button</H1>

    <PropsTableSection>
      <tr>
        <TdCode>isDisabled</TdCode>
        <TdCode>boolean</TdCode>
        <Td>Disabled state</Td>
      </tr>
      <tr>
        <TdCode>isLoading</TdCode>
        <TdCode>boolean</TdCode>
        <Td>Loading state</Td>
      </tr>
      <tr>
        <TdCode>onClick</TdCode>
        <TdCode>
          (event: SyntheticBaseEvent) ={'>'} void
        </TdCode>
        <Td>Click handler</Td>
      </tr>
      <ShouldRender />
      <tr>
        <TdCode>theme</TdCode>
        <TdCode>
          ...
        </TdCode>
        <Td />
      </tr>
      <tr>
        <TdCode>type</TdCode>
        <TdCode>{"React.ButtonHTMLAttributes<{}>['type']"}</TdCode>
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
