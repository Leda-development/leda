import type * as React from 'react';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { IconTypes } from '../..';

export interface ChangeEvent {
  component: {
    value: number,
    index: number,
    name?: string,
  },
}

export interface IconProps {
  key: string,
  className?: string,
  [x: string]: unknown,
}

export interface RatingState {
  currentSelected: number,
  isHovered: boolean,
}

export type SetCurrentSelected = React.Dispatch<React.SetStateAction<number>>;

export type SetIsHovered = React.Dispatch<React.SetStateAction<boolean>>;

export interface RatingProps {
  /** Icon, default is Star */
  icon?: IconTypes.Icons,
  /** Don't click the rating */
  isDisabled?: boolean,
  /** Stars number */
  max?: number,
  /** Name */
  name?: string,
  /** Change handler */
  onChange?: (event: ChangeEvent) => void,
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLSpanElement>,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.rating],
  /** Rating value */
  value: number,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface RatingIconProps {
  isFilled: boolean,
  sizeRem?: number,
}
