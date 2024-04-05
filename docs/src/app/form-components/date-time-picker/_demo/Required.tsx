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
      <L.DateTimePicker
        form="date-time-picker-form"
        name="date-time-picker"
        isRequired
        requiredMessage="Please set the date"
        _mb-6
        _w-48
      />

      <L.Button
        form="date-time-picker-form"
        onClick={({ form }) => {
          const formData = form['date-time-picker-form']
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
