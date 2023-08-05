import * as React from 'react';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender } from '../../commonTypes';

export interface ProgressBarProps {
  /** Ref */
  ref?: React.Ref<ProgressBarRefCurrent>,
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

export interface ProgressBarRefCurrent {
  wrapper: HTMLDivElement | null,
}
