import * as L from '@leda';
import { Live } from '@/components/live';
import { log } from '@/utils';

export const Uncontrolled = () => (
  <div>
    <Live scope={{ L, log }}>
      {
          `
() => {
  return (
    <L.TimePicker
      onChange={({ component }) => {
        log(component.value)
      }}
      _w-48
    />
  )
}
  `
        }
    </Live>
  </div>
);
