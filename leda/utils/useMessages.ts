import * as React from 'react';
import type { globalDefaultTheme } from '../components/LedaProvider';
import { LedaContext } from '../components/LedaProvider';
import type { RecursivePartial } from '../commonTypes';
import { globalDefaultMessages } from '../components/LedaProvider/globalDefaultMessages';

export type GlobalDefaultTheme = typeof globalDefaultTheme;

export type PartialGlobalDefaultTheme = RecursivePartial<GlobalDefaultTheme>;

export const useMessages = <T extends keyof typeof globalDefaultMessages>(
  fieldName: T,
): typeof globalDefaultMessages[T] => {
  const {
    messages: globalMessages,
  } = React.useContext(LedaContext);

  return React.useMemo(() => ({
    ...globalDefaultMessages[fieldName], ...globalMessages[fieldName],
  }), [fieldName, globalMessages]) as unknown as typeof globalDefaultMessages[T];
};
