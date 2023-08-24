'use client';

import * as React from 'react';
import { isNil } from 'lodash';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  getClassNames, useElement, useProps, useTheme, useValue,
} from '../../utils';
import { Div } from '../Div';
import { NumericTextBox } from '../NumericTextBox';
import {
  createNumericChangeHandler,
} from './handlers';
import {
  getPlaceholder, getRequired, getDisabled, getName, getControlledValue,
} from './helpers';
import type { NumericRangeProps, NumericRangeState } from './types';

export const NumericRange = React.forwardRef((props: NumericRangeProps, ref?: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    className,
    form,
    format,
    inputsRender,
    isDisabled,
    isRequired: isRequiredProp,
    isValid,
    max,
    min,
    name: nameProp,
    onBlur,
    onChange,
    onFocus,
    placeholder: placeholderProp,
    shouldTrimTrailingZeros,
    step,
    theme: themeProp,
    thousandsSeparator,
    value: valueProp,
    wrapperRender,
    ...restProps
  } = useProps(props);
  // returns value from props or from state, setUncontrolledState works only in uncontrolled mode
  const [value, setUncontrolledValue] = useValue<NumericRangeState['value']>(getControlledValue(valueProp), [null, null]);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.numericRange);

  const placeholder = getPlaceholder(placeholderProp);

  const required = getRequired(isRequiredProp);

  const disabled = getDisabled(isDisabled);

  const name = getName(nameProp);

  const commonProps = {
    form,
    format,
    step,
    onBlur,
    onFocus,
    isValid,
    shouldTrimTrailingZeros,
    thousandsSeparator,
  };

  const handleChange = createNumericChangeHandler({
    value,
    setValue: setUncontrolledValue,
    name: nameProp,
    onChange,
    format,
    thousandsSeparator,
  });

  const wrapperClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender,
    props,
    { value },
  );

  return (
    <Wrapper
      {...restProps}
      className={wrapperClassNames}
      ref={ref}
    >
      <NumericTextBox
        inputRender={Array.isArray(inputsRender) ? inputsRender[0] : undefined}
        isDisabled={disabled[0]}
        isRequired={required[0]}
        max={isNil(value[1]) ? max : value[1]}
        min={min}
        name={name[0]}
        onChange={handleChange('from')}
        placeholder={placeholder[0]}
        theme={theme.to}
        value={value[0]}
        {...commonProps}
      />
      <Div className={theme.delimiter}>&mdash;</Div>
      <NumericTextBox
        inputRender={Array.isArray(inputsRender) ? inputsRender[1] : undefined}
        isDisabled={disabled[1]}
        isRequired={required[1]}
        max={max}
        min={isNil(value[0]) ? min : value[0]}
        name={name[1]}
        onChange={handleChange('to')}
        placeholder={placeholder[1]}
        theme={theme.from}
        value={value[1]}
        {...commonProps}
      />
    </Wrapper>
  );
}) as React.FC<NumericRangeProps>;

NumericRange.displayName = 'NumericRange';
