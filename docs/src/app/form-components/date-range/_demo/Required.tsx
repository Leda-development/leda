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
      <L.DateRange
        form="date-range-form"
        name="date-range"
        isRequired
        requiredMessage="Please set the date"
        _mb-6
        _w-96
      />

      <L.Button
        form="date-range-form"
        onClick={({ form }) => {
          const formData = form['date-range-form']
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
