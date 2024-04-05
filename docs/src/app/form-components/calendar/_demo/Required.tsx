import * as L from '@leda';
import { Live } from '@/components/live';
import { log } from '@/utils';

export const Required = () => (
  <div>
    <Live scope={{ L, log }}>
      {
          `
() => {
  return (
    <>
      <L.Calendar
        form="calendar-form"
        name="calendar"
        isRequired
        requiredMessage="Please set the date"
        onChange={({ component }) => console.log(component.value)}
        _mb-6
      />

      <L.Button
        form="calendar-form"
        onClick={({ form }) => {
          const formData = form['calendar-form']

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
