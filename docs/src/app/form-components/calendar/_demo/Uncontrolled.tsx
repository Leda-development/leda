import { Live } from "@/components/live"
import { Calendar } from "@leda/index"

export const Uncontrolled = () => {
  return (
    <div>
      <Live scope={{ Calendar: Calendar }}>
        {
          `
() => {
  return (
    <Calendar
      onChange={({ component }) => console.log(component.value)}
    />
  )
}
  `
        }
      </Live>
    </div>
  )
}
