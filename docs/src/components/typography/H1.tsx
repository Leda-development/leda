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
      className='text-2xl font-bold mt-1 mb-3'
    >
      {children}
    </L.H1>
  )  
};

