import * as React from 'react';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { SetState } from '../../commonTypes';

export interface StickyPanelProps {
  /** Дочерние элементы */
  children: React.ReactNode,
  /** Включает режим обновления при каждом рендере, не используйте этот атрибут, если у вас нет анимаций для StickyPanel */
  shouldAlwaysRerender?: boolean,
  /** Отступ компонента в px от начала родителя (насколько ниже начала родителя должен появлятся компонент, чтобы компонент не перекрывал начало родителя) */
  offsetTop?: number,
  /** Реф */
  ref?: React.Ref<StickyPanelRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.stickyPanel],
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface StickyPanelState {
  panelStyles: React.CSSProperties,
  panelPosition: string,
}

export interface PageScroll {
  top: number,
  left: number,
}

export interface UpdateState {
  (state: StickyPanelState): void,
}

export interface CreatePanelPositionUpdater {
  (
    updateState: UpdateState,
    offsetTop: number,
    panelPosition: string,
    panelRef: React.MutableRefObject<HTMLDivElement | null>,
  ): UpdatePanelPosition,
}

export interface UpdatePanelPosition {
  (shouldRerender?: boolean): void,
}

export interface ScrollHandler {
  (): void,
}

export interface ResizeHandler {
  (): void,
}

export interface UseStickyPanelEffect {
  (data: {
    updatePanelPosition: UpdatePanelPosition,
    handleScroll: ScrollHandler,
    handleResize: ResizeHandler,
    panelRef: React.MutableRefObject<HTMLDivElement | null>,
    shouldAlwaysRerender?: boolean,
    panelStyles: React.CSSProperties,
    setPanelStyles: SetState<React.CSSProperties>,
  }): void,
}

export interface StickyPanelRefCurrent {
  wrapper: HTMLDivElement | null,
}
