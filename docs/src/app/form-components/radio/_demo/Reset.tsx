import * as L from '@leda';
import { DatesLive } from '@/components/live/DatesLive';
import { log } from '@/utils';

export const Reset = () => (
  <div>
    <DatesLive scope={{ L, log }}>
      {
          `
() => {
  return (
    <>
      <L.RadioGroup
        form="radio-form-reset"
        name="radio"
        isRequired
        requiredMessage="Please choose something"
        _mb-6
      >
        <L.RadioButton value={1}>One</L.RadioButton>
        <L.RadioButton value={2}>Two</L.RadioButton>
        <L.RadioButton value={3}>Three</L.RadioButton>
      </L.RadioGroup>

      <L.Button
        onClick={() => {
          L.form('radio-form-reset', 'radio').reset()
        }}
        _mr-3
      >
        Reset
      </L.Button>

      <L.Button
        form="radio-form-reset"
        onClick={({ form }) => {
          const formData = form['radio-form-reset']
          log(formData['radio'].value)
        }}
      >
        Submit
      </L.Button>
    </>
  )
}
  `
        }
    </DatesLive>
  </div>
);
