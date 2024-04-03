import * as L from '@leda';

export const MenuButton = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<boolean>,
}) => (
  <L.Button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="
        fixed
        right-3
        top-3
        z-10
        border-0
        py-2
        text-stone-900
        bg-white
        hover:bg-white
        md:hidden"
  >
    <L.Icon
      icon="menu"
      size={30}
      className="text-black"
    />
  </L.Button>
);
