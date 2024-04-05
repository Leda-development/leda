import * as L from '@leda';
import { DatesLive } from '@/components/live/DatesLive';
import { log } from '@/utils';

export const Required = () => (
  <div>
    <DatesLive scope={{ L, log }}>
      {
          `
() => {
  return (
    <>
      <L.DatePicker
        form="date-picker-form"
        name="date-picker"
        isRequired
        requiredMessage="Please set the date"
        _mb-6
        _w-48
      />

      <L.Button
        form="date-picker-form"
        onClick={({ form }) => {
          const formData = form['date-picker-form']
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
    </DatesLive>
  </div>
);
