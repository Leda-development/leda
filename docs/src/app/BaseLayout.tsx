'use client';

import * as L from '@leda';
import { useEffect, useState } from 'react';
import { MainHeader } from '@/components/header';
import { MainNav } from '@/components/nav';

const mobileMediaQuery = '(max-width: 768px)';

const handleQueryChange = ({ query, setIsMobile }: { query: MediaQueryList, setIsMobile: React.Dispatch<React.SetStateAction<boolean>> }) => {
  setIsMobile(query.matches);
};

export const BaseLayout = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(mobileMediaQuery);

    setIsMobile(query.matches);

    query.addEventListener('change', () => handleQueryChange({ query, setIsMobile }));

    return () => query.removeEventListener('change', () => handleQueryChange({ query, setIsMobile }));
  }, []);

  return (
    <div className="bg-white font-sans">
      <MainHeader
        isMenuOpen={isMenuOpen}
        isMobile={isMobile}
        setIsMenuOpen={setIsMenuOpen}
      />
      <L.Div
        className="overflow-hidden md:flex md:flex-row"
      >
        <L.Div
          shouldRender={!isMobile || isMenuOpen}
          onClick={(ev: React.MouseEvent<HTMLElement>) => {
            if (isMobile && (ev.target as HTMLAnchorElement).href) { // see if it is a link
              setTimeout(() => setIsMenuOpen(false), 200);
            }
          }}
          className="
            fixed z-10 h-screen
            w-full overflow-y-scroll bg-white p-4 pb-24
            md:static md:w-52 md:flex-none"
        >
          <MainNav />
        </L.Div>
        <L.Div
          className="p-4 text-base md:flex-auto"
        >
          { children }
        </L.Div>
      </L.Div>
    </div>
  );
};
