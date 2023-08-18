import * as L from '@leda';

export const MenuButton = ({
  isMobile,
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMobile: boolean,
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<boolean>,
}) => {
  return (
    <L.Button
      shouldRender={isMobile}
      onClick={() => isMobile && setIsMenuOpen(!isMenuOpen)}
      className='fixed
        top-3
        right-3
        z-10
        text-stone-900
        py-2
        border-0
        menu-button
        md:display-none'
    >
      <L.Icon icon='menu' size={30} />
    </L.Button>
  );
}