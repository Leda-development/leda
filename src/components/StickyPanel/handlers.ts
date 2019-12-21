import {
  ResizeHandler, ScrollHandler, UpdatePanelPosition,
} from './types';

// При прокрутке перезаписываем локальные значения и при необходимости пересчитываем стили тулбара
export const createScrollHandler = (updatePanelPosition: UpdatePanelPosition): ScrollHandler => () => {
  updatePanelPosition();
};

// При ресайзе пересчитываем стили тулбара
export const createResizeHandler = (updatePanelPosition: UpdatePanelPosition): ResizeHandler => () => {
  updatePanelPosition();
};
