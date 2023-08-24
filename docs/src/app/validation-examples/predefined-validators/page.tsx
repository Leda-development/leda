'use client';

import * as L from '@leda';
import { Live } from '@/components/live';
import {
  Code, A, H1, P, THead, Table, Td, CodeBlock,
} from '@/components/typography';
import { log } from '@/utils';

export const loader = () => null;

const PredefinedValidatorPage = () => (
  <div>
    <H1>Predefined validators</H1>

    <P>
      Leda has a number of predefined validators both international and local.
    </P>

    <P>
      Feel free to contact contributors to add another one you think can be useful for you or other people.
    </P>

    <P>
      Another way to add a predefined validator is to make the job and send us a pull request.
    </P>

    <Table>
      <THead headers={['Type', 'Description']} />
      <tbody>
        <tr>
          <Td>
            <CodeBlock>
              type PredefinedValidator =
            </CodeBlock>
          </Td>
          <Td />
        </tr>
        <tr>
          <Td>
            <CodeBlock>
              {'| \'creditCardNumber\''}
            </CodeBlock>
          </Td>
          <Td>
            <Code>creditCardNumber</Code> uses a few algorithms <br />
            including <A target="_blank" href="https://en.wikipedia.org/wiki/Luhn_algorithm">Luhn algorithm</A> <br />
            to check if it is a valid credit card number.
          </Td>
        </tr>
        <tr>
          <Td>
            <CodeBlock>
              {'| \'email\''}
            </CodeBlock>
          </Td>
          <Td>
            <p>
              <Code>email</Code> checks if there is a <Code>@</Code> and a <Code>.</Code> in the right oder and quantity.
            </p>
            <p>Also checks that no forbidden symbols are present</p>
          </Td>
        </tr>
        <L.Tr>
          <Td>
            <CodeBlock>
              {'| \'url\''}
            </CodeBlock>
          </Td>
          <Td>
            <P>
              <Code>url</Code> checks different types of urls, e.g.
            </P>
            <P>
              foo.com <br />
              www.foo.com <br />
              http://foo.com/home <br />
              https://foo.com/home <br />
              https://localhost:9000/ <br />
              http://142.42.1.1/ <br />
              https://www.foo.com/foo/?bar=baz&abc=42&etc <br />
              etc. will pass.
            </P>
            <P>
              http:// <br />
              http://??/ <br />
              http:// shouldfail.com <br />
              http://3628126748 <br />
              http://1.1.1.1.1 <br />
              and other invalid urls will not pass validation
            </P>
            <P>
              Validation of non-latin characters is also supported. <br />
              E.g. you can validate Chinese, Arabic, Indian, cyrillic etc urls
            </P>
          </Td>
        </L.Tr>
      </tbody>
    </Table>

    <Live scope={{ L, log }}>
      {
          `
<>
  <L.Div _flex  _mb-3>
    <L.Input
      form='commonValidators'
      name='creditCard'
      validator='creditCardNumber'
      invalidMessage={<i>Please enter a valid card number</i>}
      isRequired
      placeholder='card number'
      _w-48
      _mr-3
    />
    <L.Input
      form='commonValidators'
      name='email'
      validator='email'
      invalidMessage={<i>Please enter a valid email</i>}
      isRequired
      placeholder='email'
      _w-48
      _mr-3
    />
    <L.Input
      form='commonValidators'
      name='url'
      validator='url'
      invalidMessage={<i>Please enter a valid url</i>}
      placeholder='url'
      _w-48
      _mr-3
    />
  </L.Div>
  <L.Button
    form='commonValidators'
    onValidationFail={({ invalidForms }) => log(invalidForms)}
    shouldScrollToInvalidFields
    scrollOffset={100}
    onClick={({ form }) => log(form)}
  >
    Submit
  </L.Button>
</>
  `
        }
    </Live>
  </div>
);

export default PredefinedValidatorPage;
