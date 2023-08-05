import {
  NumericTextBoxProps,
  WrapperProps,
  NormalizeParameters,
  FormatValueProps,
  GetValueProps,
} from './types';
import { DEFAULT_VALUES } from './constants';

export const getNumberPrecision = (format: string, numberStartIndex: number): number => {
  const firstDecimalIndex = format.indexOf('#', numberStartIndex + 1);

  if (firstDecimalIndex === -1) return 0;

  const decimalPart = format.slice(firstDecimalIndex);

  return (decimalPart.match(/#/g) || []).length;
};

const addThousandsSeparator = (number: number, separator: string): string => {
  const value = number.toString();

  if (value.length < 3) return value;

  return value
    .split('')
    .reverse()
    .join('')
    .replace(/([\d]{3})/g, `$1${separator}`)
    .split('')
    .reverse()
    .join('')
    .replace(/^[^\d]/, '');
};

export const getSeparator = (format: string): string | null => {
  const numberStartIndex = format.indexOf('#');

  if (numberStartIndex === -1) {
    throw new Error('L.NumericTextBox: incorrect format! Can\'t find any "#" symbols, format must contain at least one!');
  }

  if (format[numberStartIndex + 1] === '#') {
    throw new Error('L.NumericTextBox: incorrect format! Symbol "#" can\'t follow same "#" symbol! Perhaps you\'ve forgot about decimal separator!');
  }

  return format[numberStartIndex + 1] !== ' ' ? format[numberStartIndex + 1] : null;
};

// "1200.05" -> "1 200.05 USD"
export const formatValue = ({
  value,
  format = '#',
  thousandsSeparator = ' ',
  shouldTrimTrailingZeros,
}: FormatValueProps): string => {
  if (value == null) return '';

  const isNegative = value < 0;

  const number = Math.abs(value);

  const numberStartIndex = format.indexOf('#');

  const precision = getNumberPrecision(format, numberStartIndex);

  const separator = getSeparator(format) || '';

  const integerPart = Math.floor(number);

  const decimalPart = (() => {
    // Rounding and conversion to an integer value of a fractional part of the number
    const unformattedDecimalPart = Math.ceil(Math.floor((number % 1) * (10 ** (precision + 1))) / 10);
    // Formatting the fractional part of a number according to the mask
    const formattedDecimalPart = separator + unformattedDecimalPart.toString().padStart(precision, '0');
    if (shouldTrimTrailingZeros) {
      return unformattedDecimalPart === 0 ? '' : formattedDecimalPart.replace(/0*$/, '');
    }
    return formattedDecimalPart;
  })();

  return format
    .replace(/#/, `${isNegative ? '-' : ''}${addThousandsSeparator(integerPart, thousandsSeparator)}`)
    .replace(/.#+/, precision === 0 ? '' : decimalPart);
};

// chooses which value to show (formatted or inputValue)
export const getValue = ({
  value,
  inputValue,
  format,
  isFocused,
  thousandsSeparator,
  shouldTrimTrailingZeros,
}: GetValueProps): string => {
  const separator = getSeparator(format);

  if (separator === thousandsSeparator) {
    throw new Error(`L.NumericTextBox: decimal separator (${JSON.stringify(separator)}) and thousands separator (${JSON.stringify(thousandsSeparator)}) cannot be the same character!`);
  }

  if (thousandsSeparator === '-') {
    throw new Error('L.NumericTextBox: thousands separator cannot be "-"!');
  }

  if (separator === '-') {
    throw new Error('L.NumericTextBox: decimal separator cannot be "-"!');
  }

  if (isFocused) {
    return inputValue;
  }

  return formatValue(
    {
      value,
      format,
      thousandsSeparator,
      shouldTrimTrailingZeros,
    },
  );
};

// gets a number from a string
// "1 200.05 USD" -> 1200.05
export const extractValue = (value: string, format = '#', thousandsSeparator = ' '): number | null => {
  if (value.length === 0) return null;

  const separator = getSeparator(format);

  const standardizedValue = (() => {
    const standardizedSeparatorValue = separator
      ? value.replace(separator, '.')
      : value;

    if (thousandsSeparator) {
      const thousandsSeparatorRegExp = new RegExp(`\\${thousandsSeparator}`, 'g');

      return standardizedSeparatorValue.replace(thousandsSeparatorRegExp, '');
    }

    return standardizedSeparatorValue;
  })();

  const parsedValue = Number.parseFloat(standardizedValue);

  return Number.isNaN(parsedValue) ? null : parsedValue;
};

// limits the number by min/max and fractionsl part length
export const normalizeValue = ({
  format = '#',
  min,
  max,
  sign,
  value,
  step,
}: NormalizeParameters): number | null => {
  // this is required when min and /or max values are set and boxes are null
  if (value == null && sign != null) {
    if (max !== DEFAULT_VALUES.maxValue && sign === -1) {
      return max ?? null;
    }

    if (min !== DEFAULT_VALUES.minValue && sign === 1) {
      return min ?? null;
    }
  }

  const newValue: number | null = (() => {
    if (step != null && sign != null) {
      return (value ?? 0) + step * sign;
    }

    return value;
  })();

  if (newValue == null) return null;

  if (min != null && newValue < min) return min;

  if (max != null && max < newValue) return max;

  const numberStartIndex = format.indexOf('#');

  const precision = getNumberPrecision(format, numberStartIndex);

  const fixedValue = precision
    ? newValue.toFixed(precision)
    : newValue.toFixed();

  return Number.parseFloat(fixedValue);
};

export const getRestProps = (props: NumericTextBoxProps): WrapperProps => {
  const {
    arrowButtonsRender,
    defaultValue,
    format,
    inputRender,
    className,
    max,
    min,
    name,
    form,
    onBlur,
    onChange,
    onClick,
    onFocus,
    prefixRender,
    step,
    isDisabled,
    isRequired,
    isValid: isValidProp,
    shouldTrimTrailingZeros,
    shouldValidateUnmounted,
    thousandsSeparator,
    requiredMessage,
    invalidMessage,
    invalidMessageRender,
    validator,
    suffixRender,
    theme: themeProp,
    value: valueProp,
    wrapperRender,
    ...restProps
  } = props;

  return restProps;
};

// форматирует inputValue (значение при фокусе)
// formats inputValue (value in the focused input)
// "1 200.05 USD" -> "1200.05" (a string, not a bumber)
export const formatInputValue = (formattedValue: string, format: string): string => {
  const fractionSeparator = getSeparator(format);

  const separator = fractionSeparator?.length ? `\\${fractionSeparator}` : '';

  // trimmed value "1 200.05 USD" -> "1200.05"
  const clearValue = formattedValue.replace(new RegExp(`[^-\\d${separator}]`, 'g'), '');

  return clearValue.match(new RegExp(`^-?\\d*(${separator}\\d*)?`))?.[0] ?? '';
};
