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
    <L.RadioGroup
      onChange={({ component }) => {
        log(component.value)
      }}
    >
      <L.RadioButton value={1}>One</L.RadioButton>
      <L.RadioButton value={2}>Two</L.RadioButton>
      <L.RadioButton value={3}>Three</L.RadioButton>
    </L.RadioGroup>
  )
}
  `
        }
      </Live>
    </div>
  )
}
