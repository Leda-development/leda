'use client'

import React from 'react';
import {
  getClassNames, useElement, useProps,
} from '../../utils';
import { Li, LiProps } from '../Li';
import { TabsContext } from './TabsContext';
import { TabProps } from './types';

export const Tab = React.forwardRef((props: TabProps, ref: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    onTabSelect, activeTabKey, theme: parentTheme, tabRender: parentTabRender,
  } = React.useContext(TabsContext);

  const {
    isDisabled, tabKey, title, className, style, theme: themeProp, tabRender: childTabRender,
  } = useProps(props);

  const tabRender = childTabRender ?? parentTabRender;

  // the theme passed to the tab overrides the parent theme and the default theme
  const theme = { ...parentTheme, ...themeProp };

  const isTabActive = tabKey === activeTabKey;

  const combinedClassNames = getClassNames(
    theme.tab,
    { [theme.tabActive]: isTabActive },
    { [theme.tabDisabled]: isDisabled },
    className,
  );

  const TabItem = useElement<TabProps, {}, LiProps>(
    'TabItem',
    Li,
    tabRender,
    props,
  );

  const handleClick: React.MouseEventHandler<HTMLLIElement> = React.useCallback((event) => {
    if (!isDisabled) {
      onTabSelect(event, tabKey);
    }
  }, [onTabSelect, isDisabled, tabKey]);

  return (
    <TabItem
      className={combinedClassNames}
      onClick={handleClick}
      ref={ref}
    >
      {title}
    </TabItem>
  );
}) as React.FC<TabProps>;

Tab.displayName = 'Tab';
