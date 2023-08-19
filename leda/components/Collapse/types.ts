import * as React from 'react';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { IconTypes } from '../..';

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
  /** panelKey of the active panel goes here. If the value is null the panel is closed */
  activePanelKey?: string | string[] | null,
  /** Child elements */
  children: React.ReactNode,
  /** Only one open panel is allowed */
  isAccordion?: boolean,
  /** Panel click handler */
  onSelect?: CustomEventHandler<SelectEvent>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.collapse],
}

export interface HeadingProps {
  /** Child elements */
  children: React.ReactNode,
  /** Icon customizator */
  iconRender?: CustomRender<HeadingProps, { }, IconProps>,
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<HeadingProps, { }, HeadingWrapperProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface BodyProps {
  /** Child elements */
  children?: React.ReactNode,
  /** Loading state */
  isLoading?: boolean,
  /** Panel close handler */
  onClose?: CustomEventHandler<BodyClickCustomEvent>,
  /** Panel close handler triggered by a click */
  onCloseByClick?: CustomEventHandler<BodyClickCustomEvent>,
  /** Panel open handler */
  onOpen?: CustomEventHandler<BodyClickCustomEvent>,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** CSS transition format */
  transition?: string,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<BodyProps, { }, BodyWrapperProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface PanelProps {
  /** Child elements */
  children: React.ReactNode,
  /** Disable the panel */
  isDisabled?: boolean,
  /** Panel name */
  name?: string,
  /** A key to put into Collapse activePanelKey pro */
  panelKey: string,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<PanelProps, { isClicked: boolean }, PanelWrapperProps>,
  /** _css-class-names */
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
  icon: IconTypes.Icons,
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
