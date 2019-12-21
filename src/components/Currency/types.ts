import * as React from 'react';
import { CustomRender } from '../../commonTypes';

export interface CurrencyProps {
  /** значение, как потомок */
  children?: number | string,
  /** что отображать, если нет значения */
  placeholder?: string,
  /** кол-во знаков после запятой */
  precision?: number,
  /** Убирает дробную часть для целых чисел, игнорируя precision */
  shouldTrimFraction?: boolean,
  /** Кастомный рендер знака валюты (для добавления единиц измерения, например) */
  currencySymbolRender?: CustomRender<CurrencyProps, {}, CurrencySymbolProps>,
  /** Валюта в формате ISO 4217 - EUR, USD, RUB etc, по-умолчанию RUB */
  currencyCode?: string,
  /** значение поля */
  value?: number | string,
  /** Реф */
  ref?: React.Ref<CurrencyRefCurrent>,
  /** Кастомизация враппера (по-умолчанию span) */
  wrapperRender?: CustomRender<CurrencyProps, {}, WrapperProps>,
  /** Классы переданные через _ */
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
