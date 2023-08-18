'use client'

import * as L from '@leda';
import { H1, H2, P, Code, } from '@/components/typography';
import { Live } from '@/components/live';
import { ButtonSection, ValidationSection } from '@/components/propsSections';
import { log } from '@/utils';

const CSSClassesProps = () => {
  return (
    <div>
    

<H1>Validation</H1>
      <P>
        Each Form component (except Button) has Validation props
        which help validate user input, show messages etc. 
      </P>

      <P>
        <Code>form</Code> and <Code>name</Code> are obligatorty fields to enable validation.
      </P>

      <ValidationSection all />

      <H2>Button validation props</H2>

      <ButtonSection />

        <Live scope={{ L, log }}>
          {
          `
<>
  <L.Input
    form='testForm'
    name='inputField'
    placeholder='enter an email please'
    isRequired
    requiredMessage='Do not leave me empty'
    validator='email'
    invalidMessage={<i>Please enter a valid email</i>}
    _w-48
    _mb-3
  />
  <L.Button
    form='testForm'
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
        
      <p>
        See Validation examples section for more.
      </p>
    </div>

  )
}

export default CSSClassesProps;