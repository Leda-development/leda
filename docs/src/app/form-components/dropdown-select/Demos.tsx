import { DropDownSelect } from '@leda';
import { Live } from '@/components/live';
import { Section } from '@/components/typography';

export const Demos = () => (
  <Section>
    <Live scope={{ DropDownSelect }}>
      {`
<>
  <DropDownSelect
    data={['Argentina', 'Spain']}
    onChange={({ component }) => console.log(component.value)}
    _w-48
  />
  <br/>
  <DropDownSelect
    data={[{ country: 'Argentina' }, { country: 'Spain' }]}
    textField='country'
    onChange={({ component }) => console.log(component.value, component.suggestion)}
    onBlur={({ component, currentTarget }) => console.log(component, currentTarget)}
    onFocus={({ component, currentTarget }) => console.log(component, currentTarget)}
    _w-48
  />
</>`}
    </Live>
  </Section>
);
