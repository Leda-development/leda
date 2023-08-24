'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import { Button, ButtonGroup } from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { H1, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { ValidationSection } from '@/sections/ValidationSection';
import { PropsTableSection } from '@/sections';

const ButtonGroupPage = () => (
  <article>
    <H1>ButtonGroup</H1>

    <PropsTableSection>
      <tr>
        <Td>data</Td>
        <Td>ArrayElement{'<T>'}[]</Td>
        <Td>
          Buttons data, an array of strings, numbers or objects.
          Use <b>textField</b> attribute with objects.
          Two or more buttons with the same text are not allowed
        </Td>
      </tr>
      <tr>
        <Td>defaultValue</Td>
        <Td>Value | Value[]</Td>
        <Td>Default value</Td>
      </tr>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>Disabled state</Td>
      </tr>
      <tr>
        <Td>onChange</Td>
        <Td>(ev: ChangeEvent{'<T>'}) ={'>'} void</Td>
        <Td>Change handler</Td>
      </tr>
      <tr>
        <Td>onClick</Td>
        <Td>
          (event: SubmitEvent) ={'>'} void
        </Td>
        <Td>Click handler</Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>textField</Td>
        <Td>string</Td>
        <Td>Text field in <b>data</b> objects</Td>
      </tr>
      <tr>
        <Td>theme</Td>
        <Td>PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.button]</Td>
        <Td />
      </tr>
      <tr>
        <Td>type</Td>
        <Td>{"'radio' | 'checkbox'"}</Td>
        <Td>
          Only one active button is allowed in the <i>radio</i> mode.
          Use <i>checkbox</i> if you want many.
          <i>radio</i> is default
        </Td>
      </tr>
      <tr>
        <Td>value</Td>
        <Td>T</Td>
        <Td>The value, makes the component controllable</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Live scope={{ ButtonGroup }}>
      {
          `
<ButtonGroup
  data={[
    { text: 'One', val: 1 },
    { text: 'Two', val: 2 },
    { text: 'Three', val: 3 }
  ]}
  textField='text'
  onChange={({ component }) => console.log(component.value)}
/>`
        }
    </Live>

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

    <Live scope={{ ButtonGroup, Button }}>
      {`<>
<ButtonGroup
  form='myForm'
  name='myComponent'
  data={[
    { text: 'One', val: 1 },
    { text: 'Two', val: 2 },
    { text: 'Three', val: 3 }
  ]}
  textField='text'
  onChange={({ component }) => console.log(component.value)}
  type='checkbox'
  isRequired
  requiredMessage='Choose something'
  validator={(val) => val.length >=2}
  invalidMessage='choose at least two values'
/>
<br />
<Button
  form='myForm'
  onClick={({ form }) => console.log(form)}
>
  Submit
</Button>
</>`}
    </Live>
  </article>
);

export default ButtonGroupPage;
