import type * as React from 'react';

export interface ContentProps {
  goTo: (stepNumber: number) => void,
  next: () => void,
  prev: () => void,
  stopTour: () => void,
}

export interface TourStepItem {
  /** Highlighted elements border-radius, по-умолчанию 15px */
  borderRadius?: number,
  /** Content */
  content: (props: ContentProps) => React.ReactElement | null,
  /** Element to highlight */
  element: HTMLElement | null,
  /** Scroll offset, px, defaults to 200px */
  offsetTop?: number,
  /** Overlay color rgba(33, 33, 33, 0.7) */
  overlayBackgroundColor?: string,
  /** Modal window position */
  position: 'top' | 'right' | 'bottom' | 'left',
  /** Step key */
  stepKey: string | number,
}

export interface ChangeEvent {
  component: {
    value: number | string | null,
    item: TourStepItem | null,
  },
}

export interface TourProps {
  /** Identifier of the active step, if null - the guided tour is closed */
  activeStepKey?: number | string | null,
  /** Tour steps */
  data: TourStepItem[],
  /** Change handler */
  onChange: (ev: ChangeEvent) => void,
}
