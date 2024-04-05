import { DatesLive } from "@/components/live/DatesLive"
import { log } from "@/utils"
import * as L from '@leda'

export const Uncontrolled = () => {
  return (
    <div>
      <DatesLive scope={{ L, log }}>
        {
          `
() => {
  return (
    <L.DateTimeRange
      onChange={({ component }) => {
        log(component.value)
      }}
      _w-96
    />
  )
}
  `
        }
      </DatesLive>
    </div>
  )
}
