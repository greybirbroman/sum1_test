import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryLink = ({ to, title, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-cyan-500
     hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 duration-150 lg:text-[20px]`}
    >
      {title}
    </Link>
  );
};

export default PrimaryLink;
