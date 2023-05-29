import * as React from 'react';
import FeatherIcon from 'feather-icons-react';
import { IconProps } from './types';
import { useProps } from '../../utils';

export const Icon = (props: IconProps): React.ReactElement | null => {
  const {
    size,
    shouldRender,
    stroke,
    ...restProps
  } = useProps(props);

  if (shouldRender === false) return null;

  return (
    <FeatherIcon
      size={size || 24}
      stroke={stroke || 'currentColor'}
      {...restProps}
    />
  );
};
