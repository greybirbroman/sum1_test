import React from 'react';
import PrimaryLink from './PrimaryLink';
import { links } from '../utils/constants';
import { ReactComponent as BurgerMenu } from '../images/burger-menu.svg';
import { useNavigationMenu } from '../utils/hooks/useNavigationMenu';
import { useIsMobileResolution } from '../utils/hooks/useIsMobileResolution';

const MenuList = ({ onClick, list, isMobile }) => {
  return (
    <ul
      className={`flex gap-4 capitalize ${
        isMobile
          ? 'flex-col absolute right-4 border-2 border-cyan-700 rounded-lg p-2'
          : ''
      }`}
    >
      {list.map((link) => (
        <li key={link.id}>
          <PrimaryLink to={link.href} title={link.title} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

const Navigation = () => {
  const { menuRef, toggleMenu, isMenuVisible } = useNavigationMenu();
  const isMobile = useIsMobileResolution(992);

  return (
    <nav ref={menuRef}>
      {isMobile ? (
        <>
          <BurgerMenu
            className={`cursor-pointer w-[40px] h-[40px] ${
              isMobile ? 'flex' : 'hidden'
            }`}
            alt='Иконка, изображение - Бургер, Меню'
            onClick={toggleMenu}
          />
          {isMenuVisible ? (
            <MenuList onClick={toggleMenu} list={links} isMobile={isMobile} />
          ) : null}
        </>
      ) : (
        <MenuList list={links} />
      )}
    </nav>
  );
};

export default Navigation;
