import * as React from 'react';
import { hideTooltip, showTooltip } from './helpers';
import { UseTooltipEffects } from './types';

export const useTooltipEffects: UseTooltipEffects = ({
  isOpen, positionProp, children, invisibleElementRef, tooltipRef, position, setPosition, mergeStyle,
}) => {
  const sibling = invisibleElementRef.current?.nextElementSibling;

  const hide = React.useCallback(() => {
    hideTooltip({
      isOpen, positionProp, setPosition, mergeStyle,
    });
  }, [isOpen, positionProp, setPosition, mergeStyle]);

  const show = React.useCallback(() => {
    showTooltip({
      invisibleElementRef, tooltipRef, position, setPosition, mergeStyle,
    });
  }, [invisibleElementRef, tooltipRef, position, setPosition, mergeStyle]);

  React.useEffect(() => {
    hide();

    return hide;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  React.useEffect(() => {
    if (sibling) {
      const element = sibling as HTMLElement;

      element.addEventListener('pointerenter', show);
      element.addEventListener('pointerleave', hide);
      element.addEventListener('touchstart', show);
      element.addEventListener('touchend', hide);

      return () => {
        if (element) {
          element.removeEventListener('pointerenter', show);
          element.removeEventListener('pointerleave', hide);
          element.removeEventListener('touchstart', show);
          element.removeEventListener('touchend', hide);
        }
      };
    }

    return undefined;
  }, [sibling, hide, show]);
};
