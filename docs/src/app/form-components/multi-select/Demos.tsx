import * as L from '@leda';
import { Live } from '@/components/live';
import { Section } from '@/components/typography';

export const Demos = () => (
  <Section>
    <Live scope={{ L }}>
      {`
<L.MultiSelect
  data={['Argentina', 'Spain', 'Mexico', 'Columbia', 'Peru', 'Chile', 'Costa Rica', 'Puerto Rico']}
  onChange={({ component }) => console.log(component.value)}
  _w-48
/>
`}
    </Live>
  </Section>
);
