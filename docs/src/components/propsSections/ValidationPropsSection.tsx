'use client'

import * as L from '@leda';
import { H2, P, Table, THead, Td, Section, Code, A } from '@/components/typography';

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
}) => {
  return (
    <Section>
      <H2>Validation</H2>
      <Table>
        <THead headers={['Name', 'Type', 'Description']} />
        <tbody>
          <L.Tr shouldRender={Boolean(all || form)}>
            <Td><b>form</b></Td>
            <Td>string</Td>
            <Td>Form name</Td>
          </L.Tr>
          <L.Tr shouldRender={Boolean(all || name)}>
            <Td><b>name</b></Td>
            <Td>string</Td>
            <Td>Component name</Td>
          </L.Tr>
          <L.Tr shouldRender={Boolean(all || isRequired)}>
            <Td>isRequired</Td>
            <Td>boolean</Td>
            <Td>If you don't want the field to be empty</Td>
          </L.Tr>
          <L.Tr shouldRender={Boolean(all || isValid)}>
            <Td>isValid</Td>
            <Td>boolean</Td>
            <Td>Controlled valid state</Td>
          </L.Tr>
          <L.Tr shouldRender={Boolean(all || invalidMessage)}>
            <Td>invalidMessage</Td>
            <Td>ReactNode</Td>
            <Td>Text to show when the value does not match requirements</Td>
          </L.Tr>
          <L.Tr shouldRender={Boolean(all || invalidMessageRender)}>
            <Td>invalidMessageRender</Td>
            <Td>
              {`RenderEvent => ReactNode`}
            </Td>
            <Td>Invalid message customizator</Td>
          </L.Tr>
          <L.Tr shouldRender={Boolean(all || requiredMessage)}>
            <Td>requiredMessage</Td>
            <Td>ReactNode</Td>
            <Td>Text to show when the field is not filled</Td>
          </L.Tr>
          <L.Tr shouldRender={Boolean(all || shouldValidateUnmounted)}>
            <Td>shouldValidateUnmounted</Td>
            <Td>boolean</Td>
            <Td>The field can still affect form submission even if it is not rendered</Td>
          </L.Tr>

          <L.Tr shouldRender={Boolean(all || validator)}>
            <Td>validator</Td>
            <Td>
              <L.Div className='whitespace-pre'>
                {`Validator
| PredefinedValidator
| RegExp
| ValidatorObject[]`}
              </L.Div>
            </Td>
            <Td>

            </Td> 
          </L.Tr>
          <L.Tr shouldRender={Boolean(all || validator)}>
            <Td></Td>
            <Td>
              <L.Div className='whitespace-pre'>
{`interface Validator {
  (value: any): boolean,
}`}
              </L.Div>
            </Td>
            <Td>
              <P>
                A validator is a function that takes a value and returns true or false depending on the logic it contains
              </P>
              <P>
                E.g. <Code>{`(value) => value.length > 4`}</Code>
              </P>
            </Td>
          </L.Tr>
          <L.Tr>
            <Td></Td>
            <Td>
              <L.Div className='whitespace-pre'>
{`type PredefinedValidator =
  | 'creditCardNumber'
  | 'email'
  | 'url'
`}
              </L.Div>
            </Td>
            <Td>
              <P>
                See <A href='/examples/predefined-validators'>predefined validators</A>
              </P>
            </Td>
          </L.Tr>
          <L.Tr>
            <Td></Td>
            <Td>
              <L.Div className='whitespace-pre'>
{`interface ValidatorObject {
  validator: PredefinedValidator | RegExp | Validator,
  invalidMessage?: string,
}`}
              </L.Div>
            </Td>
            <Td>
              <P>
                <Code>ValidatorObject</Code> is useful wnen you need to validate a value against
                several validators and show inividual messages for each. <br />
                Just use an array of validator objects.
              </P>
              <P>
                E.g.
              <L.Div className='whitespace-pre'>
{`[
  {
    validator: (value) => value.length > 4,
    invalidMessage: 'More than 4 sympols please'
  },
  {
    validator: /^\\w+$/,
    invalidMessage: 'Only a-z, A-Z, 0-9 and _ are allowed'
  }
]`}
                </L.Div>
              </P>
            </Td>
          </L.Tr>
        </tbody>
      </Table>
    </Section>
  );
};