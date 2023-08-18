export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}) => {
  return (
    <section
      className={className}
    >
      {children}
    </section>
  )  
};

