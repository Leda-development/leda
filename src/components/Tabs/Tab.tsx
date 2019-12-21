import React from 'react';
import { bindFunctionalRef, mergeClassNames, getClassNames } from '../../utils';
import { Li } from '../Li';
import { TabsContext } from './TabsContext';
import { TabProps, TabRefCurrent } from './types';

export const Tab = React.forwardRef((props: TabProps, ref: React.Ref<TabRefCurrent>): React.ReactElement => {
  const { onTabSelect, activeTabKey, theme: parentTheme } = React.useContext(TabsContext);

  const {
    tabKey, title, className, style, theme: themeProp,
  } = mergeClassNames<TabProps>(props);

  // тема, переданная в таб перекрывает родительскую тему и дефолтную
  const theme = { ...parentTheme, ...themeProp };

  const isTabActive = tabKey === activeTabKey;
  // если таб активен - у него появляется класс active
  const combinedClassNames = getClassNames(
    theme.tab,
    { [theme.tabActive]: isTabActive },
    className,
  );

  return (
    <Li
      className={combinedClassNames}
      stye={style}
      onClick={ev => onTabSelect(ev, tabKey)}
      ref={ref && (component => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
    >
      {title}
    </Li>
  );
}) as React.FC<TabProps>;

Tab.displayName = 'Tab';
