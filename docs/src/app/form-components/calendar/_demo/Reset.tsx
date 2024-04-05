import * as L from '@leda';
import { Live } from '@/components/live';
import { log } from '@/utils';

export const Reset = () => (
  <div>
    <Live scope={{ L, log }}>
      {
          `
() => {
  return (
    <>
      <L.Calendar
        form="calendar-form-reset"
        name="calendar"
        onChange={({ component }) => log(component.value)}
        _mb-6
      />

      <L.Button
        onClick={() => {
          L.form('calendar-form-reset', 'calendar').reset()
        }}
      >
        Reset
      </L.Button>
    </>
  )
}
  `
        }
    </Live>
  </div>
);
