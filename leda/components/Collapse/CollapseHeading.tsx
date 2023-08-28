import React from 'react';
import { useCollapseHeading, useIcon } from './helpers';
import { getClassNames, useProps } from '../../utils';
import { handleHeadingClick } from './handlers';
import { CollapsePanelContext } from './CollapseContext';
import type { HeadingProps } from './types';
import { IconTypes } from '../..';

export const Heading = React.forwardRef((props: HeadingProps, ref?: React.Ref<HTMLElement>): React.ReactElement => {
  const { children, className } = useProps(props);

  const context = React.useContext(CollapsePanelContext);

  const { isExpanded, theme, isDisabled } = context;

  const HeadingWrapper = useCollapseHeading(props);

  const Icon = useIcon(props);

  const wrapperClassNames = getClassNames(
    theme.headingWrapper,
    className,
    {
      [theme.headingDisabled]: isDisabled,
    },
  );

  const iconClassNames = getClassNames(
    theme.headingIcon,
    { [theme.headingIconOpen]: isExpanded },
  );

  return (
    <HeadingWrapper
      // @ts-expect-error wrong ref type
      ref={ref}
      onClick={handleHeadingClick(
        props,
        context,
      )}
      className={wrapperClassNames}
    >
      {children}
      <Icon
        icon={IconTypes.Icons.ChevronDown}
        className={iconClassNames}
      />
    </HeadingWrapper>
  );
}) as React.FC<HeadingProps>;

Heading.displayName = 'Collapse.Heading';
