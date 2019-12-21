import * as React from 'react';

export interface DlProps extends React.HTMLAttributes<HTMLDListElement> {
  ref?: React.Ref<DlRefCurrent>,
  [x: string]: unknown,
}

export interface DtProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<DtRefCurrent>,
  [x: string]: unknown,
}

export interface DdProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<DdRefCurrent>,
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
