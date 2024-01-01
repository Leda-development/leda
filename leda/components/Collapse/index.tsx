import React from 'react';
import classnames from 'classnames';
import type { CollapseProps } from './types';
import { useProps, useTheme } from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { Icon } from '../Icon';
import { IconTypes } from '../..';

export const Collapse = React.forwardRef((props: CollapseProps, ref?: React.Ref<HTMLDetailsElement>): React.ReactElement | null => {
  const {
    children,
    className,
    isOpen,
    onToggle,
    shouldRender,
    summary,
    theme: themeProp,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.collapse);

  if (shouldRender === false) return null;

  const detailsClassName = classnames(
    theme.wrapper,
    className,
  );

  return (
    <details
      open={isOpen}
      onToggle={(ev: React.SyntheticEvent<HTMLDetailsElement, Event & { newState: 'open' | 'closed' }>) => {
        const isDetailsOpen = ev.nativeEvent.newState === 'open';
        onToggle?.({ isOpen: isDetailsOpen });
      }}
      {...restProps}
      ref={ref}
      className={detailsClassName}
    >
      <summary className={theme.summary}>
        {summary}

        <Icon
          icon={IconTypes.Icons.ChevronDown}
          className={theme.icon}
        />
      </summary>
      <div className={theme.content}>
        {children}
      </div>
    </details>
  );
}) as React.FC<CollapseProps>;
