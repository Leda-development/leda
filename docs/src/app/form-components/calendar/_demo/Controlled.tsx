import { Live } from "@/components/live"
import { Calendar } from "@leda/index"

export const Controlled = () => {
  return (
    <div>
      <Live scope={{ Calendar: Calendar }}>
        {
          `
() => {

  const [value, setValue] = React.useState()

  return (
    <Calendar
      value={value}
      onChange={({ component }) => {
        setValue(value)
        console.log(component.value)
      }}
    />
  )
}
  `
        }
      </Live>
    </div>
  )
}
