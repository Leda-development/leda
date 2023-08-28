import { CodeBlock } from '.';

export const Table = (props: React.HTMLProps<HTMLTableElement>) => (
  <div
    className="overflow-x-scroll"
  >
    <table className="min-w-max table-auto text-sm md:min-w-full" {...props} />
  </div>
);

export const Th = (props: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>) => (
  <th
    {...props}
    className={`px-4 py-2 text-left first:pl-0 ${props.className ? props.className : ''}`}
  />
);

export const Td = (props: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>) => (
  <td
    {...props}
    className={`px-4 py-2 align-top first:pl-0 ${props.className ? props.className : ''}`}
  />
);

export const TdCode = (props: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>) => (
  <td
    className={`px-4 py-2 align-top first:pl-0 ${props.className ? props.className : ''}`}
  >
    <CodeBlock>
      {props.children}
    </CodeBlock>
  </td>
);

export const THead = ({ headers }: { headers: string[] }) => (
  <thead>
    <tr>
      {headers.map((header) => (
        <Th key={header}>{header}</Th>
      ))}
    </tr>
  </thead>
);

export const propsTableCommonHeaders = ['Name', 'Type', 'Description'];
