import * as React from 'react';

export interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  ref?: React.Ref<TrRefCurrent>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TrRefCurrent {
  wrapper: HTMLTableRowElement | null,
}

export interface THeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  ref?: React.Ref<THeadRefCurrent>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface THeadRefCurrent {
  wrapper: HTMLTableSectionElement | null,
}

export interface ThProps extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  ref?: React.Ref<ThRefCurrent>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface ThRefCurrent {
  wrapper: HTMLTableHeaderCellElement | null,
}

export interface TFootProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  ref?: React.Ref<TFootRefCurrent>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TFootRefCurrent {
  wrapper: HTMLTableSectionElement | null,
}

export interface TdProps extends React.HTMLAttributes<HTMLTableDataCellElement> {
  ref?: React.Ref<TdRefCurrent>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TdRefCurrent {
  wrapper: HTMLTableDataCellElement | null,
}

export interface TBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  ref?: React.Ref<TBodyRefCurrent>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TBodyRefCurrent {
  wrapper: HTMLTableSectionElement | null,
}

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  ref?: React.Ref<TableRefCurrent>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TableRefCurrent {
  wrapper: HTMLTableElement | null,
}

export interface ColGroupProps extends React.HTMLAttributes<HTMLTableColElement> {
  ref?: React.Ref<ColGroupRefCurrent>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface ColGroupRefCurrent {
  wrapper: HTMLTableColElement | null,
}

export interface ColProps extends React.HTMLAttributes<HTMLTableColElement> {
  ref?: React.Ref<ColRefCurrent>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface ColRefCurrent {
  wrapper: HTMLTableColElement | null,
}
