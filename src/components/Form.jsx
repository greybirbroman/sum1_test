import React from 'react';

const Form = ({ onSubmit, title, children }) => {
  return (
    <form onSubmit={onSubmit} className='flex flex-col h-fit gap-5 max-w-[550px] w-full rounded-xl shadow-lg p-4 lg:p-8 bg-slate-100 cursor-default'>
      <h4 className='w-fit text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500'>{title}</h4>
      {children}
    </form>
  );
};

export default Form;
