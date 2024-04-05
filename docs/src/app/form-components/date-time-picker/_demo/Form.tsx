import { DatesLive } from "@/components/live/DatesLive"
import { log } from "@/utils"
import * as L from '@leda'

export const Form = () => {
  return (
    <div>
      <DatesLive scope={{ L, log }}>
        {
          `
() => {
  return (
    <>
      <L.DateTimePicker
        form="date-time-picker-form"
        name="date-time-picker"
        _mb-6
        _w-48
      />

      <L.Button
        form="date-time-picker-form"
        onClick={({ form }) => {
          const formData = form['date-time-picker-form']
          log(formData['date-time-picker'])
        }}
      >
        Submit
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
