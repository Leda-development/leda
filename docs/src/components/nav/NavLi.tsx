'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const NavLi = ({ to, children }: { to: string, children: ReactNode }) => {
  const pathname = usePathname();

  const isActive = pathname === to;

  return (
    <li className="text-sm">
      <Link
        href={to}
        className={isActive
          ? 'inline-block border-l border-slate-800 py-1 pl-2'
          : 'inline-block border-l py-1 pl-2 text-sky-600 hover:border-sky-200 hover:text-sky-800'}
      >
        {children}
      </Link>
    </li>
  );
};
