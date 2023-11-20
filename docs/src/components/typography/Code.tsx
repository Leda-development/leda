import { liveFont } from '@/fonts';

export const Code = ({
  children,
}: {
  children: React.ReactNode,
}) => (
  <code
    className={`bg-slate-100 ${liveFont.className}`}
  >
    {children}
  </code>
);

export const CodeBlock = (props: React.HTMLAttributes<HTMLElement>) => (
  <div
    className={`whitespace-pre ${liveFont.className}`}
    style={{ fontSize: '.8rem' }}
  >
    {props.children}
  </div>
);
