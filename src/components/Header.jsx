import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className='w-full flex items-center justify-between p-4 lg:p-10'>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
