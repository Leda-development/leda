import * as React from 'react';

export interface ContentProps {
  goTo: (stepNumber: number) => void,
  next: () => void,
  prev: () => void,
  stopTour: () => void,
}

export interface TourStepItem {
  /** Идентификатор шага */
  stepKey: string | number,
  /** Элемент, который надо подсветить */
  element: HTMLElement | null,
  /** Контент */
  content: (props: ContentProps) => React.ReactElement | null,
  /** Отступ при скролле в px, по умолчанию 200px */
  offsetTop?: number,
  /** Скругление у выделенных элементов в px, по-умолчанию 15px */
  borderRadius?: number,
  /** Положение модалки */
  position: 'top' | 'right' | 'bottom' | 'left',
}

export interface ChangeEvent {
  component: {
    value: number | string | null,
    item: TourStepItem | null,
  },
}

export interface TourProps {
  /** Шаги гайд-тура */
  data: TourStepItem[],
  /** Идентификатор активного шага, если null - гайд-тур закрыт */
  activeStepKey?: number | string | null,
  /** Обработчик изменения */
  onChange: (ev: ChangeEvent) => void,
}
