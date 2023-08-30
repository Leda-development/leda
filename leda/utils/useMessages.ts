import * as React from 'react';
import { LedaContext } from '../components/LedaProvider';
import { globalDefaultMessages } from '../components/LedaProvider/globalDefaultMessages';

export const useMessages = <T extends keyof typeof globalDefaultMessages>({
  fieldName,
  messages: componentMessages,
}: {
  fieldName: T,
  messages?: typeof globalDefaultMessages[T],
}): typeof globalDefaultMessages[T] => {
  const {
    messages: globalMessages,
  } = React.useContext(LedaContext);

  return {
    ...globalDefaultMessages[fieldName], ...globalMessages[fieldName], ...componentMessages,
  };
};
