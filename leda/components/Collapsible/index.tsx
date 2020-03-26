import 'element-closest/browser';
import * as React from 'react';
import { bindFunctionalRef, useProps } from '../../utils';
import { DEFAULT_TRANSITION } from './contants';
import { generateTransitionProperty } from './helpers';
import { CollapsibleProps, CollapsibleRefCurrent } from './types';
import { useCollapse } from '../Collapse/useCollapse';
import { Div } from '../Div';

export const Collapsible = React.forwardRef((props: CollapsibleProps, ref: React.Ref<CollapsibleRefCurrent>) => {
  const {
    children,
    className,
    isOpen,
    onClose,
    onOpen,
    onToggle,
    transition = DEFAULT_TRANSITION,
  } = useProps(props);

  const onRest = React.useCallback((): void => {
    if (isOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
    onToggle?.();
  }, [isOpen, onClose, onOpen, onToggle]);

  const transitionProperty = typeof transition === 'string' ? transition : generateTransitionProperty(transition);

  const bodyRef = React.useRef<HTMLElement>();

  const { setIsExpandedStyle, setIsCollapsedStyle, style } = useCollapse({
    isOpen,
    content: bodyRef,
  });

  const onTransitionEnd = React.useCallback((ev: React.TransitionEvent) => {
    if (ev.target === bodyRef.current && ev.propertyName === 'height') {
      if (isOpen) {
        setIsExpandedStyle();
      } else {
        setIsCollapsedStyle();
      }

      onRest();
    }
  },
  [isOpen, onRest, setIsCollapsedStyle, setIsExpandedStyle]);

  const styles = React.useMemo(() => ({
    willChange: 'height',
    transition: transitionProperty,
    ...style,
  }), [style, transitionProperty]);

  return (
    <Div
      ref={((component) => {
        if (ref) {
          bindFunctionalRef(component, ref, component && {
            wrapper: component.wrapper ? component.wrapper : component,
          });
        }

        bodyRef.current = component?.wrapper ?? undefined;
      })}
      onTransitionEnd={onTransitionEnd}
      className={className}
      style={styles as React.CSSProperties}
    >
      {children}
    </Div>
  );
}) as React.FC<CollapsibleProps>;

Collapsible.displayName = 'Collapsible';
