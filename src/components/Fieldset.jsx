import React, { useState } from 'react';
import { ReactComponent as VisiblePassword } from '../images/visible_password.svg';
import { ReactComponent as HiddenPassword } from '../images/hidden_password.svg';

const Fieldset = ({
  name,
  label,
  type,
  value,
  errors,
  placeholder,
  minLen,
  maxLen,
  onChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const PasswordFigure = ({ onClick }) => {
    const figureClass =
      'w-[30px] h-[30px] absolute right-4 bg-center cursor-pointer';
    return !isPasswordVisible ? (
      <HiddenPassword className={figureClass} onClick={onClick} />
    ) : (
      <VisiblePassword className={figureClass} onClick={onClick} />
    );
  };

  return (
    <fieldset className='flex flex-col h-[80px]'>
      <label htmlFor={name} type={name} className='text-lg'>
        {label}
      </label>
      <div className='flex items-center justify-between relative'>
        <input
          className='outline-none py-2 px-5 rounded-md w-full placeholder:text-gray-300'
          id={name}
          name={name}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          required
          value={value || ''}
          minLength={minLen}
          maxLength={maxLen}
          autoComplete='off'
          onChange={onChange}
        />
        {type === 'password' && (
          <PasswordFigure onClick={togglePasswordVisible} />
        )}
      </div>
      {errors && <span className='text-red-500 mt-1 text-[14px] leading-4'>{errors}</span>}
    </fieldset>
  );
};

export default Fieldset;
