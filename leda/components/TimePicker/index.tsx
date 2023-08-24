'use client';

import * as React from 'react';
import { DateTimeInput } from '../../src/DateTimeInput';
import { COMPONENT_TYPES } from '../../src/DateTimeInput/constants';
import type { TimePickerProps } from './types';

export const TimePicker = React.forwardRef((props: TimePickerProps, ref: React.Ref<HTMLElement>) => (
  <DateTimeInput
    {...props}
    format={props.format || 'hh:mm'}
    ref={ref}
    type={COMPONENT_TYPES.TIME_ONLY}
  />
));

TimePicker.displayName = 'TimePicker';
