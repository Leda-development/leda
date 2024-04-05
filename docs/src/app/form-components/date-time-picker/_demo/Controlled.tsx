import { DatesLive } from "@/components/live/DatesLive"
import { log } from "@/utils"
import * as L from '@leda'

export const Controlled = () => {
  return (
    <div>
      <DatesLive scope={{ L, log }}>
        {
          `
() => {

  const [value, setValue] = React.useState()

  return (
    <L.DateTimePicker
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
  )
}
