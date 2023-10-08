import React from 'react';

const PrimaryButton = ({ id, type, title, onClick, disabled }) => {
  return (
    <button
      id={id}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      className='py-2 px-5 bg-cyan-500 text-white rounded-xl lg:text-[18px] w-fit hover:bg-cyan-700 disabled:bg-slate-200 self-center duration-300'
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
