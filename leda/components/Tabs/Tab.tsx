import React from 'react';
import {
  bindFunctionalRef, mergeClassNames, getClassNames, useElement,
} from '../../utils';
import { Li, LiProps } from '../Li';
import { TabsContext } from './TabsContext';
import { TabProps, TabRefCurrent } from './types';

export const Tab = React.forwardRef((props: TabProps, ref: React.Ref<TabRefCurrent>): React.ReactElement => {
  const {
    onTabSelect, activeTabKey, theme: parentTheme, tabRender: parentTabRender,
  } = React.useContext(TabsContext);

  const {
    tabKey, title, className, style, theme: themeProp, tabRender: childTabRender,
  } = mergeClassNames<TabProps>(props);

  const tabRender = childTabRender ?? parentTabRender;

  // тема, переданная в таб перекрывает родительскую тему и дефолтную
  const theme = { ...parentTheme, ...themeProp };

  const isTabActive = tabKey === activeTabKey;
  // если таб активен - у него появляется класс active
  const combinedClassNames = getClassNames(
    theme.tab,
    { [theme.tabActive]: isTabActive },
    className,
  );

  const TabItem = useElement<TabProps, {}, LiProps>(
    'TabItem',
    Li,
    tabRender,
    props,
  );

  return (
    <TabItem
      className={combinedClassNames}
      stye={style}
      onClick={(ev) => onTabSelect(ev, tabKey)}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
    >
      {title}
    </TabItem>
  );
}) as React.FC<TabProps>;

Tab.displayName = 'Tab';
