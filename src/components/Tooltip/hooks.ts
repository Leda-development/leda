import * as React from 'react';
import { hideTooltip, showTooltip } from './helpers';
import { UseTooltipEffects } from './types';

export const useTooltipEffects: UseTooltipEffects = ({
  invisibleElementRef, tooltipRef, isOpen, position, setPosition, setHidden, positionProp, children,
}) => {
  // hide on mount and unmount
  React.useEffect(() => {
    const hide = (): void => hideTooltip({
      isOpen, tooltipRef, positionProp, setPosition,
    });

    hide();

    return () => hide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect((): (() => void) | void => {
    const element = invisibleElementRef.current;

    const hide = (): void => hideTooltip({
      isOpen, tooltipRef, positionProp, setPosition,
    });

    const show = (): void => showTooltip({
      invisibleElementRef,
      position,
      setPosition,
      tooltipRef,
    });

    if (element && element.nextElementSibling) {
      // Проверка на видимость элемента в доме. При W и H === 0 eventListener не срабатывает.
      // Проверка нужна для CheckBox и других невидимых элементов
      if ((element.nextElementSibling as HTMLElement).offsetWidth === 0 && (element.nextElementSibling as HTMLElement).offsetHeight === 0) {
        setHidden(true);
        element.nextElementSibling.addEventListener('mouseenter', show);
        element.nextElementSibling.addEventListener('mouseleave', hide);
      } else {
        element.nextElementSibling.addEventListener('mouseenter', show);
        element.nextElementSibling.addEventListener('mouseleave', hide);
      }

      return () => {
        if (element && element.nextElementSibling) {
          element.nextElementSibling.removeEventListener('mouseenter', show);
          element.nextElementSibling.removeEventListener('mouseleave', hide);
        }
      };
    }

    return undefined;
  }, [invisibleElementRef, isOpen, position, positionProp, setHidden, setPosition, tooltipRef]);

  React.useEffect((): void => {
    if (isOpen) {
      setTimeout(() => showTooltip({
        invisibleElementRef,
        position,
        setPosition,
        tooltipRef,
      }), 500);
    }
  }, [invisibleElementRef, isOpen, position, positionProp, setPosition, tooltipRef]);

  // hide if child unmounts
  React.useEffect(() => {
    const element = invisibleElementRef.current;

    if (element && !element.nextElementSibling) {
      hideTooltip({
        setPosition,
        positionProp,
        tooltipRef,
        isOpen,
      });
    }
  }, [children, invisibleElementRef, isOpen, positionProp, setPosition, tooltipRef]);
};
