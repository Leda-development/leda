import * as L from '@leda';

export const H1 = ({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}) => {
  return (
    <L.H1
      className={className}
    >
      {children}
    </L.H1>
  )  
};

