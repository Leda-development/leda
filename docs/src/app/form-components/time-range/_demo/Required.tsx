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
      <L.TimeRange
        form="time-range-form"
        name="time-range"
        isRequired
        requiredMessage="Please set time"
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
    </Live>
  </div>
);
