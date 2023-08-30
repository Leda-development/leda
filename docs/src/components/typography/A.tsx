import * as L from '@leda';
import classnames from 'classnames';
import type { AProps } from '@leda/components/A/types';

export const A = ({
  children,
  className,
  ...rest
}: AProps) => {
  const classNames = classnames(
    'text-sky-600',
    'underline',
    className,
  );

  return (
    <L.A
      className={classNames}
      {...rest}
    >
      {children}
    </L.A>
  );
};
