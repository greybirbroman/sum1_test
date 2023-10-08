import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';
import Fieldset from './Fieldset';
import PrimaryButton from './PrimaryButton';
import useFormWithValidation from '../utils/hooks/useFormWithValidation';

const RegisterForm = () => {
  const { values, errors, handleChange, validatePasswordMatch, isValid } =
    useFormWithValidation();

  useEffect(() => {
    validatePasswordMatch();
  }, [values.password, values.confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form title='Регистрация' onSubmit={handleSubmit}>
      <Fieldset
        id='name'
        name='name'
        label='Имя'
        type='text'
        value={values.name}
        placeholder='Введите имя...'
        minLen={2}
        maxLen={50}
        onChange={handleChange}
        errors={errors.name}
      />
      <Fieldset
        id='login'
        name='email'
        label='Логин'
        type='email'
        value={values.email}
        placeholder='Введите email...'
        minLen={2}
        maxLen={100}
        onChange={handleChange}
        errors={errors.email}
      />
      <Fieldset
        id='password'
        name='password'
        label='Пароль'
        type='password'
        value={values.password}
        placeholder='Введите пароль...'
        minLen={6}
        maxLen={25}
        onChange={handleChange}
        errors={errors.password}
      />
      <Fieldset
        id='confirmPassword'
        name='confirmPassword'
        label='Подтвердите пароль'
        type='password'
        value={values.confirmPassword}
        placeholder='Повторите пароль...'
        minLen={6}
        maxLen={25}
        onChange={handleChange}
        errors={errors.confirmPassword}
      />
      <span>
        Нажимая кнопку «Регистрация», вы соглашаетесь с{' '}
        <Link
          className='text-cyan-700'
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Политикой конфиденциальности.
        </Link>
      </span>
      <PrimaryButton
        title='Регистрация'
        type='submit'
        onClick={handleSubmit}
        disabled={!isValid}
      />
    </Form>
  );
};

export default RegisterForm;
