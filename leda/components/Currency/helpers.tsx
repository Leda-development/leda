import * as React from 'react';
import { isNil, isNumber } from 'lodash';
import { CurrencySymbolProps } from './types';

export const formatNumber = (CurrencySymbol: React.FC<CurrencySymbolProps>, number: number | null, precision?: number, currencyCode?: string, sholudTrim?: boolean): React.ReactNode => {
  if (isNil(number)) return null;

  // If no Intl support the value returns unformatted
  if (!Intl && !Intl.NumberFormat) {
    return (
      <>
        `${number.toFixed(precision || 2)}`
        <CurrencySymbol>$</CurrencySymbol>
      </>
    );
  }

  const formattedString = new Intl.NumberFormat(
    'us-US',
    {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'symbol',
      minimumFractionDigits: sholudTrim ? 0 : (precision || 0),
      maximumFractionDigits: precision || 2,
    },
  )
    .format(number || 0)
    .replace(',', '.');

  const currencyString = (/[^\d|\w|\s|,|.]/g.exec(formattedString) || [])[0] || '';

  return (
    <>
      {formattedString.replace(/[^\d|\w|\s|,|.]/g, '').trim()}
      <CurrencySymbol style={{ marginLeft: '5px' }}>{currencyString}</CurrencySymbol>
    </>
  );
};

export const getNumericValue = (val?: number | string | undefined): number | null => {
  if (!isNil(val)) {
    if (isNumber(val)) return val;

    const parsedValue = parseFloat(val.replace(/\s/g, '')); // remove all spaces from the string

    return Number.isNaN(parsedValue) ? null : parsedValue;
  }

  return null;
};
