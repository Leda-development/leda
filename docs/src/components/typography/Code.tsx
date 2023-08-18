export const Code = ({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}) => {
  return (
    <code
      className={'bg-slate-100' + className}
    >
      {children}
    </code>
  )  
};

export const CodeBlock = (props: any) =>{
  return <div className="whitespace-pre" {...props} />;
} 