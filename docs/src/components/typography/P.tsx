import * as L from '@leda';

export const P = ({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}) => {
  return (
    <L.P
      className={className}
    >
      {children}
    </L.P>
  )  
};

