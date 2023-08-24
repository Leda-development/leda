import * as L from '@leda';

export const MenuButton = ({
  isMobile,
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMobile: boolean,
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<boolean>,
}) => (
  <L.Button
    shouldRender={isMobile}
    onClick={() => isMobile && setIsMenuOpen(!isMenuOpen)}
    className="
        fixed
        right-3
        top-3
        z-10
        border-0
        py-2
        text-stone-900
        md:hidden"

  >
    <L.Icon icon="menu" size={30} />
  </L.Button>
);
