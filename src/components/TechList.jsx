import React from 'react';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { motion as m } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { techs } from '../utils/constants';
import NpmLogo from '../images/npm-logo.webp';
import SectionWrapper from './hoc/SectionWrapper';

const TechCard = ({ index, image, title, description, link }) => {
  return (
    <m.li variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-gray-700 p-3 rounded-2xl w-[320px]'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3'>
            <Link
              to={link}
              target='_blank'
              className='bg-white w-10 h-10 rounded-full flex justify-center items-center'
            >
              <img
                src={NpmLogo}
                alt='NPM, лого, иконка'
                className='w-2/3 h-2/3 object-contain'
              />
            </Link>
          </div>
        </div>
        <div className='mt-5 cursor-default'>
          <h3 className='text-white forn-bold text-[24px]'>{title}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>
      </Tilt>
    </m.li>
  );
};

const TechList = () => {
  return (
    <ul className='mt-20 flex flex-wrap gap-7 w-full justify-center'>
      {techs.map((tech, index) => (
        <TechCard key={tech.id} {...tech} index={index} />
      ))}
    </ul>
  );
};

export default SectionWrapper(TechList, 'techList');
