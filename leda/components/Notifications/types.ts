import type * as React from 'react';
import type { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { CustomRender } from '../../commonTypes';
import type { DivProps } from '../Div';
import type { ChangeMethods } from './constants';

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
  actionButtonRender?: CustomRender<NotificationItemProps, Record<string, never>, React.PropsWithChildren<unknown>>,
  /** Content customizator */
  contentRender?: CustomRender<NotificationItemProps, Record<string, never>, DivProps>,
  /** Icon customizator */
  iconRender?: CustomRender<NotificationItemProps, Record<string, never>, DivProps>,
  /** Obejct containing notification data */
  item: Item,
  /** Change handler, fires when the notification gets closed on timeout or by click */
  onChange: (item: Item, method: ChangeMethods) => void,
  /** Theme */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.notifications],
}

export interface NotificationsProps {
  /** Notification button customizator */
  actionButtonRender?: CustomRender<NotificationItemProps, Record<string, never>, React.PropsWithChildren<unknown>>,
  /** Content customizator */
  contentRender?: CustomRender<NotificationItemProps, Record<string, never>, DivProps>,
  /** Icon customizator */
  iconRender?: CustomRender<NotificationItemProps, Record<string, never>, DivProps>,
  /** Max amount of notifications, 3 by default */
  maxItems?: number,
  /** Change handler, fires when the notification gets closed on timeout or by click */
  onChange: (event: ChangeEvent) => void,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.notifications],
  /** Notifications. If value has more items than is set in maxItems notifications get shown one by one */
  value: Item[],
  /** _css-class-names */
  [x: string]: unknown,
}
