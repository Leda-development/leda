import { Calendar } from '@leda/index';
import { Live } from '@/components/live';

export const Controlled = () => (
  <div>
    <Live scope={{ Calendar }}>
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
);
