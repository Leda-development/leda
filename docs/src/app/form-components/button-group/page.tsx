'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import { Button, ButtonGroup } from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { H1, Td, TdCode } from '@/components/typography';
import { Live } from '@/components/live';
import { ValidationSection } from '@/sections/ValidationSection';
import { PropsTableSection } from '@/sections';

const ButtonGroupPage = () => (
  <article>
    <H1>ButtonGroup</H1>

    <PropsTableSection>
      <tr>
        <TdCode>data</TdCode>
        <TdCode>ArrayElement{'<T>'}[]</TdCode>
        <Td>
          Buttons data, an array of strings, numbers or objects.
          Use <b>textField</b> attribute with objects.
          Two or more buttons with the same text are not allowed
        </Td>
      </tr>
      <tr>
        <TdCode>defaultValue</TdCode>
        <TdCode>Value | Value[]</TdCode>
        <Td>Default value</Td>
      </tr>
      <tr>
        <TdCode>isDisabled</TdCode>
        <TdCode>boolean</TdCode>
        <Td>Disabled state</Td>
      </tr>
      <tr>
        <TdCode>onChange</TdCode>
        <TdCode>(ev: ChangeEvent{'<T>'}) ={'>'} void</TdCode>
        <Td>Change handler</Td>
      </tr>
      <tr>
        <TdCode>onClick</TdCode>
        <TdCode>
          (event: SubmitEvent) ={'>'} void
        </TdCode>
        <Td>Click handler</Td>
      </tr>
      <ShouldRender />
      <tr>
        <TdCode>textField</TdCode>
        <TdCode>string</TdCode>
        <Td>Text field in <b>data</b> objects</Td>
      </tr>
      <tr>
        <TdCode>theme</TdCode>
        <TdCode>...</TdCode>
        <Td />
      </tr>
      <tr>
        <TdCode>type</TdCode>
        <TdCode>{"'radio' | 'checkbox'"}</TdCode>
        <Td>
          Only one active button is allowed in the <i>radio</i> mode.
          Use <i>checkbox</i> if you want many.
          <i>radio</i> is default
        </Td>
      </tr>
      <tr>
        <TdCode>value</TdCode>
        <TdCode>T</TdCode>
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
