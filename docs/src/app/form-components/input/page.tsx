'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import { UnderscoreClasses } from '@/components/commonProps';
import {
  A, Code, CodeBlock, H1, H2, P, Section, THead, Table, Td,
} from '@/components/typography';
import { Live } from '@/components/live';
import { CustomizationPropsTableSection, PropsTableSection, ValidationSection } from '@/sections';
import { Demos } from './Demos';

const InputPage = () => (
  <article>
    <H1>Input</H1>
    <PropsTableSection>
      <tr>
        <Td>allowedSymbols</Td>
        <Td>
          <CodeBlock>
            {`PredefinedAllowedSymbols | RegExp
            
type PredefinedAllowedSymbols = 'numbers'
            `}
          </CodeBlock>
        </Td>
        <Td>
          <P>
            Put <Code>numbers</Code> to allow numbers only or a RegExp to use your own pattern
          </P>
        </Td>
      </tr>
      <tr>
        <Td>defaultValue</Td>
        <Td>string | null</Td>
        <Td>Default value</Td>
      </tr>
      <tr>
        <Td>forbiddenSymbols</Td>
        <Td>
          <CodeBlock>
            {`PredefinedForbiddenSymbols | RegExp
            
type PredefinedForbiddenSymbols = 'numbers'
            `}
          </CodeBlock>
        </Td>
        <Td>
          <P>
            Put <Code>numbers</Code> to forbid numbers only or a RegExp to use your own pattern
          </P>
        </Td>
      </tr>
      <tr>
        <Td>hasClearButton</Td>
        <Td>boolean</Td>
        <Td>
          Whether or not to show a clear button inside the input element.
          Default is <Code>false</Code>
        </Td>
      </tr>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>Disable the component</Td>
      </tr>
      <tr>
        <Td>letterCase</Td>
        <Td>{"'lower' | 'upper'"}</Td>
        <Td />
      </tr>
      <tr>
        <Td>maxLength</Td>
        <Td>number</Td>
        <Td>Max number of characters</Td>
      </tr>
      <tr>
        <Td>onBlur</Td>
        <Td>
          <CodeBlock>
            {`(event: BlurEvent) => void

interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
    isValid: boolean,
  },
}
`}
          </CodeBlock>
        </Td>
        <Td>The event has a new field <Code>component</Code> which has all component data</Td>
      </tr>
      <tr>
        <Td><b>onChange</b></Td>
        <Td>
          <CodeBlock>
            {`(event: ChangeEvent) => void

type ChangeEvent = TypeEvent | ClearEvent | ResetEvent`}
          </CodeBlock>
        </Td>
        <Td>
          <P>
            The event has a new field <Code>component</Code> which has all component data.
          </P>
          <P>
            Event type depends on the way the value is changed.
          </P>
        </Td>
      </tr>
      <tr>
        <Td />
        <Td>
          <CodeBlock>
            {`interface TypeEvent extends React.ChangeEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
  },
}`}
          </CodeBlock>
        </Td>
        <Td>
          <P>
            <Code>TypeEvent</Code> appears when the value is changed by typing.
          </P>
        </Td>
      </tr>
      <tr>
        <Td />
        <Td>
          <CodeBlock>
            {`interface ClearEvent extends React.MouseEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
  },
}`}
          </CodeBlock>
        </Td>
        <Td>
          <P>
            <Code>ClearEvent</Code> appears when the value is changed by clicking clear button.
          </P>
        </Td>
      </tr>
      <tr>
        <Td />
        <Td>
          <CodeBlock>
            {`interface ResetEvent {
  currentTarget?: undefined,
  component: {
    value: string,
    name?: string,
  },
}`}
          </CodeBlock>
        </Td>
        <Td>
          <P>
            <Code>ResetEvent</Code> appears when the value is changed by <A href="/components/form">resetting value via <Code>form</Code> api</A>
          </P>
        </Td>
      </tr>
      <tr>
        <Td>onEnterPress</Td>
        <Td>
          <CodeBlock>
            {`interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
  },
}`}
          </CodeBlock>
        </Td>
        <Td>Enter press handler</Td>
      </tr>
      <tr>
        <Td>onFocus</Td>
        <Td>
          <CodeBlock>
            {`interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
    isValid: boolean,
  },
}`}
          </CodeBlock>
        </Td>
        <Td>Focus handler</Td>
      </tr>
      <tr>
        <Td>placeholder</Td>
        <Td>string</Td>
        <Td>Placeholder</Td>
      </tr>
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
<L.Input
  onChange={({ component }) => console.log(component.value)}
  form='input_form'
  name='input'
  isRequired
  requiredMessage='Please enter something'
  validator={(val) => val.length > 3}
  invalidMessage='No less than 4 symbols'
  _w-48
/>
<br />
<L.Button
  form='input_form'
  onClick={({ form }) => console.log(form)}
>
  Click me
</Button>
</>`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <Td>inputRender</Td>
        <Td>
          {'CustomRender<InputProps, InputState, React.InputHTMLAttributes<HTMLInputElement>>,'}
        </Td>
      </tr>
      <tr>
        <Td>invalidMessageRender</Td>
        <Td>
          {'CustomRender<ValidationProps, ValidationState, InvalidMessageProps>,'}
        </Td>
      </tr>
      <tr>
        <Td>wrapperRender</Td>
        <Td>
          {'CustomRender<InputProps, InputState, DivProps>'}
        </Td>
      </tr>
      <tr>
        <Td />
        <Td>
          <CodeBlock>
            {`interface CustomRender<P, S, E> {
  (props: RenderEvent<P, S, E>): React.ReactNode,
}

interface RenderEvent<P = {}, S = {}, E = {}> {
  Element: React.ElementType,
  componentProps: P,
  componentState: S,
  elementProps: E,
}`}
          </CodeBlock>
        </Td>
      </tr>
    </CustomizationPropsTableSection>

    <Live scope={{ L }}>
      {`() => {
  const [value, setValue] = React.useState('')

  return (
    <L.Input
      onChange={({ component }) => setValue(component.value)}
      value={value}
      placeholder='4 symbols and more plz'
      inputRender={({ Element, elementProps }) => {
        return (
          <>
            <Element {...elementProps} />
            <L.Icon
              icon='check'
              shouldRender={value.length >= 4}
              stroke='green'
              _mr-2
            />
          </>
        )
      }}
      _w-60
    />
  )
}

        `}
    </Live>

    <Section>
      <H2>Theme</H2>

      <Table>
        <THead headers={['Theme prop', 'CSS class name']} />
        <tbody>
          <tr>
            <Td>closeIcon</Td>
            <Td>ld-input-clear-icon</Td>
          </tr>
          <tr>
            <Td>icon</Td>
            <Td>ld-input-icon</Td>
          </tr>
          <tr>
            <Td>iconLeft</Td>
            <Td>ld-icon-left</Td>
          </tr>
          <tr>
            <Td>iconRight</Td>
            <Td>ld-icon-right</Td>
          </tr>
          <tr>
            <Td>input</Td>
            <Td>ld-input-element</Td>
          </tr>
          <tr>
            <Td>inputWrapper</Td>
            <Td>ld-input-element-wrapper</Td>
          </tr>
          <tr>
            <Td>inputWrapperDisabled</Td>
            <Td>ld-disabled</Td>
          </tr>
          <tr>
            <Td>inputWrapperFocused</Td>
            <Td>ld-focused</Td>
          </tr>
          <tr>
            <Td>inputWrapperInvalid</Td>
            <Td>ld-danger</Td>
          </tr>
          <tr>
            <Td>inputWrapperRequired</Td>
            <Td>ld-required</Td>
          </tr>
          <tr>
            <Td>wrapper</Td>
            <Td>ld-input-wrapper</Td>
          </tr>
        </tbody>
      </Table>

      <Live scope={{ L }}>
        {`
<L.Input
  form='themeInputForm'
  name='input'
  isRequired
  onChange={({ component }) => console.log(component.value)}
  _w-48
  theme={{
    inputWrapperRequired: 'border-orange-300'
  }}
/>
          `}
      </Live>
    </Section>
  </article>
);

export default InputPage;
