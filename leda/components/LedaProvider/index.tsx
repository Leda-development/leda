import React from 'react';
import { LedaContext } from './LedaContext';
import { globalDefaultTheme } from './globalDefaultTheme';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { GlobalDefaultRenders } from './globalDefaultRenders';
import { UnderscoreClasses } from './underscoreClasses';
import { defaultContext } from './defaultContext';

export interface LedaProps {
  children: React.ReactNode,
  theme?: PartialGlobalDefaultTheme,
  renders?: GlobalDefaultRenders,
  underscoreClassesTransform?: UnderscoreClasses,
}

export const Leda = ((props: LedaProps): React.ReactElement => {
  const {
    theme,
    renders,
    underscoreClassesTransform,
    children,
  } = props;

  const context = {
    theme: theme ?? defaultContext.theme,
    renders: renders ?? defaultContext.renders,
    underscoreClassesTransform: underscoreClassesTransform ?? defaultContext.underscoreClassesTransform,
  };

  return (
    <LedaContext.Provider value={context}>
      {children}
    </LedaContext.Provider>
  );
}) as React.FC<LedaProps>;

export { LedaContext } from './LedaContext';
export { globalDefaultTheme } from './globalDefaultTheme';
export { UnderscoreClasses } from './underscoreClasses';
export { setDefaultUnderscoreClassesTransform } from './defaultContext';
