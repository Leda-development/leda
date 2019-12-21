import * as React from 'react';
import { SetState } from '../../commonTypes';
import { useElement } from '../../utils';
import { Div } from '../Div';
import { LedaContext } from '../Leda';
import { formatInputValue, formatValue } from './helpers';
import { CustomElements, NumericTextBoxProps, NumericTextBoxState } from './types';

const defaultInput = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => <input {...props} ref={ref} />);
defaultInput.displayName = 'Input';

export const useCustomElements = (props: NumericTextBoxProps, state: NumericTextBoxState): CustomElements => {
  const {
    wrapperRender, inputRender, arrowButtonsRender,
  } = props;

  const { renders: { numericTextBox: numericRenders } } = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || numericRenders.wrapperRender,
    props,
    state,
  );

  const Input = useElement(
    'Input',
    defaultInput,
    inputRender || numericRenders.inputRender,
    props,
    state,
  );

  const ArrowButtons = useElement(
    'ArrowButtons',
    Div,
    arrowButtonsRender || numericRenders.arrowButtonsRender,
    props,
    state,
  );

  return {
    Wrapper,
    Input,
    ArrowButtons,
  };
};

export const useSyncedValue = (value: NumericTextBoxProps['value'], isFocused: boolean, format: string, thousandsSeparator: string, setInputValue: SetState<string>): void => {
  React.useEffect((): void => {
    if (value !== undefined && !isFocused) {
      setInputValue(formatInputValue(formatValue(value, format, thousandsSeparator), format));
    }
  }, [format, setInputValue, thousandsSeparator, value]);
};
