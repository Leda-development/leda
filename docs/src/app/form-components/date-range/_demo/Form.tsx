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
      <L.DateRange
        form="date-range-form"
        name="date-range"
        _mb-6
        _w-96
      />

      <L.Button
        form="date-range-form"
        onClick={({ form }) => {
          const formData = form['date-range-form']
          log(formData)
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
