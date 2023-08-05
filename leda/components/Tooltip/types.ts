import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface TooltipProps {
  /** Arrow size in px */
  arrowSize?: number,
  /** Child elements */
  children?: React.ReactNode,
  /** Controlled open state */
  isOpen?: boolean,
  /** Position: top, right, bottom, left. Defaults to top */
  position?: TooltipPosition,
  /** Ref */
  ref?: React.Ref<TooltipRefCurrent>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tooltip],
  /** Title: a string, html or JSX */
  title: React.ReactNode,
  /** Max animation duration, ms */
  transitionTimeout?: number,
}

export interface TooltipStyle extends React.CSSProperties {
  opacity: 0 | 1,
  top: number,
  left?: number,
  visibility?: 'hidden',
}

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left' | undefined;

export interface TooltipBodyProps {
  ref?: React.Ref<HTMLDivElement>,
  onTransitionEnd: React.TransitionEventHandler,
  tooltipClassNames?: string,
  style: TooltipStyle,
  title: React.ReactNode,
}

export interface TooltipRefCurrent {
  wrapper: HTMLDivElement | null,
}

export interface GetTooltipPosition {
  (data: {
    arrowSize?: number,
    position: TooltipPosition,
    elementRect: DOMRect,
    tooltipRect: DOMRect,
  }): TooltipPosition,
}

export interface GetTooltipOffsets {
  (data: {
    elementRect: DOMRect,
    position: TooltipPosition,
  }): {
    top?: number,
    left?: number,
  },
}

export interface UseTooltip {
  (data: {
    arrowSize?: number,
    transitionTimeout?: number,
    initialIsOpen?: boolean,
    initialPosition: TooltipPosition,
    elementRef?: React.RefObject<Element | undefined>,
    tooltipRef?: React.RefObject<Element | undefined>,
  }): {
    handleTransitionEnd: React.TransitionEventHandler,
    position: TooltipPosition,
    style: TooltipStyle,
  },
}
