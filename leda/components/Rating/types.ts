import type * as React from 'react';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { IconTypes } from '../..';
import type { ValidationProps } from '../Validation/types';

export type RatingValue = number | null | undefined;

export interface ChangeEvent {
  component: {
    value: RatingValue,
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

export type SetCurrentSelected = React.Dispatch<React.SetStateAction<RatingValue>>;

export type SetIsHovered = React.Dispatch<React.SetStateAction<boolean>>;

export interface RatingProps extends ValidationProps {
  /** Default rating value */
  defaultValue?: RatingValue,
  /** Icon, default is Star */
  icon?: IconTypes.Icons,
  /** Icon props */
  iconProps?: Omit<IconProps, 'icon'>,
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
  value?: RatingValue,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface RatingIconProps {
  isFilled: boolean,
  sizeRem?: number,
}
