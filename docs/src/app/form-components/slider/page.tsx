'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import { Live } from '@/components/live';
import { CodeBlock, H1, Td } from '@/components/typography';
import { PropsTableSection, ValidationSection } from '@/sections';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';

const SliderPage = () => (
  <article>
    <H1>Slider</H1>
    <PropsTableSection>
      <tr>
        <Td>defaultValue</Td>
        <Td>number | number[]</Td>
        <Td>Default value</Td>
      </tr>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>In case you want to disable the component</Td>
      </tr>
      <tr>
        <Td>hasTooltip</Td>
        <Td>boolean</Td>
        <Td>Handlers can have tooltips. Or not</Td>
      </tr>
      <tr>
        <Td>labelType</Td>
        <Td>{"'current' | 'minmax'"}</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>max</Td>
        <Td>number</Td>
        <Td>Max value</Td>
      </tr>
      <tr>
        <Td>min</Td>
        <Td>number</Td>
        <Td>Min value</Td>
      </tr>
      <tr>
        <Td>minRange</Td>
        <Td>number</Td>
        <Td>Min range between handlers</Td>
      </tr>
      <tr>
        <Td>onChange</Td>
        <Td>
          <CodeBlock>
            {`(event: ChangeEvent) => void

===
interface ChangeEvent {
  component: {
    value: SliderValue | null | undefined,
    name?: string,
  },
}

type SliderValue = number | number[]
                  `}
          </CodeBlock>
        </Td>
        <Td>
          <p>Change handler</p>
        </Td>
      </tr>
      <tr>
        <Td>onMove</Td>
        <Td>
          <CodeBlock>
            {`(event: ChangeEvent) => void

===
interface ChangeEvent {
  component: {
    value: SliderValue | null | undefined,
    name?: string,
  },
}

type SliderValue = number | number[]
                  `}
          </CodeBlock>
        </Td>
        <Td>
          <p>Handlers drag handler</p>
        </Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>step</Td>
        <Td>number</Td>
        <Td>Deafult is 1</Td>
      </tr>
      <tr>
        <Td>theme</Td>
        <Td>
          PartialGlobalDefaultTheme[
          typeof COMPONENTS_NAMESPACES.calendar
          ]
        </Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>value</Td>
        <Td>number | number[] | null</Td>
        <Td>...</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Live scope={{ L }}>
      {
          `
<L.Slider
  onChange={({ component }) => console.log(component.value)}
>
  Click me
</L.Slider>
  `
          }
    </Live>

    <ValidationSection
      form
      name
    />
  </article>
);

export default SliderPage;
