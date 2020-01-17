import React from 'react';
import { globalDefaultTheme } from '../LedaProvider';
import { ModalContextType } from './types';

export const ModalContext = React.createContext<ModalContextType>({
  headerClassName: globalDefaultTheme.modal.header,
  bodyClassName: globalDefaultTheme.modal.body,
  footerClassName: globalDefaultTheme.modal.footer,
});
