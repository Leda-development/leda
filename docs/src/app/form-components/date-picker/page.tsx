'use client';

import { DatePicker } from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { H1, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { PropsTableSection } from '@/sections';

const DatePickerPage = () => (
  <article>
    <H1>DatePicker</H1>

    <PropsTableSection>
      <tr>
        <Td>format</Td>
        <Td>string</Td>
        <Td>dd.MM.yyyy is default</Td>
      </tr>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>In case you want it to be disabled</Td>
      </tr>
      <tr>
        <Td>isOpen</Td>
        <Td>boolean</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>hasTodayButton</Td>
        <Td>boolean</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>max</Td>
        <Td>Date</Td>
        <Td>Max available date</Td>
      </tr>
      <tr>
        <Td>min</Td>
        <Td>Date</Td>
        <Td>Min available date</Td>
      </tr>
      <tr>
        <Td>name</Td>
        <Td>string</Td>
        <Td>Component name</Td>
      </tr>
      <tr>
        <Td>onBlur</Td>
        <Td>(ev: BlurEvent) ={'>'} void</Td>
        <Td>Blur handler</Td>
      </tr>
      <tr>
        <Td>onChange</Td>
        <Td>(ev: ChangeEvent) ={'>'} void</Td>
        <Td>Change handler</Td>
      </tr>
      <tr>
        <Td>onEnterPress</Td>
        <Td>(ev: ChangeEvent) ={'>'} void</Td>
        <Td>Enter press handler</Td>
      </tr>
      <tr>
        <Td>onFocus</Td>
        <Td>(ev: FocusEvent) ={'>'} void</Td>
        <Td>Focus handler</Td>
      </tr>
      <tr>
        <Td>placeholder</Td>
        <Td>string</Td>
        <Td>Placeholder</Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>theme</Td>
        <Td>
          PartialGlobalDefaultTheme[
          typeof COMPONENTS_NAMESPACES.dateTimeInput
          ]
        </Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>value</Td>
        <Td>string | Date | null</Td>
        <Td>Selected date</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Live scope={{ DatePicker }} overflowTop>
      {`
<DatePicker
  onChange={({ component }) => console.log(component.value)}
  _w-48
/>
`}
    </Live>
  </article>
);

export default DatePickerPage;
