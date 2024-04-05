import * as L from '@leda';
import { Live } from '@/components/live';
import { log } from '@/utils';

export const Form = () => (
  <div>
    <Live scope={{ L, log }}>
      {
          `
() => {
  return (
    <>
      <L.RadioGroup
        form="radio-form"
        name="radio"
        onChange={({ component }) => {
          log(component.value)
        }}
        _mb-6
      >
        <L.RadioButton value={1}>One</L.RadioButton>
        <L.RadioButton value={2}>Two</L.RadioButton>
        <L.RadioButton value={3}>Three</L.RadioButton>
      </L.RadioGroup>

      <L.Button
        form="radio-form"
        onClick={({ form }) => {
          const formData = form['radio-form']
          log(formData)
        }}
      >
        Submit
      </L.Button>
    </>
  )
}
  `
        }
    </Live>
  </div>
);
