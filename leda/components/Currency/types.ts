import * as React from 'react';
import { CustomRender } from '../../commonTypes';

export interface CurrencyProps {
  /** You can pass the value as a child element */
  children?: number | string,
  /** Currency code ISO 4217 - EUR, USD, etc, USD by default */
  currencyCode?: string,
  /** Currency code customizator */
  currencySymbolRender?: CustomRender<CurrencyProps, {}, CurrencySymbolProps>,
  /** Show if no value is present */
  placeholder?: string,
  /** Number of digits in the fractional part */
  precision?: number,
  /** Ref */
  ref?: React.Ref<CurrencyRefCurrent>,
  /** Removes the fractional part regardless of the precision value */
  shouldTrimFraction?: boolean,
  /** Value */
  value?: number | string,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<CurrencyProps, {}, WrapperProps>,
  /** Underscore classes */
  [x: string]: unknown,
}

export interface CurrencySymbolProps {
  style?: Partial<CSSStyleDeclaration>,
}

export interface WrapperProps {
  ref?: React.Ref<CurrencyRefCurrent>,
}

export interface CurrencyRefCurrent {
  wrapper: HTMLElement | null,
}
