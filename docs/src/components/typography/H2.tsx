import * as L from '@leda';

export const H2 = ({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}) => {
  return (
    <L.H2
      className={className}
    >
      {children}
    </L.H2>
  )  
};

