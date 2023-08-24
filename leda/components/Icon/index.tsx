import * as React from 'react';
import FeatherIcon from 'feather-icons-react';
import type { IconProps } from './types';
import { useProps } from '../../utils';

export const Icon = (props: IconProps): React.ReactElement | null => {
  const {
    size = 24,
    shouldRender,
    stroke = 'currentColor',
    ...restProps
  } = useProps(props);

  if (shouldRender === false) return null;

  return (
    <FeatherIcon
      size={size}
      stroke={stroke}
      {...restProps}
    />
  );
};
