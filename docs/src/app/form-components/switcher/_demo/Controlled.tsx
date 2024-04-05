import { Live } from "@/components/live"
import { log } from "@/utils"
import * as L from '@leda'

export const Controlled = () => {
  return (
    <div>
      <Live scope={{ L, log }}>
        {
          `
() => {

  const [value, setValue] = React.useState(true)

  return (
    <L.Switcher
      value={value}
      onChange={({ component }) => {
        setValue(component.value)
        log(component.value)
      }}
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
