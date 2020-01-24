import * as React from 'react';
import { RenderEvent } from '../../commonTypes';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';

export interface DropDownProps extends React.HTMLAttributes<HTMLElement> {
  /** Тег-обертка, при наведении на который, будет отображаться данный dropdown, по умолчанию <span> */
  wrapperRender?: (props: RenderEvent<DropDownProps>) => React.ReactNode,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropDown],
  /** Реф */
  ref?: React.Ref<DropDownRefCurrent>,
  /** Принудительное открытие списка */
  isOpen?: boolean,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface WrapperProps {
  className?: string,
  children?: React.ReactNode,
  ref?: React.Ref<DropDownRefCurrent>,
  [x: string]: unknown,
}

export interface CustomElements {
  Wrapper: React.FC<WrapperProps>,
}

export interface DropDownRefCurrent {
  wrapper: HTMLElement | null,
}
