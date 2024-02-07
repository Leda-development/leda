'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import {
  H1, H2, Section, Table, Th, Td, TdCode, P, A,
} from '@/components/typography';
import { Live } from '@/components/live';
import { CustomizationPropsTableSection, PropsTableSection, ValidationSection } from '@/sections';
import { UnderscoreClasses } from '@/components/commonProps';
import { PATHS } from '@/constants';
import { MainDemo } from './MainDemo';

const AutoCompletePage = () => (
  <article>
    <H1>AutoComplete</H1>
    <PropsTableSection>
      <tr>
        <TdCode>autoComplete</TdCode>
        <TdCode>string</TdCode>
        <Td>
          <p>Browser autofill, off is the default value.</p>
          <p>Works as&nbsp;
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
              target="_blank"
              className="text-cyan-700 underline"
              rel="noreferrer"
            >
              HTML autoComplete attribute
            </a>
          </p>
        </Td>
      </tr>
      <tr>
        <TdCode>
          <b>data</b>
        </TdCode>
        <TdCode>
          T[]
        </TdCode>
        <Td>
          Data for the dropdown list.
          <br />
          If <b>data</b> is an array of objects, use <b>textField</b> to specify
          which {"object's"} field should be used as text for the dropdown items
        </Td>
      </tr>
      <tr>
        <TdCode>isDisabled</TdCode>
        <TdCode>boolean</TdCode>
        <Td>Disable the component</Td>
      </tr>
      <tr>
        <TdCode>filterRule</TdCode>
        <TdCode>{"'smart' | 'startsWith' | 'includes'"}</TdCode>
        <Td>
          Search mode, <b>smart</b> is default, looks for one or several words regardless of their order,
          can be slow if <b>data</b> has thousands of elements or more
        </Td>
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
        <TdCode>isLoading</TdCode>
        <TdCode>boolean</TdCode>
        <Td>Display a loading icon inside the dropdown</Td>
      </tr>
      <tr>
        <TdCode>isOpen</TdCode>
        <TdCode>boolean</TdCode>
        <Td>Control the dropdown state</Td>
      </tr>
      <tr>
        <TdCode>isRequired</TdCode>
        <TdCode>boolean</TdCode>
        <Td>Validate the component as a required field</Td>
      </tr>
      <tr>
        <TdCode>messages</TdCode>
        <TdCode>
          {
`AutoCompleteMessages

====

interface AutoCompleteMessages {
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
        <TdCode>minSearchLength</TdCode>
        <TdCode>number</TdCode>
        <Td>The minimal number of symbols that triggers the dropdown opening</Td>
      </tr>
      <tr>
        <TdCode>name</TdCode>
        <TdCode>string</TdCode>
        <Td>A component name</Td>
      </tr>
      <tr>
        <TdCode>onBlur</TdCode>
        <TdCode>
          (event: BlurEvent) ={'>'} void
        </TdCode>
        <Td>Blur handler</Td>
      </tr>
      <tr>
        <TdCode><b>onChange</b></TdCode>
        <TdCode>(event: ChangeEvent{'<'}T{'>'}) ={'>'} void</TdCode>
        <Td>Value change handler</Td>
      </tr>
      <tr>
        <TdCode>onFocus</TdCode>
        <TdCode>(event: FocusEvent) ={'>'} void</TdCode>
        <Td>Focus handler</Td>
      </tr>
      <tr>
        <TdCode>placeholder</TdCode>
        <TdCode>string</TdCode>
        <Td>Placeholder</Td>
      </tr>
      <tr>
        <TdCode>shouldCorrectValue</TdCode>
        <TdCode>boolean</TdCode>
        <Td>
          Puts the last correct (present in <b>data</b>) value into the input field or leaves it empty.
          Is triggered by a blur event
        </Td>
      </tr>
      <tr>
        <TdCode>shouldShowAllSuggestions</TdCode>
        <TdCode>boolean</TdCode>
        <Td>Show all <b>data</b> elements regardless of what is in the input field</Td>
      </tr>
      <tr>
        <TdCode>shouldShowEmptySuggestionsList</TdCode>
        <TdCode>boolean</TdCode>
        <Td>False is default, pass true to enable Nothing found message</Td>
      </tr>
      <tr>
        <TdCode>searchFields</TdCode>
        <TdCode>string[]</TdCode>
        <Td>
          You can use any of the <b>data</b> {"object's"} fields for seraching
        </Td>
      </tr>
      <tr>
        <TdCode>sortSuggestions</TdCode>
        <TdCode>(a: T, b: T) ={'>'} number</TdCode>
        <Td>Sort dropdown items</Td>
      </tr>
      <tr>
        <TdCode>textField</TdCode>
        <TdCode>T extends object ? string : never</TdCode>
        <Td>
          It is mandatory if <b>data</b> is an array of objects, <b>textField</b> specifies which {"object's"} field is used to get dropdown item text value.
          No effect if <b>data</b> is an array of strings
        </Td>
      </tr>
      <tr>
        <TdCode>value</TdCode>
        <TdCode>string | null</TdCode>
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
<L.AutoComplete
  data={['Argentina', 'Spain']}
  onChange={({ component }) => console.log(component.value)}
  form='autocomplete_form'
  name='autocomplete'
  isRequired
  requiredMessage='Please enter something'
  validator={(val) => val.length > 3}
  invalidMessage='No less than 4 symbols'
  _w-48
/>
<br />
<L.Button
  form='autocomplete_form'
  onClick={({ form }) => console.log(form)}
>
  Click me
</L.Button>
</>`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <TdCode>
          itemRender <br />
          inputRender <br />
          invalidMessageRender <br />
          listRender <br />
          noSuggestionsRender
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

    <Live scope={{ L }}>
      {`
<L.AutoComplete
  noSuggestionsRender={({ elementProps }) => (
    <div {...elementProps}>
      <div className='text-amber-400 font-bold'>
        no suggestions found
      </div>
    </div>
  )}
  data={['Argentina', 'Spain']}
  onChange={({ component }) => console.log(component.value)}
  _w-48
/>
        `}
    </Live>

    <Section>
      <H2>Suggestions list theme</H2>

      <Table>
        <thead>
          <tr>
            <Th>Theme prop</Th>
            <Th>CSS class name</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TdCode>container</TdCode>
            <TdCode>suggestion-wrapper</TdCode>
          </tr>
          <tr>
            <TdCode>containerVisible</TdCode>
            <TdCode>visible</TdCode>
          </tr>
          <tr>
            <TdCode>containerTop</TdCode>
            <TdCode>pos-top</TdCode>
          </tr>
          <tr>
            <TdCode>group</TdCode>
            <TdCode>suggestion-group</TdCode>
          </tr>
          <tr>
            <TdCode>groupLabel</TdCode>
            <TdCode>suggestion-group-label</TdCode>
          </tr>
          <tr>
            <TdCode>item</TdCode>
            <TdCode>suggestion-item</TdCode>
          </tr>
          <tr>
            <TdCode>itemHighlighted</TdCode>
            <TdCode>highlighted</TdCode>
          </tr>
          <tr>
            <TdCode>itemPlaceholder</TdCode>
            <TdCode>placeholder</TdCode>
          </tr>
          <tr>
            <TdCode>itemSelected</TdCode>
            <TdCode>selected</TdCode>
          </tr>
          <tr>
            <TdCode>list</TdCode>
            <TdCode>suggestion-list</TdCode>
          </tr>
          <tr>
            <TdCode>noSuggections</TdCode>
            <TdCode>nodata</TdCode>
          </tr>
        </tbody>
      </Table>
    </Section>
  </article>
);

export default AutoCompletePage;
