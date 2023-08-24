import * as L from '@leda';

export const H1 = ({
  children,
}: {
  children: React.ReactNode,
}) => (
  <L.H1
    className="mb-3 mt-1 text-2xl font-bold"
  >
    {children}
  </L.H1>
);
