'use client';

import React from 'react';
import isNil from 'lodash/isNil';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { createSelectHandler } from './handlers';
import { useCustomElements, useTabsScroll } from './hooks';
import { TabContent } from './TabContent';
import { Tab } from './Tab';
import {
  getClassNames, useProps, useTheme,
} from '../../utils';
import { TabsContext } from './TabsContext';
import type { TabsProps } from './types';
import { ArrowLeft, ArrowRight } from './ScrollArrows';
import { Div } from '../Div';

export const Tabs = React.forwardRef((props: TabsProps, ref?: React.Ref<HTMLElement>): React.ReactElement | null => {
  const {
    theme: themeProp,
    activeTabKey: activeTabKeyProp,
    children,
    className,
    shouldScrollTabs,
    style,
    tabContentNode,
    tabRender,
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.tabs);

  const [activeTabKeyState, setActiveTabKeyState] = React.useState<string | number>(0);

  // if activeTabKey is not passed - work in uncontrolled mode
  const activeTabKey = isNil(activeTabKeyProp)
    ? activeTabKeyState
    : activeTabKeyProp;

  const handleSelect = createSelectHandler(props, activeTabKeyState, setActiveTabKeyState);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const tabsContext = {
    activeTabKey, onTabSelect: handleSelect, theme, tabRender,
  };

  const combinedClassNames = getClassNames(theme.wrapper, className);

  const {
    Wrapper,
    Content,
    Heading,
  } = useCustomElements(props, { activeTabKey: activeTabKeyState });

  const {
    containerRef,
    hasScroll,
    hasLeftArrow,
    hasRightArrow,
    onRightClick,
    onLeftClick,
  } = useTabsScroll({ shouldScrollTabs, theme });

  const containerClassNames = getClassNames(
    theme.container,
    hasScroll && theme.scroll,
  );

  const headingClassNames = getClassNames(
    theme.tabsBar,
    shouldScrollTabs && theme.scroll,
  );

  if (!children) return null;

  return (
    <Wrapper
      className={combinedClassNames}
      style={style as React.CSSProperties}
      ref={ref}
    >
      <Div
        ref={containerRef}
        className={containerClassNames}
      >
        {hasLeftArrow && (
          <ArrowLeft
            onClick={onLeftClick}
            theme={theme}
          />
        )}

        {hasRightArrow && (
          <ArrowRight
            onClick={onRightClick}
            theme={theme}
          />
        )}

        <Heading className={headingClassNames}>
          <TabsContext.Provider value={tabsContext}>
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) return null;

              return (
                <Tab {...child.props} />
              );
            })}
          </TabsContext.Provider>
        </Heading>
      </Div>
      <Content className={theme.content} tabContentNode={tabContentNode}>
        <TabContent activeTabKey={activeTabKey} key={activeTabKey}>
          {children}
        </TabContent>
      </Content>
    </Wrapper>
  );
}) as React.FC<TabsProps>;

Tabs.displayName = 'Tabs';
