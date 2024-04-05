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
    <L.TimeRange
      onChange={({ component }) => {
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
  )
}
