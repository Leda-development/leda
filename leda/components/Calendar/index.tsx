import * as React from 'react';
import { Span } from '../Span';
import { useProps, useTheme, useValue } from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { LedaContext } from '../../index';
import { CalendarProps, CalendarRefCurrent } from './types';

export const Calendar = React.forwardRef((props: CalendarProps, ref?: React.Ref<CalendarRefCurrent>): React.ReactElement => {
  const {
    max,
    min,
    onChange,
    theme,
    value,
    ...restProps
  } = useProps(props);

  return (
    <div>
      calendar goes here
    </div>
  );
}) as React.FC<CalendarProps>;

Calendar.displayName = 'Calendar';
