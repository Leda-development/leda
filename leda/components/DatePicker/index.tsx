import * as React from 'react';
import { DateTimeInput } from '../../src/DateTimeInput';
import { COMPONENT_TYPES } from '../../src/DateTimeInput/constants';
import { DatePickerProps } from './types';

export const DatePicker = React.forwardRef((props: DatePickerProps, ref: React.Ref<HTMLElement>) => (
  <DateTimeInput
    {...props}
    format={props.format || 'dd.MM.yyyy'}
    type={COMPONENT_TYPES.DATE_ONLY}
    ref={ref}
  />
)) as React.FC<DatePickerProps>;

DatePicker.displayName = 'DatePicker';
