'use client';

import * as L from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { CodeBlock, H1, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { CustomizationPropsTableSection, PropsTableSection, ValidationSection } from '@/sections';
import { Demos } from './Demos';

const TextareaPage = () => (
  <article>
    <H1>Textarea</H1>
    <PropsTableSection>
      <tr>
        <Td>defaultValue</Td>
        <Td>string</Td>
        <Td>Default value</Td>
      </tr>
      <tr>
        <Td>children</Td>
        <Td>React.ReactNode</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>Disable the component</Td>
      </tr>
      <tr>
        <Td>maxLength</Td>
        <Td>number</Td>
        <Td>Max number of characters</Td>
      </tr>
      <tr>
        <Td>onBlur</Td>
        <Td>
          (event: BlurEvent) ={'>'} void
        </Td>
        <Td>Blur handler</Td>
      </tr>
      <tr>
        <Td><b>onChange</b></Td>
        <Td>(event: ChangeEvent{'<'}T{'>'}) ={'>'} void</Td>
        <Td>Value change handler</Td>
      </tr>
      <tr>
        <Td>onEnterPress</Td>
        <Td>
          (event: EnterPressEvent) ={'>'} void
        </Td>
        <Td>Enter press handler</Td>
      </tr>
      <tr>
        <Td>onFocus</Td>
        <Td>(event: FocusEvent) ={'>'} void</Td>
        <Td>Focus handler</Td>
      </tr>
      <tr>
        <Td>placeholder</Td>
        <Td>string</Td>
        <Td>Placeholder</Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>value</Td>
        <Td>string</Td>
        <Td>Component value</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Demos />

    <ValidationSection
      form
      isValid
      isRequired
      invalidMessage
      name
      requiredMessage
      shouldValidateUnmounted
      validator
    />

    <Live scope={{ L }}>
      {`<>
<L.Textarea
  onChange={({ component }) => console.log(component.value)}
  form='textarea_form'
  name='textarea'
  isRequired
  requiredMessage='Please enter something'
  validator={(val) => val.length > 3}
  invalidMessage='No less than 4 symbols'
  _w-96
/>
<br />
<L.Button
  form='textarea_form'
  onClick={({ form }) => console.log(form)}
>
  Click me
</Button>
</>`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <Td>
          wrapperRender
        </Td>
        <Td>
          <CodeBlock>
            {`({
  Element,
  elementprops,
  componentProps,
  componentState
}): React.ReactNode`}
          </CodeBlock>
        </Td>
        <Td>Customization</Td>
      </tr>
    </CustomizationPropsTableSection>

    <Live scope={{ L }}>
      {`
<L.Textarea
  onChange={({ component }) => console.log(component.value)}
  _w-48
/>
        `}
    </Live>
  </article>
);

export default TextareaPage;
