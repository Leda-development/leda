import * as React from 'react';

export interface TransitionOptions {
  /** Aimation duration. A number of milliseconds or a string containing units: '200ms' or '0.5s' */
  duration: number | string,
  /** https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function */
  animation: string,
  /** A delay before animation. A number of milliseconds or a string containing units: '200ms' or '0.5s' */
  delay?: number | string,
}

export interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Open or not */
  isOpen: boolean,
  /** Close handler */
  onClose?: () => void,
  /** Open handler */
  onOpen?: () => void,
  /** Toggle handler */
  onToggle?: () => void,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** CSS transition format. 'height 250ms cubic-bezier(.4, 0, .2, 1)' by default */
  transition?: string | TransitionOptions,
}
