import { isFunction } from 'lodash';
import { SetState } from '../../commonTypes';
import { ChangeEvent } from '../NumericTextBox/types';
import { Guards } from '../../utils/monads';
import { equals } from '../../utils/guardsHelpers';
import { NumericRangeProps, NumericRangeState } from './types';
import { formatValue } from '../NumericTextBox/helpers';

export const createNumericChangeHandler = ({
  value,
  setValue,
  name,
  format = '#',
  thousandsSeparator = ' ',
  onChange,
}: {
  value: NumericRangeState['value'],
  setValue: SetState<NumericRangeState['value']>,
  name?: string | [string | undefined, string | undefined],
  onChange: NumericRangeProps['onChange'],
  format?: string,
  thousandsSeparator?: string,
}) => (type: 'from' | 'to') => (ev: ChangeEvent) => {
  const newValue = Guards(type)
    .when(equals('from'), () => [ev.component.value, value[1]] as [number | null, number | null])
    .when(equals('to'), () => [value[0], ev.component.value] as [number | null, number | null])
    .otherwise(() => [null, null] as [number | null, number | null])
    .getValue();

  setValue(newValue); // won't cause any effects if props.value is present

  const customEvent = {
    ...ev,
    component: {
      value: newValue,
      name,
      formattedValue: [formatValue(newValue[0], format, thousandsSeparator), formatValue(newValue[1])] as [string, string],
    },
  };

  if (isFunction(onChange)) {
    onChange(customEvent);
  }
};
