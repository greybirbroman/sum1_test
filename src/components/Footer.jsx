import React from 'react';
import PrimaryLink from './PrimaryLink';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='flex flex-col justify-center items-center cursor-default z-10'>
     <PrimaryLink title='Roman Fedorov' to='https://github.com/greybirbroman' target/>
      <time>&#169;{year}</time>
    </footer>
  );
};

export default Footer;
