import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { globalDefaultTheme } from '../LedaProvider';
import type { TabsContextType } from './types';

export const TabsContext = React.createContext<TabsContextType>({
  onTabSelect: () => {},
  activeTabKey: 0,
  theme: globalDefaultTheme[COMPONENTS_NAMESPACES.tabs],
});
