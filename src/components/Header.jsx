import React from 'react';
import { Logo, Navigation } from '../components';

const Header = () => {
  return (
    <header className='w-full flex items-center justify-between p-4 lg:p-10'>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
