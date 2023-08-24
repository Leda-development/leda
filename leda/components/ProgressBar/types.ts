import type * as React from 'react';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { CustomRender } from '../../commonTypes';

export interface ProgressBarProps {
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.progressBar],
  /** How much it is complete */
  value: number,
  /** Value customizator, if digits are not needed pass () => null */
  valueRender?: CustomRender<ProgressBarProps, {}, ValueLabelProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface ValueLabelProps {
  'data-value': number,
  children: React.ReactNode,
  className: string,
}
