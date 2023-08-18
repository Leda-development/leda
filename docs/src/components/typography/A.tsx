import * as L from '@leda';

export const A = ({
  children,
  className,
  ...rest
}: any) => {
  return (
    <L.A
      className={className}
      {...rest}
    >
      {children}
    </L.A>
  )  
};

