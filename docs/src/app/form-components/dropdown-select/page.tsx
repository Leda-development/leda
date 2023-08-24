'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import {
  CodeBlock, H1, P, A, Td,
} from '@/components/typography';
import { Live } from '@/components/live';
import { PropsTableSection, ValidationSection, CustomizationPropsTableSection } from '@/sections';
import { Demos } from './Demos';

const DropDownSelectPage = () => (
  <article>
    <H1>DropDownSelect</H1>

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
        <Td>
          boundingContainerRef
        </Td>
        <Td>
          {'React.RefObject<HTMLElement | { wrapper: HTMLElement | null }>'}
        </Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>compareObjectsBy</Td>
        <Td>
          {'T extends object ? ((suggestionListItem: T) => any) | string : never'}
        </Td>
        <Td>...</Td>
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
        <Td>defaultValue</Td>
        <Td>Value</Td>
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
        <Td>filterValue</Td>
        <Td>string</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>groupBy</Td>
        <Td>
          {'(option: T) => string | undefined'}
        </Td>
        <Td>...</Td>
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
        <Td>onFilterChange</Td>
        <Td>(event: ChangeEvent{'<'}T{'>'}) ={'>'} void</Td>
        <Td>Filter input field change handler</Td>
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
        <Td>searchFields</Td>
        <Td>string[]</Td>
        <Td>
          You can use any of the <b>data</b> {"object's"} fields for seraching
        </Td>
      </tr>
      <tr>
        <Td>shouldAllowEmpty</Td>
        <Td>boolean</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>shouldFilterValues</Td>
        <Td>boolean</Td>
        <Td>Allows typing text to filter suggestions</Td>
      </tr>
      <ShouldRender />
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

    <Live scope={{ L }}>
      {`<>
<L.DropDownSelect
  data={['Argentina', 'Spain']}
  onChange={({ component }) => console.log(component.value)}
  form='dds_form'
  name='dds'
  isRequired
  _w-48
/>
<br />
<L.Button
  form='dds_form'
  onClick={({ form }) => console.log(form)}
>
  Click me
</Button>
</>`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <Td>
          iconRender <br />
          inputRender <br />
          invalidMessageRender <br />
          itemRender <br />
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
<L.DropDownSelect
  data={['Argentina', 'Spain']}
  onChange={({ component }) => console.log(component.value)}
  _w-48
/>
        `}
    </Live>
  </article>
);

export default DropDownSelectPage;
