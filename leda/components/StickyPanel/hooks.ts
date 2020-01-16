import React from 'react';
import { UseStickyPanelEffect } from './types';

export const useStickyPanelEffect: UseStickyPanelEffect = ({
  updatePanelPosition,
  handleScroll,
  handleResize,
  panelRef,
  shouldAlwaysRerender,
  panelStyles,
  setPanelStyles,
}) => {
  React.useEffect((): () => void => {
    if (panelRef.current && panelRef.current.parentElement) {
      const panelDimensions = panelRef.current.getBoundingClientRect();
      // Устанавливаем высоту wrapper равную высоте panel чтобы при зафиксированной панели не искажалась высота родителя
      panelRef.current.parentElement.style.height = `${panelDimensions.height}px`;
    }
    // Устанавливаем начальное положение тулбара
    updatePanelPosition();

    document.addEventListener('scroll', handleScroll, false);

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('scroll', handleScroll, false);

      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, handleScroll, panelRef, updatePanelPosition]);

  // обновления на каждом рендере
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect((): void => {
    if (!shouldAlwaysRerender) return;

    const panelWrapperRect = panelRef.current?.parentElement?.parentElement?.getBoundingClientRect();

    if (panelWrapperRect && panelStyles.width && (`${panelWrapperRect.width}px`) !== panelStyles.width) {
      setPanelStyles({
        ...panelStyles,
        width: `${panelWrapperRect.width}px`,
      });
    }
  });
};
