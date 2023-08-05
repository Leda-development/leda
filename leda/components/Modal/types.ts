import * as React from 'react';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { DivRefCurrent } from '../Div';

export type WindowSizeType = 'sm' | 'md' | 'lg';

export interface ModalProps {
  /** Child elements */
  children?: React.ReactNode,
  /** In case you want to add some more css classes */
  className?: string,
  /** Close icon customizator */
  iconRender?: CustomRender<ModalWindowProps, {}, IconProps>,
  /** Whether the modal is open */
  isOpen: boolean,
  /** Close handler, works on any type of closing */
  onClose?: (ev: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void,
  /** Close button click handler */
  onCloseButtonClick?: CustomEventHandler<React.MouseEvent<HTMLElement>>,
  /** Escape press handler */
  onEscapePress?: CustomEventHandler<React.KeyboardEvent<HTMLElement>>,
  /** Click handler outside the modal window */
  onOverlayClick?: CustomEventHandler<React.MouseEvent<HTMLElement>>,
  /** Ref */
  ref?: React.Ref<ModalRefCurrent>,
  /** Window size.
   * There are three standard sizes: sm=480, md=608, lg=868.
   * Any custom values can be put as "50%", "50px", "50rem" etc.
   * md=608 is the default value */
  size?: WindowSizeType | string,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.modal],
  /** Wrapper customizator */
  wrapperRender?: CustomRender<ModalWindowProps, {}, WrapperProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export type ModalWindowProps = ModalProps & { innerRef?: React.Ref<ModalRefCurrent> };

export interface ModalElementsProps {
  children?: React.ReactNode,
  className?: string,
  wrapperRender?: CustomRender<ModalElementsProps, {}, React.HTMLAttributes<HTMLDivElement>>,
  [x: string]: unknown,
}

export interface ModalContextType {
  bodyClassName: string,
  footerClassName: string,
  headerClassName: string,
}

export interface ModalRefCurrent {
  wrapper: HTMLDivElement | null,
}

export interface CustomElements {
  Icon: React.FC<IconProps>,
  Wrapper: React.FC<WrapperProps>,
}

export interface WrapperProps extends ModalElementsProps {
  onClick?: React.MouseEventHandler<HTMLElement>,
  ref?: React.Ref<DivRefCurrent>,
}

export interface IconProps extends ModalElementsProps {
  onClick?: React.MouseEventHandler<HTMLElement>,
}
