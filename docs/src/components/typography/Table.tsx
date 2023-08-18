export const Table = (props: React.HTMLProps<HTMLTableElement>) => {
  return (
    <div
      className='overflow-x-scroll'
    >
      <table className="table-auto text-xs min-w-max md:min-w-full" {...props} />
    </div>
  )
};

export const Th = (props: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>) => {
  return (
    <th
      {...props}
      className={`text-left px-4 py-2 first:pl-0 ${props.className ? props.className : ''}`}
    />
  );
};

export const Td = (props: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>) => {
  return (
    <td
      {...props}
      className={`px-4 py-2 first:pl-0 align-top ${props.className ? props.className : ''}`}
    />
  );
};

export const THead = ({ headers }: { headers: string[] }) => {
  return (
    <thead>
      <tr>
        {headers.map((header) => {
          return (
            <Th>{header}</Th>
          )
        })}
      </tr>
    </thead>
  )
};
