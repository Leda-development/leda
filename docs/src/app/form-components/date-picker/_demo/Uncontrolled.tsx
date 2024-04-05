import * as L from '@leda';
import { DatesLive } from '@/components/live/DatesLive';
import { log } from '@/utils';

export const Uncontrolled = () => (
  <div>
    <DatesLive scope={{ L, log }}>
      {
          `
() => {
  return (
    <L.DatePicker
      onChange={({ component }) => {
        log(component.value)
      }}
      _w-48
    />
  )
}
  `
        }
    </DatesLive>
  </div>
);
