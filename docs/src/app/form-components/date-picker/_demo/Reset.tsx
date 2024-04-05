import { DatesLive } from "@/components/live/DatesLive"
import { log } from "@/utils"
import * as L from '@leda'

export const Reset = () => {
  return (
    <div>
      <DatesLive scope={{ L, log }}>
        {
          `
() => {
  return (
    <>
      <L.DatePicker
        form="date-picker-form-reset"
        name="date-picker"
        onChange={({ component }) => {
          log(component.value)
        }}
        _mb-6
        _w-48
      />

      <L.Button
        onClick={() => {
          L.form('date-picker-form-reset', 'date-picker').reset()
        }}
      >
        Reset
      </L.Button>
    </>
  )
}
  `
        }
      </DatesLive>
    </div>
  )
}