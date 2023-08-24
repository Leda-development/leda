import React from 'react';
import {
  getClassNames,
  useProps,
} from '../../utils';
import { extractIdAndNamespace } from './helpers';
import type { SvgProps } from './types';

export const Svg = React.forwardRef((props: SvgProps, ref?: React.Ref<SVGSVGElement>): React.ReactElement => {
  const {
    className,
    noIconClass,
    ...restProps
  } = useProps(props);

  const { id, namespace, ...wrapperProps } = extractIdAndNamespace(restProps);

  const combinedClassNames = getClassNames(
    {
      [`icon-${namespace}`]: !noIconClass,
    },
    className,
  );

  return (
    <svg
      {...wrapperProps}
      className={combinedClassNames}
      ref={ref}
    >
      <use xlinkHref={`/assets/images/svg/${namespace}.svg#${id}`} />
    </svg>
  );
}) as React.FC<SvgProps>;

Svg.displayName = 'Svg';
