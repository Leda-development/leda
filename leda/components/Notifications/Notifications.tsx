'use client'

import React from 'react';
import { NotificationItem } from './NotificationItem';
import { Div } from '../Div';
import {
  useTheme, getClassNames, useProps,
} from '../../utils';
import { Item, NotificationsProps } from './types';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { ChangeMethods } from './constants';

export const Notifications = React.forwardRef((
  props: NotificationsProps, ref?: React.Ref<HTMLElement>,
): React.ReactElement | null => {
  const {
    className,
    maxItems = 3,
    onChange,
    value,
    contentRender,
    iconRender,
    theme: themeProp,
    actionButtonRender,
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.notifications);

  const wrapperClassNames = getClassNames(theme.wrapper, className);
  // getting the latest value in the change handler
  const valueRef = React.useRef(value);

  valueRef.current = value;

  if (!value.length) return null;

  const items = value.slice(-maxItems);

  const handleChange = (item: Item, method: ChangeMethods): void => {
    const currentValue = valueRef.current;

    onChange({
      component: {
        value: currentValue.filter((val) => (item.id !== val.id)),
        method,
      },
    });
  };

  return (
    <Div
      className={wrapperClassNames}
      ref={ref}
    >
      {items.map((item) => (
        <NotificationItem
          contentRender={contentRender}
          actionButtonRender={actionButtonRender}
          iconRender={iconRender}
          key={item.id}
          item={item}
          onChange={handleChange}
          theme={theme}
        />
      ))}
    </Div>
  );
}) as React.FC<NotificationsProps>;

Notifications.displayName = 'Notifications';
