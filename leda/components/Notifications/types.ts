import * as React from 'react';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender } from '../../commonTypes';
import { DivProps } from '../Div';
import { ChangeMethods } from './constants';

export interface Item {
  // text/html
  text: string,
  // 5000 ms by default, pass 0 to disable closing on timeout
  delay?: number,
  id: string | number,
  className?: string,
  iconClassName?: string,
  // any other data
  [x: string]: unknown,
}

// todo: extend ChangeEvent
export interface ChangeEvent {
  component: {
    value: Item[],
    name?: string,
    method: ChangeMethods,
  },
}

export interface NotificationItemProps {
  /** Notification button customizator */
  actionButtonRender?: CustomRender<NotificationItemProps, {}, React.PropsWithChildren<{}>>,
  /** Content customizator */
  contentRender?: CustomRender<NotificationItemProps, {}, DivProps>,
  /** Icon customizator */
  iconRender?: CustomRender<NotificationItemProps, {}, DivProps>,
  /** Obejct containing notification data */
  item: Item,
  /** Change handler, fires when the notification gets closed on timeout or by click */
  onChange: (item: Item, method: ChangeMethods) => void,
  /** Theme */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.notifications],
}

export interface NotificationsProps {
  /** Notification button customizator */
  actionButtonRender?: CustomRender<NotificationItemProps, {}, React.PropsWithChildren<{}>>,
  /** Content customizator */
  contentRender?: CustomRender<NotificationItemProps, {}, DivProps>,
  /** Icon customizator */
  iconRender?: CustomRender<NotificationItemProps, {}, DivProps>,
  /** Max amount of notifications, 3 by default */
  maxItems?: number,
  /** Change handler, fires when the notification gets closed on timeout or by click */
  onChange: (event: ChangeEvent) => void,
  /** Ref */
  ref?: React.Ref<NotificationRefCurrent>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.notifications],
  /** Notifications. If value has more items than is set in maxItems notifications get shown one by one */
  value: Item[],
  /** _css-class-names */
  [x: string]: unknown,
}

export interface NotificationRefCurrent {
  wrapper: HTMLElement | null,
}
