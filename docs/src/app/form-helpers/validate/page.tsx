'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import { Live } from '@/components/live';
import {
  Code, H1, H2, P, Section, THead, Table, Td, propsTableCommonHeaders,
} from '@/components/typography';

const ValidatePage = () => (
  <article>
    <H1>validate</H1>

    <P>
      <b>validate</b> exports a few methods that help validating a value
    </P>

    <P>
      <Code>{'import { validate } from leda'}</Code>
    </P>

    <P>or</P>

    <P>
      <Code>import * as L from leda</Code>
      <br />
      <Code>{"L.validate.email('123@gmial.com')"}</Code>
    </P>

    <Section>
      <H2>Common validators</H2>
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          <tr>
            <Td colSpan={3} />
          </tr>
          <tr>
            <Td>email</Td>
            <Td>{'(email: string) => boolean'}</Td>
            <Td>...</Td>
          </tr>
          <tr>
            <Td>url</Td>
            <Td>{'(url: string) => boolean'}</Td>
            <Td>...</Td>
          </tr>
          <tr>
            <Td>creditCardNumber</Td>
            <Td>{'(cardNumber: string) => boolean'}</Td>
            <Td>...</Td>
          </tr>
        </tbody>
      </Table>
    </Section>

    <Live scope={{ L }}>
      {`
() => {
  return (
    <>
      <L.Button
        onClick={() => {
          const number = prompt('Enter a card number')
          const isValid = L.validate.creditCardNumber(number)
          const result = isValid ? 'valid' : 'not valid'
          alert('The card number is ' + result)
        }}
      >
        click to validate your card number *
      </L.Button>

      <p className='text-xs mt-4'>
        * It is safe, validation takes place on the frontend side only, no data are stored or trasferred anywhere.
      </p>
    </>
  );
}`}
    </Live>
  </article>
);

export default ValidatePage;
