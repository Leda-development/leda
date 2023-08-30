import * as L from '@leda';
import { MenuButton } from './MenuButton';

export const MainHeader = ({
  isMobile,
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMobile: boolean,
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<boolean>,
}) => (
  <div className="
      sticky top-0 z-20 border-b
      border-slate-400 bg-white md:relative"
  >
    <L.A
      href="/"
      className="mx-auto inline-block max-w-7xl p-4
        pt-5 text-xl
        font-bold"
    >
      <span className="text-3xl">Leda</span>
      <span className="ml-2 text-xs">0.30.0</span>
    </L.A>
    <L.A
      href="https://github.com/Apollo-11/leda"
      target="_blank"
      className="absolute
        right-20
        top-3
        p-3 md:right-4"
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
