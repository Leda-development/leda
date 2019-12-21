import * as React from 'react';
import { globalDefaultTheme } from '../Leda';

export const VStepperContext = React.createContext<{ theme: typeof globalDefaultTheme.vstepper}>({ theme: globalDefaultTheme.vstepper });
