export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}) => (
  <section
    className={className}
  >
    {children}
  </section>
);
