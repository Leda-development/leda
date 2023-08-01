import * as React from 'react';
import { CustomRender } from '../../commonTypes';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { IconTypes } from '../..';

export interface ChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  component: {
    value: boolean,
    name?: string,
  },
}

export interface CheckBoxProps {
  /** Checkbox icon, is independent from value,  */
  checkboxIcon?: IconTypes.Icons | false | null,
  /** All you wrap into CheckBox goes to the label */
  children?: React.ReactNode,
  /** Dfeault value, false if not set */
  defaultValue?: boolean,
  /** Id */
  id?: string,
  /** Input customizator */
  inputRender?: CustomRender<CheckBoxProps, {}, React.InputHTMLAttributes<HTMLInputElement>>,
  /** In case you want to disable it */
  isDisabled?: boolean,
  /** Label customization */
  labelRender?: CustomRender<CheckBoxProps, {}, React.LabelHTMLAttributes<any>>,
  /** Component name */
  name?: string,
  /** Change handler */
  onChange?: (event: ChangeEvent) => void,
  /** Ref */
  ref?: React.Ref<CheckBoxRefCurrent>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.checkBox],
  /** CheckBox value */
  value?: boolean,
  /** Wrapper customization */
  wrapperRender?: CustomRender<CheckBoxProps, {}, Partial<CheckBoxProps>>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface CheckBoxRefCurrent {
  wrapper: HTMLElement | null,
  input: HTMLInputElement | null,
  label: HTMLLabelElement | null,
}
