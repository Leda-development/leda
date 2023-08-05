import * as React from 'react';
import { CustomRender, Values } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { LABELS } from './constants';

export type SliderValue = number | number[];

export interface SliderState {
  value: SliderValue,
}

export interface ChangeEvent {
  component: {
    value: SliderValue | null | undefined,
    name?: string,
  },
}

export interface SliderProps {
  /** Default value */
  defaultValue?: SliderValue,
  /** Disabled state */
  isDisabled?: boolean,
  /** Tooltips over handlers */
  hasTooltip?: boolean,
  /** Label type */
  labelType?: 'current' | 'minmax',
  /** Max value */
  max?: number,
  /** Min value */
  min?: number,
  /** Min handlers distance */
  minRange?: number,
  /** Name */
  name?: string,
  /** Change handler */
  onChange?: (event: ChangeEvent) => void,
  /** Handler move handler */
  onMove?: (event: ChangeEvent) => void,
  /** Ref */
  ref?: React.Ref<SliderRefCurrent>,
  /** Step, defaults to 1 */
  step?: number,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.slider],
  /** Units customizator */
  unitsRender?: CustomRender<SliderProps, SliderState, {}>,
  /** Value */
  value?: SliderValue | null,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface SliderLabelsProps {
  shouldRender: boolean,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.slider],
  min: number,
  max: number,
  type: Values<typeof LABELS>,
  children?: React.ReactNode,
  value: number | number[],
}

export interface SliderTooltipProps {
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.slider],
  value: number | number[],
  shouldRender: boolean,
}

export interface SliderRefCurrent {
  wrapper: HTMLDivElement | null,
}
