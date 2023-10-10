import React from 'react';
import { motion as m } from 'framer-motion'
import { titleVariants } from '../utils/motion';

const PageTitle = ({ title, subtitle }) => {
  return (
    <m.div 
    variants={titleVariants}
    initial='hidden'
    animate='show'
    className='cursor-default flex flex-col gap-2'>
      <h1 className='font-bold text-3xl lg:text-5xl blue-gradient'>
        {title}
      </h1>
      <p className='font-semibold text-lg lg:text-xl'>{subtitle}</p>
    </m.div>
  );
};

export default PageTitle;
