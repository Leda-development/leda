import type * as React from 'react';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type {
  ArrayElement, CustomRender, SetState, SomeObject,
} from '../../commonTypes';
import type { ButtonProps } from '../Button/types';
import type { ValidationProps } from '../Validation/types';

export type Value = string | SomeObject | number | null;

export interface ResetEvent<T = Value | Value[]> {
  component: {
    value?: T, // value is a data element
    name?: string,
  },
}

export interface ButtonClickEvent<T = Value | Value[]> extends React.MouseEvent {
  component: {
    value: T, // value is a data element
    name?: string,
  },
}

export type ChangeEvent<T> = ButtonClickEvent<T> | ResetEvent<T>;

export interface ButtonGroupProps<T extends Value | Value[] = Value | Value[]> extends ValidationProps {
  /** Button customizator */
  buttonRender?: CustomRender<ButtonGroupProps, ButtonGroupState, ButtonProps>,
  /** Buttons data, an array of strings, numbers or objects. Use textField attribute with objects. Two or more buttons with the same text are not allowed */
  data?: ArrayElement<T>[],
  /** Default value */
  defaultValue?: Value | Value[],
  /** Disabled state */
  isDisabled?: boolean,
  /** Change handler */
  onChange?: (ev: ChangeEvent<T>) => void,
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLElement>,
  /** Text field in data objects when the data is an array of objects */
  textField?: string,
  /** Only one active button is allowed in the radio mode. Use checkbox if you want many. Radio is default */
  type?: 'radio' | 'checkbox',
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Value */
  value?: T,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.buttonGroup],
  /** Wrapper customizator */
  wrapperRender?: CustomRender<ButtonGroupProps, ButtonGroupState, React.HTMLAttributes<HTMLElement>>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface ButtonGroupState {
  value: Value | Value[],
}

export interface ChangeData {
  value: ButtonGroupProps['value'],
  setUncontrolledValue: SetState<ButtonGroupProps['value']>,
  validateCurrent: (value: ButtonGroupProps['value']) => boolean,
}
