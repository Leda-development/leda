'use client'

import * as L from '@leda';
import { MainHeader } from '@/components/header';
import { useEffect, useState } from 'react';
import { MainNav } from '@/components/nav';


const mobileMediaQuery = '(max-width: 768px)'   

const handleQueryChange = ({ query, setIsMobile }: any) => {
  setIsMobile(query.matches)
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

    setIsMobile(query.matches)
    
    query.addEventListener('change', () => handleQueryChange({ query, setIsMobile }))

    return () => query.removeEventListener('change', () => handleQueryChange({ query, setIsMobile }))
  }, []);

  return (
      <div>
          <MainHeader
            isMenuOpen={isMenuOpen}
            isMobile={isMobile}
            setIsMenuOpen={setIsMenuOpen}
          />
          <L.Div
            className='md:flex md:flex-row overflow-hidden'
          >
            <L.Div
              shouldRender={!isMobile || isMenuOpen}
              onClick={(ev) => {
                if (isMobile && ev.target.href) {
                  setTimeout(() => setIsMenuOpen(false), 200)
                }
              }}
              className="
                p-4 md:w-52 md:flex-none md:static
                w-full fixed top-13 bg-white overflow-y-scroll
                h-screen z-10 pb-24"
            >
              <MainNav />
            </L.Div>
            <L.Div
              className='md:flex-auto p-4 text-sm'
            >
              { children }
            </L.Div>
          </L.Div>
      </div>
);};
