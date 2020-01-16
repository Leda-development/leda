import 'element-closest/browser';
import * as React from 'react';
import { isFunction } from 'lodash';
import CSSCollapse from 'react-css-collapse';
import { bindFunctionalRef, mergeClassNames } from '../../utils';
import { SomeRefCurrent } from '../../commonTypes';
import { DEFAULT_TRANSITION } from './contants';
import { generateTransitionProperty } from './helpers';
import { CollapsibleProps, CollapsibleRefCurrent } from './types';

export const Collapsible = React.forwardRef((props: CollapsibleProps, ref: React.Ref<CollapsibleRefCurrent>) => {
  const {
    children,
    className,
    isOpen,
    onClose,
    onOpen,
    onToggle,
    transition = DEFAULT_TRANSITION,
  } = mergeClassNames<CollapsibleProps>(props);

  const onRest = (): void => {
    if (isOpen && isFunction(onOpen)) {
      onOpen();
    }
    if (!isOpen && isFunction(onClose)) {
      onClose();
    }
    if (isFunction(onToggle)) {
      onToggle();
    }
  };

  const transitionProperty = typeof transition === 'string' ? transition : generateTransitionProperty(transition);

  return (
    <CSSCollapse
      isOpen={isOpen}
      className={className}
      onRest={onRest}
      transition={transitionProperty}
      ref={ref && ((component: CSSCollapse): void => bindFunctionalRef(component, ref, component && {
        wrapper: (component as unknown as SomeRefCurrent).content && (component as unknown as { content: Element }).content.closest('div'),
      }))}
    >
      {children}
    </CSSCollapse>
  );
}) as React.FC<CollapsibleProps>;

Collapsible.displayName = 'Collapsible';
