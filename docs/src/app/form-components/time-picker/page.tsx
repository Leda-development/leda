'use client';

import * as L from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { H1, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { PropsTableSection } from '@/sections';

const TimePickerPage = () => (
  <article>
    <H1>TimePicker</H1>

    <PropsTableSection>
      <tr>
        <Td>date</Td>
        <Td>Date | null</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>format</Td>
        <Td>string</Td>
        <Td>hh:mm is default</Td>
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
        <Td>timeMax</Td>
        <Td>[number, number]</Td>
        <Td>Max allowed time, [hours, minutes]</Td>
      </tr>
      <tr>
        <Td>timeMin</Td>
        <Td>[number, number]</Td>
        <Td>Min allowed time, [hours, minutes]</Td>
      </tr>
      <tr>
        <Td>value</Td>
        <Td>string | Date | null</Td>
        <Td>Selected date</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Live scope={{ L }}>
      {
          `
<L.TimePicker
  onChange={({ component }) => console.log(component.value)}
  _w-48
/>
  `
          }
    </Live>
  </article>
);

export default TimePickerPage;
