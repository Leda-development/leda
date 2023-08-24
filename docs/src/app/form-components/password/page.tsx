'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import {
  A, CodeBlock, H1, P, Td,
} from '@/components/typography';
import { CustomizationPropsTableSection, PropsTableSection, ValidationSection } from '@/sections';
import { Demos } from './Demos';

const PasswordPage = () => (
  <article>
    <H1>Password</H1>
    <PropsTableSection>
      <tr>
        <Td>allowedSymbols</Td>
        <Td>PredefinedAllowedSymbols | RegExp</Td>
        <Td>No other symbol shall pass</Td>
      </tr>
      <tr>
        <Td>defaultValue</Td>
        <Td>string | null</Td>
        <Td>Default value</Td>
      </tr>
      <tr>
        <Td>forbiddenSymbols</Td>
        <Td>PredefinedForbiddenSymbols | RegExp</Td>
        <Td>{"Symbols you don't want to appear"}</Td>
      </tr>
      <tr>
        <Td>hasClearButton</Td>
        <Td>boolean</Td>
        <Td>
          Whether or not to show a clear button inside the input element.
          Default is <b>false</b>
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
        <Td>minPasswordEvaluationLength</Td>
        <Td>number</Td>
        <Td>Minimal number of symbols to start evaluating password strength, default is 0</Td>
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
        <Td>passwordRules</Td>
        <Td>
          <CodeBlock>
            {`PasswordRules[]

===
interface PasswordRule {
  rule: RegExp | ((password: string) => boolean),
  ruleMessage: string,
}
              `}
          </CodeBlock>
        </Td>
        <Td>
          <P>
            Describe your password rules.
          </P>
          <P>
            The form could not be submitted until the password satisfies all rules
          </P>
        </Td>
      </tr>
      <tr>
        <Td>passwordStrength</Td>
        <Td>{'(password: string) => React.ReactNode'}</Td>
        <Td>
          <P>
            Password strength, evaluate it yourself and show the result.
          </P>
          <P>
            In the example below
            {' '}<A target="_blank" href="https://github.com/dropbox/zxcvbn">zxcvbn</A>
            {' '}package is used to evaluate the strength
          </P>
        </Td>
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

    <CustomizationPropsTableSection>
      <tr>
        <Td>
          inputRender <br />
          invalidMessageRender <br />
          passwordVisibilityRender <br />
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

  </article>
);

export default PasswordPage;
