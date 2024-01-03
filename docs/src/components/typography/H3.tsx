import * as L from '@leda';

export const H3 = ({
  children,
}: {
  children: React.ReactNode,
}) => (
  <L.H3
    className="mb-3 mt-6 font-bold"
  >
    {children}
  </L.H3>
);
