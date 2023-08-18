import * as L from '@leda';
import { MenuButton } from './MenuButton';

export const MainHeader = ({
  isMobile,
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMobile: boolean,
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<boolean>
}) => {
  return (
    <div className='
      border-b border-slate-400 md:relative bg-white
      sticky top-0 bg-white z-20'
    >
      <L.A
        href='/'
        className='p-4 pt-5 max-w-7xl mx-auto
        text-xl font-bold
        inline-block'
      >
        <span className='text-3xl'>Leda</span>
        <span className='text-xs ml-2'>0.28.2</span>
      </L.A>
      <L.A
        href='https://github.com/Apollo-11/leda'
        target='_blank'
        className='absolute
        top-3
        right-20
        p-3 md:right-4'
      >
        <L.Icon
          icon={L.IconTypes.Icons.Github}
        />
      </L.A>
      <MenuButton
        isMenuOpen={isMenuOpen}
        isMobile={isMobile}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );   
};
