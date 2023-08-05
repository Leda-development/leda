import * as React from 'react';
import * as L from '../../../leda';
import { globalDefaultMessages } from '../../../leda/components/LedaProvider/globalDefaultMessages';

const customMessages = {
  // the order is important, for months we should start from January, for weeks we should start from Sunday, 
  // use firstWeekDay with the index of the weekDays item to specify a first day of the week
  calendar: {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Deciembre'],
    shortMonthNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekDays: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    shortWeekDays: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    firstWeekDay: 0,
  }
} satisfies typeof globalDefaultMessages

export const Localization = (props: any) => {
  const [value, setValue] = React.useState<Date>(new Date);

  return (
    <L.Leda messages={customMessages}>
      <L.Div _box _inner _demoBg>
        <L.Calendar
          value={value}
          onChange={(ev) => {
            setValue(ev.component.value);
          }}
          hasTodayButton
        />
      </L.Div>
    </L.Leda>
  );
};
