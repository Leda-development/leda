import * as React from 'react';

export interface SvgProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  /** Do not add default icon-namespace css class */
  noIconClass?: boolean,
  /** Click handler */
  onClick?: React.MouseEventHandler<SVGSVGElement>,
  /** Ref */
  ref?: React.Ref<SVGSVGElement>,
  /** _css-class-names */
  [x: string]: unknown,
}
