'use client';

import * as L from '@leda';
import { Live } from '@/components/live';
import {
  CodeBlock, H1, H2, P, Section, THead, Table, Td,
} from '@/components/typography';

const FormPage = () => (
  <article>
    <H1>form</H1>

    <Section>
      <H2>form interfaces</H2>
      <Table>
        <THead headers={['Type', 'Description']} />
        <tbody>
          <tr>
            <Td />
            <Td>
              <b>L.form</b> is a function that allows performing actions upon
            </Td>
          </tr>
          <tr>
            <Td>
              <CodeBlock>
                {`(formName: string, fieldNames?: string | string[])
  => FormFieldsHelpers 
`}
              </CodeBlock>
            </Td>
            <Td>
              <ul>
                <li>- a form</li>
                <li>- form components</li>
              </ul>
            </Td>
          </tr>
          <tr>
            <Td>
              <CodeBlock>
                {'(formName: string, fieldName: string) => FormFieldHelpers'}
              </CodeBlock>
            </Td>
            <Td>
              <ul>
                <li>- a single form component</li>
              </ul>
              <p className="mt-2">depending on the parameters you pass</p>
            </Td>
          </tr>
          <tr>
            <Td />
            <Td>
              <p>
                L.form() returns a collection of methods
              </p>
            </Td>
          </tr>
          <tr>
            <Td>
              <CodeBlock>
                {`interface FormFieldHelpers {
  get: () => FormGetField | undefined,
  remove: () => void,
  reset: () => boolean,
  validate:
    (warpedValidator?: ExternalValidator | ExternalValidator[])
      => Field | undefined,
}

interface FormFieldsHelpers {
  get: () => FormGetField[],
  remove: () => void,
  reset: () => boolean,
  validate: () => Field[],
}
`}
              </CodeBlock>
            </Td>
            <Td>
              <P>
                <b>get</b> returns component/form data
              </P>
              <P className="mt-2">
                <b>remove</b> deletes a component or a whole form so they are not avaliable anymore and their data get lost
              </P>
              <P className="mt-2">
                <b>reset</b> resets components to their empty/default state
              </P>
              <P className="mt-2">
                <b>validate</b> triggers validation, no need to submit the form
              </P>
            </Td>
          </tr>
          <tr>
            <Td>
              <CodeBlock>
                {`interface FormGetField {
  isFilled: boolean,
  isRequired: boolean,
  isValid: boolean,
  name: string,
  value: any,
}

interface Field {
  invalidMessages?: string[],
  isRequired: boolean,
  isValid: boolean,
  name: string,
  requiredMessage?: string,
  reset: () => void,
  setIsValid: SetState<boolean>,
  setMessages: SetState<string[] | undefined>,
  shouldValidateUnmounted: boolean,
  validators: NormalizedValidatorObject[],
  value: any,
}

interface ExternalValidator {
  validator: Validator | Validator[],
  invalidMessage?: string,
}
`}
              </CodeBlock>
            </Td>
            <Td>Some more interfaces</Td>
          </tr>
        </tbody>
      </Table>
    </Section>

    <Section>
      <H2>Single form field manipulations</H2>

      <Live scope={{ L }}>
        {`
() => {
  return (
    <>
      <L.Input
        form='test-form-1'
        name='test-form-input-1'
        _w-48
        _mb-4
      />

      <L.Input
        form='test-form-1'
        name='test-form-input-2'
        _w-48
        _mb-4
      />

      <L.Input
        form='test-form-1'
        name='test-form-input-3'
        _w-48
        _mb-4
      />

      <L.Button
        form='test-form-1'
        onClick={({ form }) => console.log(form)}
      >
        Submit 
      </L.Button>

      <L.Button
        onClick={() => console.log(L.form('test-form-1', 'test-form-input-1').get())}
        _ml-4
      >
        get
      </L.Button>

      <L.Button
        onClick={() => console.log(L.form('test-form-1', 'test-form-input-1').validate())}
        _ml-4
      >
        validate
      </L.Button>

      <L.Button
        onClick={() => console.log(L.form('test-form-1', 'test-form-input-1').reset())}
        _ml-4
      >
        reset
      </L.Button>

      <L.Button
        onClick={() => console.log(L.form('test-form-1', 'test-form-input-1').remove())}
        _ml-4
      >
        remove
      </L.Button>
    </>
  );
}`}
      </Live>
    </Section>

    <Section>
      <H2>Multiple form fields manipulations</H2>

      <Live scope={{ L }}>
        {`
() => {
  return (
    <>
      <L.Input
        form='test-form-2'
        name='test-form-input-1'
        _w-48
        _mb-4
      />

      <L.Input
        form='test-form-2'
        name='test-form-input-2'
        _w-48
        _mb-4
      />

      <L.Input
        form='test-form-2'
        name='test-form-input-3'
        _w-48
        _mb-4
      />

      <L.Button
        form='test-form-2'
        onClick={({ form }) => console.log(form)}
      >
        Submit 
      </L.Button>

      <L.Button
        onClick={() => console.log(L.form('test-form-2', ['test-form-input-1', 'test-form-input-2']).get())}
        _ml-4
      >
        get
      </L.Button>

      <L.Button
        onClick={() => console.log(L.form('test-form-2', ['test-form-input-1', 'test-form-input-2']).validate())}
        _ml-4
      >
        validate
      </L.Button>

      <L.Button
        onClick={() => console.log(L.form('test-form-2', ['test-form-input-1', 'test-form-input-2']).reset())}
        _ml-4
      >
        reset
      </L.Button>

      <L.Button
        onClick={() => console.log(L.form('test-form-2', ['test-form-input-1', 'test-form-input-2']).remove())}
        _ml-4
      >
        remove
      </L.Button>
    </>
  );
}`}
      </Live>
    </Section>

    <Section>
      <H2>Whole form manipulations</H2>

      <Live scope={{ L }}>
        {`
() => {
  return (
    <>
      <L.Input
        form='test-form-3'
        name='test-form-input-1'
        _w-48
        _mb-4
      />

      <L.Input
        form='test-form-3'
        name='test-form-input-2'
        _w-48
        _mb-4
      />

      <L.Input
        form='test-form-3'
        name='test-form-input-3'
        _w-48
        _mb-4
      />

      <L.Button
        form='test-form-3'
        onClick={({ form }) => console.log(form)}
      >
        Submit 
      </L.Button>

      <L.Button
        onClick={() => console.log(L.form('test-form-3').get())}
        _ml-4
      >
        get
      </L.Button>

      <L.Button
        onClick={() => console.log(L.form('test-form-3').validate())}
        _ml-4
      >
        validate
      </L.Button>

      <L.Button
        onClick={() => console.log(L.form('test-form-3').reset())}
        _ml-4
      >
        reset
      </L.Button>

      <L.Button
        onClick={() => console.log(L.form('test-form-3').remove())}
        _ml-4
      >
        remove
      </L.Button>
    </>
  );
}`}
      </Live>
    </Section>
  </article>
);

export default FormPage;
