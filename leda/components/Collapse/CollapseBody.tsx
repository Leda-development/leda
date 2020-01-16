import React from 'react';
import CSSCollapse from 'react-css-collapse';
import {
  bindFunctionalRef, mergeClassNames,
} from '../../utils';
import { Loader } from '../Loader';
import { CollapsePanelContext } from './CollapseContext';
import { useBodyWrapper } from './helpers';
import { BodyProps, BodyRefCurrent } from './types';

export const Body = React.forwardRef((props: BodyProps, ref?: React.Ref<BodyRefCurrent>): React.ReactElement => {
  const {
    onOpen, onCloseByClick, onClose, isLoading, transition, children, className,
  } = mergeClassNames<BodyProps>(props);

  const {
    isExpanded, isClicked, onBodyRest, panelKey,
  } = React.useContext(CollapsePanelContext);

  const customEvent = React.useMemo(() => ({
    component: {
      value: panelKey,
    },
  }), [panelKey]);

  const callOpenHandler = React.useCallback(() => onOpen?.(customEvent),
    [onOpen, customEvent]);

  const callCloseHandler = React.useCallback(() => {
    onClose?.(customEvent);
    if (isClicked) onCloseByClick?.(customEvent);
  },
  [customEvent, isClicked, onClose, onCloseByClick]);

  const handleRest = React.useCallback((): void => {
    if (isExpanded) callOpenHandler();
    else callCloseHandler();
    onBodyRest();
  },
  [callCloseHandler, callOpenHandler, isExpanded, onBodyRest]);

  const BodyWrapper = useBodyWrapper(props);

  return (
    <BodyWrapper
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper ? component.wrapper : component,
      }))}
      className={className}
    >
      <CSSCollapse
        isOpen={isExpanded}
        onRest={handleRest}
        transition={transition || 'height 250ms cubic-bezier(.4, 0, .2, 1)'}
      >
        {isLoading ? <Loader /> : children}
      </CSSCollapse>
    </BodyWrapper>
  );
}) as React.FC<BodyProps>;

Body.displayName = 'Collapse.Body';
