'use client';

import { DateTimeRange } from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { H1, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { PropsTableSection } from '@/sections';

const DateTimeRangePage = () => (
  <article>
    <H1>DateRange</H1>

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
        <Td>string | [string | undefined, string | undefined]</Td>
        <Td>Placeholder</Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>value</Td>
        <Td>[string | string] | [Date | null, Date | null]</Td>
        <Td>Input fields values</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Live scope={{ DateTimeRange }} overflowTop>
      {
          `
<DateTimeRange
  onChange={({ component }) => console.log(component.value)}
  _w-96
/>
  `
        }
    </Live>
  </article>
);

export default DateTimeRangePage;
