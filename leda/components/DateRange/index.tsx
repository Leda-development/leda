'use client';

import * as React from 'react';
import { COMPONENT_TYPES } from '../../src/DateTimeInput/constants';
import { DateTimeInputRange } from '../../src/DateTimeInputRange';
import { DateRangeProps } from './types';


export const DateRange = React.forwardRef((props: DateRangeProps, ref: React.Ref<HTMLElement>) => (
  <DateTimeInputRange
    {...props}
    type={COMPONENT_TYPES.DATE_ONLY}
    format={props.format || 'dd.MM.yyyy'}
    ref={ref}
  />
)) as React.FC<DateRangeProps>;

DateRange.displayName = 'DateRange';
