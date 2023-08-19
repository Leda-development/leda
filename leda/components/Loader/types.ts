import * as React from 'react';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender } from '../../commonTypes';

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Put your own loader here */
  iconRender?: CustomRender<LoaderProps, {}, {}>,
  /** Fullscreen loader */
  isGlobal?: boolean,
  /** Or not */
  isLoading?: boolean,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.loader],
  /** Underscore CSS classes */
  [x: string]: unknown,
}

export interface IconProps {
  className?: string,
  icon: string,
}
