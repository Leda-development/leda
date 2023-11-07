import type * as React from 'react';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { CustomRender, CustomEventHandler } from '../../commonTypes';

export interface ModalProps {
  /** Child elements */
  children?: React.ReactNode,
  /** In case you want to add some more css classes */
  className?: string,
  /** Close icon customizator */
  iconRender?: CustomRender<ModalWindowProps, Record<string, never>, IconProps>,
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
  ref?: React.Ref<HTMLElement>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.modal],
  /** Wrapper customizator */
  wrapperRender?: CustomRender<ModalWindowProps, Record<string, never>, WrapperProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export type ModalWindowProps = ModalProps & { innerRef?: React.Ref<HTMLElement> };

export interface ModalElementsProps {
  children?: React.ReactNode,
  className?: string,
  wrapperRender?: CustomRender<ModalElementsProps, Record<string, never>, React.HTMLAttributes<HTMLDivElement>>,
  [x: string]: unknown,
}

export interface ModalContextType {
  bodyClassName: string,
  footerClassName: string,
  headerClassName: string,
}

export interface CustomElements {
  Icon: React.FC<IconProps>,
  Wrapper: React.FC<WrapperProps>,
}

export interface WrapperProps extends ModalElementsProps {
  onClick?: React.MouseEventHandler<HTMLElement>,
  ref?: React.Ref<HTMLElement>,
}

export interface IconProps extends ModalElementsProps {
  onClick?: React.MouseEventHandler<HTMLElement>,
}
