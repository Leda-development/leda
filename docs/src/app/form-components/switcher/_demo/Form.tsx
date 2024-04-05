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
      <L.Switcher
        form="switcher-form"
        name="switcher"
        _mb-6
      >
        Click me
      </L.Switcher>

      <L.Button
        form="switcher-form"
        onClick={({ form }) => {
          const formData = form['switcher-form']
          log(formData['switcher'].value)
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
