import { liveFont } from '@/utils/fonts';

export const Code = ({
  children,
}: {
  children: React.ReactNode,
}) => (
  <code
    className={`bg-slate-100 text-sm ${liveFont.className}`}
  >
    {children}
  </code>
);

export const CodeBlock = (props: React.HTMLAttributes<HTMLElement>) => (
  <div
    className={`whitespace-pre text-sm ${liveFont.className}`}
  >
    {props.children}
  </div>
);
