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
      <L.TimePicker
        form="time-picker-form-reset"
        name="time-picker"
        onChange={({ component }) => {
          log(component.value)
        }}
        _mb-6
        _w-48
      />

      <L.Button
        onClick={() => {
          L.form('time-picker-form-reset', 'time-picker').reset()
        }}
      >
        Reset
      </L.Button>
    </>
  )
}
  `
        }
    </DatesLive>
  </div>
);
