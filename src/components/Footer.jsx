import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='flex flex-col justify-center items-center'>
      <p>Roman Fedorov</p>
      <time>&#169;{year}</time>
    </footer>
  );
};

export default Footer;
