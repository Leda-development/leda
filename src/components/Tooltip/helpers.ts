import * as React from 'react';
import { equals } from '../../utils/guardsHelpers';
import { Guards } from '../../utils/monads';
import {
  HideTooltip, ShowTooltip, TooltipPosition,
} from './types';
import { SetState } from '../../commonTypes';

const updateTooltipPosition = (data: {
  tooltipRef: React.MutableRefObject<HTMLDivElement | null>,
  target: Element,
  position: TooltipPosition,
  setPosition: SetState<TooltipPosition>,
}): TooltipPosition => {
  const {
    tooltipRef, position, setPosition, target,
  } = data;

  if (!tooltipRef || !tooltipRef.current) return 'top';

  const element = tooltipRef.current;

  const rect = element.getBoundingClientRect();

  const targetRect = target.getBoundingClientRect();

  const arrowSize = 10;

  const handleTopPosition = () => {
    if (targetRect.top - arrowSize - rect.height < 0 && position !== 'bottom') {
      setPosition('bottom');

      return 'bottom';
    }

    return 'top';
  };

  const handleLeftPosition = () => {
    if (targetRect.left - arrowSize - rect.width < 0 && position !== 'right') {
      setPosition('right');

      return 'right';
    }

    return 'left';
  };

  const handleRightPosition = () => {
    if (targetRect.right + arrowSize + rect.width > window.innerWidth && position !== 'left') {
      setPosition('left');

      return 'left';
    }

    return 'right';
  };

  const handleBottomPosition = () => {
    if (targetRect.bottom + arrowSize + rect.height > window.innerHeight && position !== 'top') {
      setPosition('top');

      return 'top';
    }

    return 'bottom';
  };

  return Guards(position)
    .when(equals('top'), handleTopPosition)
    .when(equals('left'), handleLeftPosition)
    .when(equals('right'), handleRightPosition)
    .when(equals('bottom'), handleBottomPosition)
    .otherwise(() => 'top')
    .getValue() as TooltipPosition;
};

export const showTooltip: ShowTooltip = ({
  invisibleElementRef, position, setPosition, tooltipRef,
}): void => {
  // вычисление координат тултипа на основе координат потомков тултипа
  const element = invisibleElementRef.current ? invisibleElementRef.current.nextElementSibling : null;

  if (!element) return;

  const {
    top, bottom, right, left, width, height,
  } = element.getBoundingClientRect();

  if (tooltipRef.current) tooltipRef.current.style.height = 'auto';

  const newPosition = updateTooltipPosition({
    tooltipRef,
    position,
    target: element,
    setPosition,
  });

  const newTooltipStyles: { top: string, left: string } = {
    top: (() => {
      switch (newPosition) {
        case 'top':
          return `${top + window.pageYOffset}px`;
        case 'right':
          return `${top + window.pageYOffset + (height / 2)}px`;
        case 'left':
          return `${top + window.pageYOffset + (height / 2)}px`;
        case 'bottom':
          return `${bottom + window.pageYOffset}px`;
        default:
          return `${top + window.pageYOffset}px`;
      }
    })(),
    left: (() => {
      switch (newPosition) {
        case 'top':
          return `${left + window.pageXOffset + (width / 2)}px`;
        case 'right':
          return `${right + window.pageXOffset}px`;
        case 'left':
          return `${left + window.pageXOffset}px`;
        case 'bottom':
          return `${left + window.pageXOffset + (width / 2)}px`;
        default:
          return `${left + window.pageXOffset + (width / 2)}px`;
      }
    })(),
  } as const;

  const setTooltipStyles = (topStyle: string, leftStyle: string): void => {
    if (tooltipRef.current) {
      tooltipRef.current.style.opacity = '1';
      tooltipRef.current.style.height = 'auto';
      tooltipRef.current.style.top = topStyle;
      tooltipRef.current.style.left = leftStyle;
    }
  };

  setTooltipStyles(newTooltipStyles.top, newTooltipStyles.left);
};

export const hideTooltip: HideTooltip = ({
  isOpen, tooltipRef, positionProp, setPosition,
}): void => {
  if (isOpen) return;

  if (tooltipRef.current) {
    tooltipRef.current.style.opacity = '0';
    tooltipRef.current.style.height = '0';
    tooltipRef.current.style.left = '-99999px';
  }

  setPosition(positionProp);
};
