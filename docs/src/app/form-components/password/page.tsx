'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import {
  A, H1, P, Td, TdCode,
} from '@/components/typography';
import { CustomizationPropsTableSection, PropsTableSection, ValidationSection } from '@/sections';
import { Demos } from './Demos';

const PasswordPage = () => (
  <article>
    <H1>Password</H1>
    <PropsTableSection>
      <tr>
        <TdCode>allowedSymbols</TdCode>
        <TdCode>PredefinedAllowedSymbols | RegExp</TdCode>
        <Td>No other symbol shall pass</Td>
      </tr>
      <tr>
        <TdCode>defaultValue</TdCode>
        <TdCode>string | null</TdCode>
        <Td>Default value</Td>
      </tr>
      <tr>
        <TdCode>forbiddenSymbols</TdCode>
        <TdCode>PredefinedForbiddenSymbols | RegExp</TdCode>
        <Td>Symbols you {"don't"} want to appear</Td>
      </tr>
      <tr>
        <TdCode>hasClearButton</TdCode>
        <TdCode>boolean</TdCode>
        <Td>
          Whether or not to show a clear button inside the input element.
          Default is <b>false</b>
        </Td>
      </tr>
      <tr>
        <TdCode>isDisabled</TdCode>
        <TdCode>boolean</TdCode>
        <Td>Disable the component</Td>
      </tr>
      <tr>
        <TdCode>letterCase</TdCode>
        <TdCode>{"'lower' | 'upper'"}</TdCode>
        <Td />
      </tr>
      <tr>
        <TdCode>maxLength</TdCode>
        <TdCode>number</TdCode>
        <Td>Max number of characters</Td>
      </tr>
      <tr>
        <TdCode>minPasswordEvaluationLength</TdCode>
        <TdCode>number</TdCode>
        <Td>Minimal number of symbols to start evaluating password strength, default is 0</Td>
      </tr>
      <tr>
        <TdCode>onBlur</TdCode>
        <TdCode>
          (event: BlurEvent) ={'>'} void
        </TdCode>
        <Td>Blur handler</Td>
      </tr>
      <tr>
        <TdCode>onChange</TdCode>
        <TdCode>(event: ChangeEvent{'<'}T{'>'}) ={'>'} void</TdCode>
        <Td>Value change handler</Td>
      </tr>
      <tr>
        <TdCode>onEnterPress</TdCode>
        <TdCode>
          (event: EnterPressEvent) ={'>'} void
        </TdCode>
        <Td>Enter press handler</Td>
      </tr>
      <tr>
        <TdCode>onFocus</TdCode>
        <TdCode>(event: FocusEvent) ={'>'} void</TdCode>
        <Td>Focus handler</Td>
      </tr>
      <tr>
        <TdCode>passwordRules</TdCode>
        <TdCode>
          {`PasswordRules[]

===
interface PasswordRule {
  rule: RegExp | ((password: string) => boolean),
  ruleMessage: string,
}
          `}
        </TdCode>
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
        <TdCode>passwordStrength</TdCode>
        <TdCode>{'(password: string) => React.ReactNode'}</TdCode>
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
        <TdCode>value</TdCode>
        <TdCode>string | null</TdCode>
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
        <TdCode>
          inputRender <br />
          invalidMessageRender <br />
          passwordVisibilityRender <br />
          wrapperRender
        </TdCode>
        <TdCode>
          {`({
  Element,
  elementprops,
  componentProps,
  componentState
}): React.ReactNode`}
        </TdCode>
        <Td>Customization</Td>
      </tr>
    </CustomizationPropsTableSection>

  </article>
);

export default PasswordPage;
