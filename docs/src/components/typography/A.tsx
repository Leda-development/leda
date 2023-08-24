import * as L from '@leda';
import type { AProps } from '@leda/components/A/types';

export const A = ({
  children,
  className,
  ...rest
}: AProps) => (
  <L.A
    className={className}
    {...rest}
  >
    {children}
  </L.A>
);
