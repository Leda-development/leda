import * as React from 'react';
import { Div } from '../Div';
import {
  bindFunctionalRef, getClassNames, mergeClassNames, useTheme,
} from '../../utils';
import { StickyPanelProps, StickyPanelRefCurrent, StickyPanelState } from './types';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  createPanelPositionUpdater,
} from './helpers';
import { createResizeHandler, createScrollHandler } from './handlers';
import { useStickyPanelEffect } from './hooks';

export const StickyPanel = React.forwardRef((props: StickyPanelProps, ref?: React.Ref<StickyPanelRefCurrent>): React.ReactElement => {
  const {
    theme: themeProp,
    children,
    offsetTop = 0,
    className,
    shouldAlwaysRerender,
    ...restProps
  } = mergeClassNames(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.stickyPanel);

  const [panelStyles, setPanelStyles] = React.useState<StickyPanelState['panelStyles']>({});

  const [panelPosition, setPanelPosition] = React.useState<StickyPanelState['panelPosition']>('none');

  const panelRef = React.useRef<HTMLDivElement | null>(null);

  const updatePanelPosition = React.useMemo(() => createPanelPositionUpdater(
    (state: StickyPanelState): void => {
      setPanelPosition(state.panelPosition);
      setPanelStyles(state.panelStyles);
    },
    offsetTop,
    panelPosition,
    panelRef,
  ), [offsetTop, panelPosition]);

  const handleScroll = React.useMemo(() => createScrollHandler(updatePanelPosition), [updatePanelPosition]);

  const handleResize = React.useMemo(() => createResizeHandler(updatePanelPosition), [updatePanelPosition]);

  useStickyPanelEffect({
    handleScroll,
    handleResize,
    panelRef,
    panelStyles,
    setPanelStyles,
    shouldAlwaysRerender,
    updatePanelPosition,
  });

  const panelWrapperClassname = getClassNames(
    className,
    theme.wrapper,
    { [theme.fixed]: panelPosition === 'fixed' },
  );

  return (
    <Div
      className={panelWrapperClassname}
      ref={ref && (component => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
      {...restProps}
    >
      <div ref={panelRef} className={theme.container} style={panelStyles}>
        {children}
      </div>
    </Div>
  );
}) as React.FC<StickyPanelProps>;

StickyPanel.displayName = 'StickyPanel';
