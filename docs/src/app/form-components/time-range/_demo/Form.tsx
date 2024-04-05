import * as L from '@leda';
import { DatesLive } from '@/components/live/DatesLive';
import { log } from '@/utils';

export const Form = () => (
  <div>
    <DatesLive scope={{ L, log }}>
      {
          `
() => {
  return (
    <>
      <L.TimeRange
        form="time-range-form"
        name="time-range"
        _mb-6
        _w-96
      />

      <L.Button
        form="time-range-form"
        onClick={({ form }) => {
          const formData = form['time-range-form']
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
