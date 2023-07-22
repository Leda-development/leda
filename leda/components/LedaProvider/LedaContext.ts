import React from 'react';
import { globalDefaultTheme } from './globalDefaultTheme';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { GlobalDefaultRenders, globalDefaultRenders } from './globalDefaultRenders';

export interface LedaContextType {
  theme: PartialGlobalDefaultTheme,
  renders: GlobalDefaultRenders,
}

export const LedaContext = React.createContext<LedaContextType>({
  theme: globalDefaultTheme,
  renders: globalDefaultRenders as GlobalDefaultRenders,
});
