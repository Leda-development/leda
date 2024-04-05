import * as L from '@leda';
import { Live } from '@/components/live';
import { log } from '@/utils';

export const Controlled = () => (
  <div>
    <Live scope={{ L, log }}>
      {
          `
() => {

  const [value, setValue] = React.useState()

  return (
    <L.TimeRange
      value={value}
      onChange={({ component }) => {
        setValue(value)
        log(component.value)
      }}
      _w-96
    />
  )
}
  `
        }
    </Live>
  </div>
);
