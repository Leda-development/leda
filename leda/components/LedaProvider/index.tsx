'use client';

import React from 'react';
import { LedaContext } from './LedaContext';
import { globalDefaultTheme } from './globalDefaultTheme';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { GlobalDefaultRenders } from './globalDefaultRenders';
import { globalDefaultRenders } from './globalDefaultRenders';
import type { PartialGlobalDefaultMessages } from './globalDefaultMessages';
import { globalDefaultMessages } from './globalDefaultMessages';

export interface LedaProps {
  children: React.ReactNode,
  theme?: PartialGlobalDefaultTheme,
  messages?: PartialGlobalDefaultMessages,
  renders?: GlobalDefaultRenders,
}

export const Leda = ((props: LedaProps): React.ReactElement => {
  const {
    theme = globalDefaultTheme,
    renders = globalDefaultRenders,
    messages = globalDefaultMessages,
    children,
  } = props;

  const context = { messages, theme, renders };

  return (
    <LedaContext.Provider value={context}>
      {children}
    </LedaContext.Provider>
  );
}) as React.FC<LedaProps>;

export { LedaContext } from './LedaContext';
export { globalDefaultTheme } from './globalDefaultTheme';
