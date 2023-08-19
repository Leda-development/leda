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
      className='mt-6 mb-3 border-b font-bold'
    >
      {children}
    </L.H2>
  )  
};

