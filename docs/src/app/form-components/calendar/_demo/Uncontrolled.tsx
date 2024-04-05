import { Calendar } from '@leda/index';
import { Live } from '@/components/live';

export const Uncontrolled = () => (
  <div>
    <Live scope={{ Calendar }}>
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
);
