import * as L from '@leda';

export const Ul = ({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}) => (
  <L.Ul
    className={`${className ?? ''} mb-2`}
  >
    {children}
  </L.Ul>
);
