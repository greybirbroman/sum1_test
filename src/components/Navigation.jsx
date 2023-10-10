import React from 'react';
import { PrimaryLink } from '../components';
import { ReactComponent as BurgerMenu } from '../images/burger-menu.svg';
import { useNavigationMenu } from '../utils/hooks/useNavigationMenu';
import { useIsMobileResolution } from '../utils/hooks/useIsMobileResolution';
import { getIsLoggedIn } from '../features/selectors/authSelectors';
import { useSelector } from 'react-redux';

const MenuList = ({ onClick, isMobile }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const links = [
    {
      id: 'main',
      href: '/',
      title: 'главная',
    },
    {
      id: 'register',
      href: isLoggedIn ? '/profile' : '/register',
      title: 'регистрация',
    },
    {
      id: 'login',
      href: isLoggedIn ? '/profile' : '/login',
      title: 'войти',
    },
    {
      id: 'profile',
      href: '/profile',
      title: 'профиль',
    },
  ];

  return (
    <ul
      className={`flex gap-4 capitalize z-20 bg-white ${
        isMobile
          ? 'flex-col absolute right-4 border-2 border-cyan-700 rounded-lg p-2'
          : ''
      }`}
    >
      {links.map((link) => (
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
            <MenuList onClick={toggleMenu} isMobile={isMobile} />
          ) : null}
        </>
      ) : (
        <MenuList />
      )}
    </nav>
  );
};

export default Navigation;
