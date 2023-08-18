'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ReactNode } from 'react';

export const NavLi = ({ to, children }: { to: string, children: ReactNode }) => {
  const pathname = usePathname();

  const isActive = pathname === to;


  return (
    <li className='text-sm'>
      <Link
        href={to}
        className={isActive
          ? 'inline-block border-l pl-2 py-1 border-slate-800'
          : 'inline-block border-l pl-2 py-1 text-sky-600 hover:text-sky-800 hover:border-sky-200'
        }
      >
        {children}
      </Link>
    </li>
  );
};
