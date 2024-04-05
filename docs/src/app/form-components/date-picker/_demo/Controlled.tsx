import * as L from '@leda';
import { DatesLive } from '@/components/live/DatesLive';
import { log } from '@/utils';

export const Controlled = () => (
  <div>
    <DatesLive scope={{ L, log }}>
      {
          `
() => {

  const [value, setValue] = React.useState()

  return (
    <L.DatePicker
      value={value}
      onChange={({ component }) => {
        setValue(value)
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
