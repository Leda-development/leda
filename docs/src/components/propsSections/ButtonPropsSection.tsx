'use client';

import {
  P, Table, THead, Td, Code, CodeBlock,
} from '@/components/typography';

export const ButtonSection = () => (
  <Table>
    <THead headers={['Name', 'Type', 'Description']} />
    <tbody>
      <tr>
        <Td><b>form</b></Td>
        <Td>string | string[]</Td>
        <Td><Code>Button</Code> can be attached to a form or to several forms</Td>
      </tr>
      <tr>
        <Td>onClick</Td>
        <Td>{'(SubmitEvent) => void'}</Td>
        <Td>
          <p>Form submit handler.</p>
          <p>It does not work if the form has invalid fields</p>
        </Td>
      </tr>
      <tr>
        <Td />
        <Td>
          <CodeBlock>
            {`interface SubmitEvent
  extends React.MouseEvent<HTMLButtonElement> {
    form?: {
      [formName: string]: {
        [fieldName: string]: Field,
      },
    },
    forms?: Form[],
  }`}
          </CodeBlock>
        </Td>
        <Td>
          <P>
            Submit event is a plain click event with <Code>form</Code> and <Code>forms</Code> fields being added.
          </P>
          <P>
            <Code>form</Code> and <Code>forms</Code> have the same form data structured differently.
          </P>
          <P>
            <Code>form</Code> is an object-like structure. <br />
            <Code>forms</Code> gives the same data in an array-like structure.
          </P>
          <P>
            When the button is attached to several forms <Code>form</Code> is empty
          </P>
        </Td>
      </tr>
      <tr>
        <Td>onValidationFail</Td>
        <Td>
          <CodeBlock>
            {`type ValidationFailEvent =
  React.MouseEvent<HTMLButtonElement>
    & { invalidForms: Form[] }`}
          </CodeBlock>
        </Td>
        <Td>
          <P>
            It fires when the button is clicked and the form has invalid fields.
          </P>
          <P>
            <Code>onClick</Code> handler does not start
          </P>
        </Td>
      </tr>
      <tr>
        <Td />
        <Td>
          <CodeBlock>
            {`interface Form {
  name: string,
  fields: Field[],
}`}
          </CodeBlock>
        </Td>
        <Td />
      </tr>
      <tr>
        <Td />
        <Td>
          <CodeBlock>
            {`interface Field {
  invalidMessages?: string[],
  isRequired: boolean,
  isValid: boolean,
  name: string,
  requiredMessage?: string,
  reset: () => void,
  setIsValid: SetState<boolean>,
  setMessages: SetState<string[] | undefined>,
  shouldValidateUnmounted: boolean,
  validators: ValidatorObject[],
  value: any,
}`}
          </CodeBlock>
        </Td>
        <Td>
          <P>
            <Code>Field</Code> has all available data for a particular form field
          </P>
        </Td>
      </tr>
      <tr>
        <Td>scrollDelay</Td>
        <Td>number</Td>
        <Td>How many seconds the form should wait before scrolling to invalid fields</Td>
      </tr>
      <tr>
        <Td>scrollOffset</Td>
        <Td>number</Td>
        <Td>How many pixels should be added between the screen top and the first invalid field</Td>
      </tr>
      <tr>
        <Td>shouldScrollToInvalidFields</Td>
        <Td>boolean</Td>
        <Td>Scroll to invalid fields on button click</Td>
      </tr>
    </tbody>
  </Table>
);
