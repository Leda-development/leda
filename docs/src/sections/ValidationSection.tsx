import * as L from '@leda';
import {
  Code, H2, P, Section, Table, Td, TdCode, THead, CodeBlock, A, propsTableCommonHeaders,
} from '@/components/typography';

export const ValidationSection = ({
  all,
  form,
  name,
  isRequired,
  isValid,
  invalidMessage,
  invalidMessageRender,
  requiredMessage,
  shouldValidateUnmounted,
  validator,
}: {
  all?: boolean,
  form?: boolean,
  name?: boolean,
  isRequired?: boolean,
  isValid?: boolean,
  invalidMessage?: boolean,
  invalidMessageRender?: boolean,
  requiredMessage?: boolean,
  shouldValidateUnmounted?: boolean,
  validator?: boolean,
}) => (
  <Section>
    <H2>Validation</H2>
    <Table>
      <THead headers={propsTableCommonHeaders} />
      <tbody>
        <L.Tr shouldRender={Boolean(all || form)}>
          <TdCode><b>form</b></TdCode>
          <TdCode>string</TdCode>
          <Td>Form name</Td>
        </L.Tr>
        <L.Tr shouldRender={Boolean(all || name)}>
          <TdCode><b>name</b></TdCode>
          <TdCode>string</TdCode>
          <Td>Component name</Td>
        </L.Tr>
        <L.Tr shouldRender={Boolean(all || isRequired)}>
          <TdCode>isRequired</TdCode>
          <TdCode>boolean</TdCode>
          {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
          <Td>{"If you don't want the field to be empty"}</Td>
        </L.Tr>
        <L.Tr shouldRender={Boolean(all || isValid)}>
          <TdCode>isValid</TdCode>
          <TdCode>boolean</TdCode>
          <Td>Controlled valid state</Td>
        </L.Tr>
        <L.Tr shouldRender={Boolean(all || invalidMessage)}>
          <TdCode>invalidMessage</TdCode>
          <TdCode>ReactNode</TdCode>
          <Td>Text to show when the value does not match requirements</Td>
        </L.Tr>
        <L.Tr shouldRender={Boolean(all || invalidMessageRender)}>
          <TdCode>invalidMessageRender</TdCode>
          <TdCode>
            {'RenderEvent => ReactNode'}
          </TdCode>
          <Td>Invalid message customizator</Td>
        </L.Tr>
        <L.Tr shouldRender={Boolean(all || requiredMessage)}>
          <TdCode>requiredMessage</TdCode>
          <TdCode>ReactNode</TdCode>
          <Td>Text to show when the field is not filled</Td>
        </L.Tr>
        <L.Tr shouldRender={Boolean(all || shouldValidateUnmounted)}>
          <TdCode>shouldValidateUnmounted</TdCode>
          <TdCode>boolean</TdCode>
          <Td>The field can still affect form submission even if it is not rendered</Td>
        </L.Tr>

        <L.Tr shouldRender={Boolean(all || validator)}>
          <TdCode>validator</TdCode>
          <TdCode>
            {`Validator
| PredefinedValidator
| RegExp
| ValidatorObject[]`}
          </TdCode>
          <Td />
        </L.Tr>
        <L.Tr shouldRender={Boolean(all || validator)}>
          <Td />
          <TdCode>
            {`interface Validator {
  (value: any): boolean,
}`}
          </TdCode>
          <Td>
            <P>
              A validator is a function that takes a value and returns true or false depending on the logic it contains
            </P>
            <P>
              E.g. <Code>{'(value) => value.length > 4'}</Code>
            </P>
          </Td>
        </L.Tr>
        <L.Tr shouldRender={Boolean(all || validator)}>
          <Td />
          <TdCode>
            {`type PredefinedValidator =
  | 'creditCardNumber'
  | 'email'
  | 'url'
`}
          </TdCode>
          <Td>
            <P>
              See <A href="/examples/predefined-validators">predefined validators</A>
            </P>
          </Td>
        </L.Tr>
        <L.Tr shouldRender={Boolean(all || validator)}>
          <Td />
          <TdCode>
            {`interface ValidatorObject {
  validator: PredefinedValidator
             | RegExp
             | Validator,
  invalidMessage?: string,
}`}
          </TdCode>
          <Td>
            <P>
              <Code>ValidatorObject</Code> is useful wnen you need to validate a value against
              several validators and show inividual messages for each. <br />
              Just use an array of validator objects.
            </P>
            <P>
              E.g.
            </P>
            <CodeBlock>
              {`[
  {
    validator: (value) => value.length > 4,
    invalidMessage:
      'More than 4 sympols please'
  },
  {
    validator: /^\\w+$/,
    invalidMessage:
      'Only a-z, A-Z, 0-9 and _ are allowed'
  }
]`}
            </CodeBlock>
          </Td>
        </L.Tr>
      </tbody>
    </Table>
  </Section>
);

export const ButtonValidationPropsTable = () => (
  <Table>
    <THead headers={propsTableCommonHeaders} />
    <tbody>
      <tr>
        <TdCode><b>form</b></TdCode>
        <TdCode>string | string[]</TdCode>
        <Td><Code>Button</Code> can be attached to a form or to several forms</Td>
      </tr>
      <tr>
        <TdCode>onClick</TdCode>
        <TdCode>{'(SubmitEvent) => void'}</TdCode>
        <Td>
          <p>Form submit handler.</p>
          <p>It does not work if the form has invalid fields</p>
        </Td>
      </tr>
      <tr>
        <Td />
        <TdCode>
          {`interface SubmitEvent
  extends React.MouseEvent<HTMLButtonElement> {
    form?: {
      [formName: string]: {
        [fieldName: string]: Field,
      },
    },
    forms?: Form[],
  }`}
        </TdCode>
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
        <TdCode>onValidationFail</TdCode>
        <TdCode>
          {`type ValidationFailEvent =
  React.MouseEvent<HTMLButtonElement>
    & { invalidForms: Form[] }`}
        </TdCode>
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
        <TdCode>
          {`interface Form {
  name: string,
  fields: Field[],
}`}
        </TdCode>
        <Td />
      </tr>
      <tr>
        <Td />
        <TdCode>
          {`interface Field {
  invalidMessages?: string[],
  isRequired: boolean,
  isValid: boolean,
  name: string,
  requiredMessage?: string,
  reset: () => void,
  setIsValid: SetState<boolean>,
  setMessages: SetState<string[] | undefined>,
  suggestion?: Suggestion | null,
  shouldValidateUnmounted: boolean,
  validators: ValidatorObject[],
  value: any,
}`}
        </TdCode>
        <Td>
          <P>
            <Code>Field</Code> has all available data for a particular form field
          </P>
        </Td>
      </tr>
      <tr>
        <TdCode>scrollDelay</TdCode>
        <TdCode>number</TdCode>
        <Td>How many seconds the form should wait before scrolling to invalid fields</Td>
      </tr>
      <tr>
        <TdCode>scrollOffset</TdCode>
        <TdCode>number</TdCode>
        <Td>How many pixels should be added between the screen top and the first invalid field</Td>
      </tr>
      <tr>
        <TdCode>shouldScrollToInvalidFields</TdCode>
        <TdCode>boolean</TdCode>
        <Td>Scroll to invalid fields on button click</Td>
      </tr>
    </tbody>
  </Table>
);
