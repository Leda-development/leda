import * as React from 'react';
import { CustomRender } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface ChangeEvent extends React.MouseEvent<HTMLDivElement> {
  component: {
    name?: string,
    value: boolean,
  },
}

export interface SwitcherProps {
  /** Дочерние элементы (рендерятся внутри <label> */
  children?: React.ReactNode,
  /** Отключение переключателя */
  isDisabled?: boolean,
  /** Имя элемента, возвращаемое в функции обратного вызова */
  name?: string,
  /** Функция обратного вызова при смене состояния переключателя */
  onChange?: (ev: ChangeEvent) => void,
  /** Функция обратного вызова при клике по переключателю */
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.switcher],
  /** Состояние переключателя */
  value?: boolean,
  /** Кастомный wrapper для компонента */
  wrapperRender?: CustomRender<SwitcherProps, SwitcherState, WrapperProps>,
  /** Кастомный label для компонента */
  labelRender?: CustomRender<SwitcherProps, SwitcherState, LabelProps>,
  /** Кастомный switcher для компонента (подложка + иконка) */
  baseRender?: CustomRender<SwitcherProps, SwitcherState, BaseProps>,
  /** Кастомная иконка для компонента (перемещающийся круг) */
  iconRender?: CustomRender<SwitcherProps, SwitcherState, IconProps>,
  ref?: React.Ref<SwitcherRefCurrent>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface SwitcherState {
  value: boolean,
}

export interface WrapperProps {
  className?: string,
  ref?: React.Ref<SwitcherRefCurrent> | null,
  children?: React.ReactNode,
}

export interface LabelProps {
  className?: string,
  onClick?: React.MouseEventHandler<HTMLSpanElement>,
  children?: React.ReactNode,
}

export interface BaseProps {
  className?: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
}

export interface IconProps {
  className?: string,
}

export interface CustomElements {
  Wrapper: React.FC<WrapperProps>,
  Label: React.FC<LabelProps>,
  Base: React.FC<BaseProps>,
  Icon: React.FC<IconProps>,
}

export interface SwitcherRefCurrent {
  wrapper: HTMLElement | null,
}
