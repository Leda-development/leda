import * as React from 'react';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { DivRefCurrent } from '../Div';

export type WindowSizeType = 'sm' | 'md' | 'lg';

export interface ModalProps {
  /** Имена классов */
  className?: string,
  /** Дочерние элементы */
  children?: React.ReactNode,
  /** Признак состояния. Обязательное, т.к. всегда нужен стейт для отслеживания состояния */
  isOpen: boolean,
  /** Обработчик закрытия модалки по клику на оверлей, нажатию на крестик или нажатию Escape */
  onClose?: (ev: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void,
  /** Обработчик клика за пределами модального окна */
  onOverlayClick?: CustomEventHandler<React.MouseEvent<HTMLElement>>,
  /** Наличие кнопки закрытия окна и обработчик */
  onCloseButtonClick?: CustomEventHandler<React.MouseEvent<HTMLElement>>,
  /** Закрытие окна по escape и обработчик */
  onEscapePress?: CustomEventHandler<React.KeyboardEvent<HTMLElement>>,
  /** Темизация компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.modal],
  /** Реф */
  ref?: React.Ref<ModalRefCurrent>,
  /** Размер окна.
   * Имеет три стандартных значения sm=480, md=608, lg=868.
   * Принимает строку вида "50%", "50px", "50rem"
   * Если не задан, то устанавливается значение md=608 */
  size?: WindowSizeType | string,
  /** Кастомный рендер для wrapper */
  wrapperRender?: CustomRender<ModalWindowProps, {}, WrapperProps>,
  /** Кастомный рендер для иконки закрытия */
  iconRender?: CustomRender<ModalWindowProps, {}, IconProps>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export type ModalWindowProps = ModalProps & { innerRef?: React.Ref<ModalRefCurrent> };

export interface ModalElementsProps {
  className?: string,
  children?: React.ReactNode,
  wrapperRender?: CustomRender<ModalElementsProps, {}, React.HTMLAttributes<HTMLDivElement>>,
  [x: string]: unknown,
}

export interface ModalContextType {
  headerClassName: string,
  bodyClassName: string,
  footerClassName: string,
}

export interface ModalRefCurrent {
  wrapper: HTMLDivElement | null,
}

export interface CustomElements {
  Wrapper: React.FC<WrapperProps>,
  Icon: React.FC<IconProps>,
}

export interface WrapperProps extends ModalElementsProps {
  onClick?: React.MouseEventHandler<HTMLElement>,
  ref?: React.Ref<DivRefCurrent>,
}

export interface IconProps extends ModalElementsProps {
  onClick?: React.MouseEventHandler<HTMLElement>,
}
