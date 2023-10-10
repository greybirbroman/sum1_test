import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import Fieldset from './Fieldset';
import PrimaryButton from './PrimaryButton';
import PrimaryLink from './PrimaryLink';
import useFormWithValidation from '../utils/hooks/useFormWithValidation';
import { registerUserAction } from '../features/slices/auth/authActionCreator';
import { getSuccessMessage } from '../features/selectors/authSelectors';

const RegisterForm = () => {
  const { values, errors, handleChange, validatePasswordMatch, isValid } =
    useFormWithValidation();
  const dispatch = useDispatch();
  const isSuccess = useSelector(getSuccessMessage);

  useEffect(() => {
    validatePasswordMatch();
  }, [values.password, values.confirmPassword]);

  const handleSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(registerUserAction(userData));
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
      {isSuccess ? (
        <PrimaryLink title='Войти' to='/login' align='self-center'/>
      ) : (
        <PrimaryButton
          title='Регистрация'
          type='submit'
          onClick={handleSubmit}
          disabled={!isValid}
        />
      )}
    </Form>
  );
};

export default RegisterForm;
