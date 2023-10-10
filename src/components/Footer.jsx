import React from 'react';
import { PrimaryLink } from '../components';
import { socials } from '../utils/constants';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='flex flex-col justify-center items-center cursor-default z-10'>
      <ul className='flex items-center gap-2'>
        {socials.map((social) => (
          <li key={social.id}>
            <PrimaryLink title={social.title} to={social.link} target />
          </li>
        ))}
      </ul>
      <time>&#169;{year}</time>
    </footer>
  );
};

export default Footer;
