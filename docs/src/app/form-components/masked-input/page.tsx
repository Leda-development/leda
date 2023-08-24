'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { CodeBlock, H1, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { CustomizationPropsTableSection, PropsTableSection, ValidationSection } from '@/sections';
import { Demos } from './Demos';

const MaskedInputPage = () => (
  <article>
    <H1>MaskedInput</H1>
    <PropsTableSection>
      <tr>
        <Td>defaultValue</Td>
        <Td>string | null</Td>
        <Td>Default value</Td>
      </tr>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>Disable the component</Td>
      </tr>
      <tr>
        <Td><b>mask</b></Td>
        <Td>string</Td>
        <Td>
          <p># — number (0-9)</p>
          <p>l — latin alphabet letter (a-Z), will be lowercased</p>
          <p>L — latin alphabet letter (a-Z), will be uppercased</p>
          <p>c — cyrillic alphabet letter (а-Я), will be lowercased</p>
          <p>C — cyrillic alphabet letter (а-Я), will be uppercased</p>
          <p>x - any symbol</p>
          <p>w - a number (0-9) or latin alphabet symbol (a-Z)</p>
          <p>z - a number (0-9) or latin alphabet symbol (a-Z) or cyrillic alphabet symbol</p>
          <p className="mt-4">Some examples</p>
          <p>{'"+52 (###) ###-##-##" // +52 (123) 456-78-90 (phone number)'}</p>
          <p>{'"#### #### #### ####" // 1234 5678 9012 3456 (bank card number)'}</p>
          <p>{'"LL#########LL" // CA123456789NL (international post tracking number)'}</p>
        </Td>
      </tr>
      <tr>
        <Td>onBlur</Td>
        <Td>
          (event: BlurEvent) ={'>'} void
        </Td>
        <Td>Blur handler</Td>
      </tr>
      <tr>
        <Td>onChange</Td>
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
      <tr>
        <Td>placeholderChar</Td>
        <Td>string</Td>
        <Td>_ by default</Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>value</Td>
        <Td>string | null</Td>
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
<L.MaskedInput
  mask='LL#########LL'
  onChange={({ component }) => console.log(component.value)}
  form='mi_form'
  name='mi'
  isRequired
  requiredMessage='Please enter something'
  validator={(val) => val.length > 3}
  invalidMessage='No less than 4 symbols'
  _w-48
/>
<br />
<L.Button
  form='mi_form'
  onClick={({ form }) => console.log(form)}
>
  Click me
</Button>
</>`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <Td>
          inputRender <br />
          invalidMessageRender <br />
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
<L.MaskedInput
  mask='#### #### #### ####'
  onChange={({ component }) => console.log(component.value)}
  _w-48
/>
        `}
    </Live>
  </article>
);

export default MaskedInputPage;
