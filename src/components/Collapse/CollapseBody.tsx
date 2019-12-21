import React from 'react';
import { isFunction } from 'lodash';
import CSSCollapse from 'react-css-collapse';
import {
  bindFunctionalRef, Guards, Maybe, mergeClassNames,
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

  const callOpenHandler = React.useCallback(() => Maybe(onOpen).ap(customEvent),
    [onOpen, customEvent]);

  const callCloseHandler = React.useCallback(() => Maybe(onClose)
    .ap(customEvent)
    .of(onCloseByClick)
    .ifDo((handle): handle is NonNullable<typeof onCloseByClick> => isFunction(handle) && isClicked, handle => handle(customEvent)),
  [customEvent, isClicked, onClose, onCloseByClick]);

  const handleRest = React.useCallback((): void => Guards(customEvent)
    .when(() => isExpanded, callOpenHandler)
    .otherwise(callCloseHandler)
    .toMonad()
    .of(onBodyRest)
    .ap(customEvent)
    .getValue(),
  [callCloseHandler, callOpenHandler, customEvent, isExpanded, onBodyRest]);

  const BodyWrapper = useBodyWrapper(props);

  return (
    <BodyWrapper
      ref={ref && (component => bindFunctionalRef(component, ref, component && {
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
