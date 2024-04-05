import * as L from '@leda';
import { Live } from '@/components/live';
import { log } from '@/utils';

export const Controlled = () => (
  <div>
    <Live scope={{ L, log }}>
      {
          `
() => {

  const [value, setValue] = React.useState(1)

  return (
    <L.RadioGroup
      onChange={({ component }) => {
        log(component.value)
        setValue(component.value)
      }}
      value={value}
    >
      <L.RadioButton value={1}>One</L.RadioButton>
      <L.RadioButton value={2}>Two</L.RadioButton>
      <L.RadioButton value={3}>Three</L.RadioButton>
    </L.RadioGroup>
  )
}
  `
        }
    </Live>
  </div>
);
