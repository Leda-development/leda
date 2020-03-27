import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useProps } from '../../utils';
import { LinkProps } from './types';

export const Link = ((props: LinkProps): React.ReactElement => {
  const {
    className,
    href,
    shouldReplace,
    ...restProps
  } = useProps(props);
  return (
    <RouterLink
      to={href}
      replace={shouldReplace}
      {...restProps}
    />
  );
}) as React.FC<LinkProps>;

Link.displayName = 'Link';
