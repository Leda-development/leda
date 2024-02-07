import * as L from '@leda';
import { MenuButton } from './MenuButton';
import { greekFont } from '@/fonts';

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
      className={`mx-auto
        inline-block
        max-w-7xl
        p-4 pt-5
        ${greekFont.className}
      `}
    >
      <span
        className={`
          text-3xl
        `}
      >
        <span className="text-pink-500">
          L
        </span>
        <span className="text-teal-500">
          E
        </span>
        <span className="text-yellow-500">
          D
        </span>
        <span className="text-cyan-600">
          A
        </span>
      </span>
      <span className="ml-2 text-xs">1.2.6</span>
    </L.A>
    <L.A
      href="https://github.com/leda-development/leda"
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
