import * as React from 'react';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface SelectEvent {
  component: {
    value: string | string[] | null,
  },
}

export interface BodyClickCustomEvent {
  component: {
    value: string, // panelKey
  },
}


export interface CollapseProps {
  /** Признак активной панели. Сюда передается значение panelKey активной панели. Когда панель(панели) закрыта, значение равно null */
  activePanelKey?: string | string[] | null,
  /** Дочерние элементы */
  children: React.ReactNode,
  /** Обработчик клика на панель */
  onSelect?: CustomEventHandler<SelectEvent>,
  /** Признак возможности открытия нескольких панелей для неконтролируемого режима */
  isAccordion?: boolean,
  /** Тема */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.collapse],
}

export interface HeadingProps {
  /** Дочерние элементы */
  children: React.ReactNode,
  /** Обработчик клика */
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  /** Иконка возле заголовка */
  iconRender?: CustomRender<HeadingProps, { }, IconProps>,
  /** Компонент-обертка в который будет помещен Collapse.Heading. Передавать в виде <Wrapper props />. По умолчанию - <Div /> */
  wrapperRender?: CustomRender<HeadingProps, { }, HeadingWrapperProps>,
  /** Реф */
  ref?: React.Ref<HeadingRefCurrent>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface BodyProps {
  /** Дочерние элементы */
  children?: React.ReactNode,
  /** Состояние загрузки данных */
  isLoading?: boolean,
  /** Функция обратного вызова на закрытие коллапса */
  onClose?: CustomEventHandler<BodyClickCustomEvent>,
  /** Функция обратного вызова на закрытие коллапса по клику */
  onCloseByClick?: CustomEventHandler<BodyClickCustomEvent>,
  /** Функция обратного вызова на открытие коллапса */
  onOpen?: CustomEventHandler<BodyClickCustomEvent>,
  /** Описание открытия/закрытия коллапса. Описывается как CSS Transition. См. https://developer.mozilla.org/ru/docs/Web/CSS/transition. По умолчанию height 250ms cubic-bezier(.4, 0, .2, 1) */
  transition?: string,
  /** Реф */
  ref?: React.Ref<BodyRefCurrent>,
  /** Компонент-обертка в который будет помещен Collapse.Body. Передавать в виде <Wrapper props />. По умолчанию - <Div /> */
  wrapperRender?: CustomRender<BodyProps, { }, BodyWrapperProps>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface PanelProps {
  /** Дочерние элементы */
  children: React.ReactNode,
  /** Имя панели */
  name?: string,
  /** Идентификатор события панели, данное значение передается в activeKey компонента Collapse */
  panelKey: string,
  /** Отключение панели */
  isDisabled?: boolean,
  /** Компонент-обертка для панели, например Div. Передавать в виде <Wrapper props /> */
  wrapperRender?: CustomRender<PanelProps, { isClicked: boolean }, PanelWrapperProps>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface CollapseContextType {
  activePanelKey: string | string[] | null,
  onSelect: SelectHandler,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.collapse],
}

export interface CollapsePanelContextType extends CollapseContextType {
  panelKey: string,
  isClicked: boolean,
  isDisabled?: boolean,
  name?: string,
  isExpanded: boolean,
  onHeadingClick: CollapsePanelHandlers['onHeadingClick'],
  onBodyRest: CollapsePanelHandlers['onBodyRest'],
}

export interface HeadingWrapperProps {
  children?: React.ReactNode,
  className?: string,
  onClick: React.MouseEventHandler,
}

export interface IconProps {
  className?: string,
  isExpanded: boolean,
}

export interface BodyWrapperProps {
  className?: string,
  children?: React.ReactNode,
}

export interface PanelWrapperProps {
  children?: React.ReactNode,
  className?: string,
}

export type KeyState = string | string[] | null;

export interface SelectHandler {
  (ev: BodyClickCustomEvent): void,
}

export type SetClicked = React.Dispatch<React.SetStateAction<boolean>>;

export interface CollapsePanelHandlers {
  onHeadingClick: () => void,
  onBodyRest: () => void,
}

export type CollapseComponent = React.FC<CollapseProps> & { Panel: React.FC<PanelProps>, Body: React.FC<BodyProps>, Heading: React.FC<HeadingProps> };

export interface BodyRefCurrent {
  wrapper: HTMLElement | null,
}

export interface HeadingRefCurrent {
  wrapper: HTMLElement | null,
}
