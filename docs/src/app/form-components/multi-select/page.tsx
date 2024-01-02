'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import {
  A, CodeBlock, H1, P, Td, TdCode,
} from '@/components/typography';
import { Live } from '@/components/live';
import { CustomizationPropsTableSection, PropsTableSection, ValidationSection } from '@/sections';
import { Demos } from './Demos';
import { PATHS } from '@/constants';
import { MainDemo } from './MainDemo';

const MultiSelectPage = () => (
  <article>
    <H1>MultiSelect</H1>
    <PropsTableSection>
      <tr>
        <Td>autoComplete</Td>
        <Td>string</Td>
        <Td>
          <P>Browser autofill, off is the default value.</P>
          <P>Works as&nbsp;
            <A
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
              target="_blank"
              className="text-cyan-700 underline"
            >
              HTML autoComplete attribute
            </A>
          </P>
        </Td>
      </tr>
      <tr>
        <Td>canSelectAll</Td>
        <Td>boolean</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>compareObjectsBy</Td>
        <Td>
          <CodeBlock>
            {`T extends object
  ? ((suggestionListItems: SomeObject) => any)
    | string
  : never`}
          </CodeBlock>
        </Td>
      </tr>
      <tr>
        <Td>
          <b>data</b>
        </Td>
        <Td>
          <CodeBlock>
            {`
(object | null)[] 
  | (string | number | null)[]
  | null
`}
          </CodeBlock>
        </Td>
        <Td>
          Data for the dropdown list.
          <br />
          If <b>data</b> is an array of objects, use <b>textField</b> to specify
          which {"object's"} field should be used as text for the dropdown items
        </Td>
      </tr>
      <tr>
        <Td>defaultValue</Td>
        <Td>T</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>filterRule</Td>
        <Td>{"'smart' | 'startsWith' | 'includes'"}</Td>
        <Td>
          Search mode, <b>smart</b> is default, looks for one or several words regardless of their order,
          can be slow if <b>data</b> has thousands of elements or more
        </Td>
      </tr>
      <tr>
        <Td>groupBy</Td>
        <Td>{'(option: Value) => string | undefined'}</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>hasCheckBoxes</Td>
        <Td>boolean</Td>
        <Td>Checkboxes in the dropdown list</Td>
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
        <Td>isLoading</Td>
        <Td>boolean</Td>
        <Td>Display a loading icon inside the dropdown</Td>
      </tr>
      <tr>
        <Td>isOpen</Td>
        <Td>boolean</Td>
        <Td>Control the dropdown state</Td>
      </tr>
      <tr>
        <Td>maxSelected</Td>
        <Td>number</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>maxTags</Td>
        <Td>number</Td>
        <Td>
          Max number of elements shown separately as tags.
          After exceeding this number the elements will be grouped as {'"n values selected"'}
        </Td>
      </tr>
      <tr>
        <Td>messages</Td>
        <TdCode>
          {
`MultiSelectMessages

====

interface MultiSelectMessages {
  nothingFound: React.ReactNode,
}`
          }
        </TdCode>
        <Td>
          <P>
            Customize component text labels
          </P>
          <P>
            Consider using <A href={PATHS.ledaProvider}>Leda provider</A> to set messages globally.
          </P>
        </Td>
      </tr>
      <tr>
        <Td>onBlur</Td>
        <Td>
          (event: BlurEvent) ={'>'} void
        </Td>
        <Td>Blur handler</Td>
      </tr>
      <tr>
        <Td><b>onChange</b></Td>
        <Td>(event: ChangeEvent{'<'}T{'>'}) ={'>'} void</Td>
        <Td>Value change handler</Td>
      </tr>
      <tr>
        <Td>onFocus</Td>
        <Td>(event: FocusEvent) ={'>'} void</Td>
        <Td>Focus handler</Td>
      </tr>
      <tr>
        <Td>placeholder</Td>
        <Td>string</Td>
        <Td>Placeholder</Td>
      </tr>
      <tr>
        <Td>shouldHideInput</Td>
        <Td>boolean</Td>
        <Td>Renders the component without an input field</Td>
      </tr>
      <tr>
        <Td>shouldKeepSuggestions</Td>
        <Td>boolean</Td>
        <Td>Suggestions do not disappear from the list on selection</Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>shouldSelectedGoFirst</Td>
        <Td>boolean</Td>
        <Td>Selected values go first in the list</Td>
      </tr>
      <tr>
        <Td>sortSuggestions</Td>
        <Td>(a: T, b: T) ={'>'} number</Td>
        <Td>Sort dropdown list items</Td>
      </tr>
      <tr>
        <Td>textField</Td>
        <Td>T extends object ? string : never</Td>
        <Td>
          It is mandatory if <b>data</b> is an array of objects, <b>textField</b> specifies which {"object's"} field is used to get dropdown item text value.
          No effect if <b>data</b> is an array of strings
        </Td>
      </tr>
      <tr>
        <Td>value</Td>
        <Td>T</Td>
        <Td>Component value</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <MainDemo />

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
<L.MultiSelect
  data={['Argentina', 'Spain', 'Mexico', 'Columbia', 'Peru', 'Chile', 'Costa Rica', 'Puerto Rico']}
  onChange={({ component }) => console.log(component.value)}
  form='multiselect_form'
  name='multiselect'
  isRequired
  requiredMessage='Please enter something'
  validator={(val) => val.length > 3}
  invalidMessage='No less than 4 items'
  _w-48
/>
<br />
<L.Button
  form='multiselect_form'
  onClick={({ form }) => console.log(form)}
>
  Click me
</L.Button>
</>`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <Td>
          inputRender <br />
          itemRender <br />
          invalidMessageRender <br />
          listRender <br />
          noSuggestionsRender <br />
          selectAllItemRender <br />
          tagRender <br />
          tagsUnionRender <br />
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

    <Live scope={{ L }}>
      {`
<L.MultiSelect
  data={['Argentina', 'Spain', 'Mexico', 'Columbia', 'Peru', 'Chile', 'Costa Rica', 'Puerto Rico']}
  onChange={({ component }) => console.log(component.value)}
  _w-48
/>
        `}
    </Live>
  </article>
);

export default MultiSelectPage;
