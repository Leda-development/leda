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
      <L.TimePicker
        form="time-picker-form"
        name="time-picker"
        _mb-6
        _w-48
      />

      <L.Button
        form="time-picker-form"
        onClick={({ form }) => {
          const formData = form['time-picker-form']
          log(formData['time-picker'])
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
