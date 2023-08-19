import React from 'react';
import { CustomRender } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { LiProps } from '../Li';
import { defaultTabsTheme } from './theme';

export interface TabsProps {
  /** Active tab number */
  activeTabKey?: string | number,
  /** Tabs */
  children?: React.ReactNode,
  /** Content customizator */
  contentRender?: CustomRender<TabsProps, TabsState, ContentProps>,
  /** Heading customizator */
  headingRender?: CustomRender<TabsProps, TabsState, HeadingProps>,
  /** Tab change handler */
  onChange?: (event: ChangeEvent) => void,
  /** Reference */
  ref?: React.Ref<HTMLElement>,
  /** Horizontal tabs scroll if there are too many tabs */
  shouldScrollTabs?: boolean,
  /** DOM-node to put tab content in */
  tabContentNode?: HTMLElement | null,
  /** Tab customizator */
  tabRender?: CustomRender<TabProps, {}, LiProps>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tabs],
  /** Wrapper customizator */
  wrapperRender?: CustomRender<TabsProps, TabsState, WrapperProps>,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface TabsState {
  activeTabKey: string | number,
}

export type TabProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
  /** Tab content */
  children?: React.ReactNode,
  /** In case you want the tab to be disabled */
  isDisabled?: boolean,
  /** Tab number. Numbering from 0, because the onSelect handler of the Tabs comoponent returns the tab number starting from 0 */
  tabKey: string | number,
  /** Tab customizator */
  tabRender?: CustomRender<TabProps, {}, LiProps>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tabs],
  /** Title */
  title: React.ReactNode,
  /** _css-class-names */
  [x: string]: unknown,
};

export interface TabsContextType {
  activeTabKey: string | number,
  onTabSelect: SelectHandler,
  tabRender?: CustomRender<TabProps, {}, LiProps>,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tabs],
}

export interface SelectHandler {
  (ev: React.MouseEvent<HTMLLIElement>, tabKey: string | number): void,
}

export interface CreateSelectHandler {
  (
    props: TabsProps,
    activeTabKey: string | number,
    setActiveTabKey: React.Dispatch<React.SetStateAction<string | number>>
  ): SelectHandler,
}

export interface TabContentProps {
  /** EventKey of the selected tab */
  activeTabKey: string | number,
  /** Nested elements */
  children?: React.ReactNode,
}

export interface ChangeEvent extends React.MouseEvent {
  component: {
    value: string | number,
  },
}

export interface WrapperProps {
  className?: string,
  style?: React.CSSProperties,
  ref?: React.Ref<HTMLElement>,
  children?: React.ReactNode,
}

export interface ContentProps {
  className?: string,
  children?: React.ReactNode,
  tabContentNode?: Element | null,
}

export interface HeadingProps {
  className?: string,
  children?: React.ReactNode,
}

export interface CustomElements {
  Wrapper: React.FC<WrapperProps>,
  Content: React.FC<ContentProps>,
  Heading: React.FC<HeadingProps>,
}

export interface ArrowProps {
  onClick: React.MouseEventHandler,
  theme: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tabs],
}

export interface TabsScroll {
  containerRef: React.Ref<any>,
  hasScroll: boolean,
  hasLeftArrow: boolean,
  hasRightArrow: boolean,
  onRightClick: React.MouseEventHandler,
  onLeftClick: React.MouseEventHandler,
}

export interface TabsScrollProps {
  shouldScrollTabs?: boolean,
  theme: typeof defaultTabsTheme,
}
