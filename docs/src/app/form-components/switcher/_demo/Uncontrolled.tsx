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
    <L.Switcher
      onChange={({ component }) => log(component.value)}
    >
      Click me
    </L.Switcher>
  )
}
  `
        }
    </Live>
  </div>
);
