import { Live } from "@/components/live"
import { log } from "@/utils"
import * as L from '@leda'

export const Uncontrolled = () => {
  return (
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
  )
}
