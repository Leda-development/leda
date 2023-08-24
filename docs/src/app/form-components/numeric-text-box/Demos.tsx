import * as L from '@leda';
import { Live } from '@/components/live';
import { Section } from '@/components/typography';

export const Demos = () => (
  <Section>
    <Live scope={{ L }}>
      {`
<L.NumericTextBox
  format='#.# humans'
  onChange={({ component }) => console.log(component.value)}
  _w-48
/>
`}
    </Live>
  </Section>
);
