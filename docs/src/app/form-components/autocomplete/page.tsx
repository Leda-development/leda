'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import {
  H1, H2, Section, Table, Th, Td, CodeBlock,
} from '@/components/typography';
import { Live } from '@/components/live';
import { CustomizationPropsTableSection, PropsTableSection, ValidationSection } from '@/sections';
import { Demos } from './Demos';

const AutoCompletePage = () => (
  <article>
    <H1>AutoComplete</H1>
    <PropsTableSection>
      <tr>
        <Td>autoComplete</Td>
        <Td>string</Td>
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
        <Td>
          <b>data</b>
        </Td>
        <Td>
          T[]
        </Td>
        <Td>
          Data for the dropdown list.
          <br />
          If <b>data</b> is an array of objects, use <b>textField</b> to specify
          which {"object's"} field should be used as text for the dropdown items
        </Td>
      </tr>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>Disable the component</Td>
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
        <Td>hasClearButton</Td>
        <Td>boolean</Td>
        <Td>
          Whether or not to show a clear button inside the input element.
          Default is <b>false</b>
        </Td>
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
        <Td>isRequired</Td>
        <Td>boolean</Td>
        <Td>Validate the component as a required field</Td>
      </tr>
      <tr>
        <Td>minSearchLength</Td>
        <Td>number</Td>
        <Td>The minimal number of symbols that triggers the dropdown opening</Td>
      </tr>
      <tr>
        <Td>name</Td>
        <Td>string</Td>
        <Td>A component name</Td>
      </tr>
      <tr>
        <Td>noSuggestionsText</Td>
        <Td>React.ReactNode</Td>
        <Td>Text shown if nothing is found among suggestions</Td>
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
        <Td>shouldCorrectValue</Td>
        <Td>boolean</Td>
        <Td>
          Puts the last correct (present in <b>data</b>) value into the input field or leaves it empty.
          Is triggered by a blur event
        </Td>
      </tr>
      <tr>
        <Td>shouldShowAllSuggestions</Td>
        <Td>boolean</Td>
        <Td>Show all <b>data</b> elements regardless of what is in the input field</Td>
      </tr>
      <tr>
        <Td>searchFields</Td>
        <Td>string[]</Td>
        <Td>
          You can use any of the <b>data</b> {"object's"} fields for seraching
        </Td>
      </tr>
      <tr>
        <Td>sortSuggestions</Td>
        <Td>(a: T, b: T) ={'>'} number</Td>
        <Td>Sort dropdown items</Td>
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
        <Td>string | null</Td>
        <Td>Component value</Td>
      </tr>
      <tr>
        <Td>_[className]</Td>
        <Td>[x: string]: unknown</Td>
        <Td>E.g.: _width-40 adds css class <i>width-40</i> to the {"component's"} outer wrapper.</Td>
      </tr>
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
        <Td>
          itemRender <br />
          inputRender <br />
          invalidMessageRender <br />
          listRender <br />
          noSuggestionsRender
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
            <Td>container</Td>
            <Td>suggestion-wrapper</Td>
          </tr>
          <tr>
            <Td>containerVisible</Td>
            <Td>visible</Td>
          </tr>
          <tr>
            <Td>containerTop</Td>
            <Td>pos-top</Td>
          </tr>
          <tr>
            <Td>group</Td>
            <Td>suggestion-group</Td>
          </tr>
          <tr>
            <Td>groupLabel</Td>
            <Td>suggestion-group-label</Td>
          </tr>
          <tr>
            <Td>item</Td>
            <Td>suggestion-item</Td>
          </tr>
          <tr>
            <Td>itemHighlighted</Td>
            <Td>highlighted</Td>
          </tr>
          <tr>
            <Td>itemPlaceholder</Td>
            <Td>placeholder</Td>
          </tr>
          <tr>
            <Td>itemSelected</Td>
            <Td>selected</Td>
          </tr>
          <tr>
            <Td>list</Td>
            <Td>suggestion-list</Td>
          </tr>
          <tr>
            <Td>noSuggections</Td>
            <Td>nodata</Td>
          </tr>
        </tbody>
      </Table>
    </Section>
  </article>
);

export default AutoCompletePage;
