import * as React from 'react';

export interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface THeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface ThProps extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TFootProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TdProps extends React.HTMLAttributes<HTMLTableDataCellElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface ColGroupProps extends React.HTMLAttributes<HTMLTableColElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}

export interface ColProps extends React.HTMLAttributes<HTMLTableColElement> {
  ref?: React.Ref<HTMLElement>,
  shouldRender?: boolean,
  children?: React.ReactNode,
  [x: string]: unknown,
}
