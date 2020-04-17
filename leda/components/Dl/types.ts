import * as React from 'react';

export interface DlProps extends React.HTMLAttributes<HTMLDListElement> {
  ref?: React.Ref<DlRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface DtProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<DtRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface DdProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<DdRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface DlRefCurrent {
  wrapper?: HTMLDListElement | null,
}

export interface DtRefCurrent {
  wrapper?: HTMLElement | null,
}

export interface DdRefCurrent {
  wrapper?: HTMLElement | null,
}
