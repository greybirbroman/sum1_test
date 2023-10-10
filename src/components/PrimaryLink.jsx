import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryLink = ({ to, title, onClick, target, outline, align }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      target={target && '_blank'}
      className={`font-semibold bg-clip-text text-transparent bg-gray-700
     hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 duration-300 lg:text-[20px] w-fit ${
       outline ? 'ring ring-cyan-500 rounded-xl py-2 px-5' : ''
     } ${align ? align : ''}`}
    >
      {title}
    </Link>
  );
};

export default PrimaryLink;
