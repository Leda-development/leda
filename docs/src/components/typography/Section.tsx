import classNames from "classnames";

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}) => {

  const classname = classNames(
    'mb-6',
    className,
  )

  return (
    <section
      className={classname}
    >
      {children}
    </section>
  );
};
