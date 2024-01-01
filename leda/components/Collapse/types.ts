import type * as React from 'react';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { COMPONENTS_NAMESPACES } from '../../constants';

export interface CollapseToggleEvent {
  /** The new state */
  isOpen: boolean,
}

export interface CollapseProps {
  /** Content */
  children?: React.ReactNode,
  /** Controlled mode */
  isOpen?: boolean,
  /** Toggle handler */
  onToggle?: (ev: CollapseToggleEvent) => void,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Pass *false* if you don't want the component to appear */
  shouldRender: boolean,
  /** Summary */
  summary: React.ReactNode,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.collapse],
  /** _css-class-names */
  [x: string]: unknown,
}
