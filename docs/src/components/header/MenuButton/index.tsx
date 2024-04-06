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
        mr-2
        border-0
        bg-white
        py-2
        text-stone-900
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
