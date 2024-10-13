import * as L from '@leda';

export const Li = ({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}) => (
  <L.Li
    className={`${className ?? ''} mb-2`}
  >
    {children}
  </L.Li>
);
