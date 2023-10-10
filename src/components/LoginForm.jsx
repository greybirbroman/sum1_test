import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import Fieldset from './Fieldset';
import PrimaryButton from './PrimaryButton';
import useFormWithValidation from '../utils/hooks/useFormWithValidation';
import { loginUserAction } from '../features/slices/auth/authActionCreator';
import { getIsLoggedIn } from '../features/selectors/authSelectors';

const LoginForm = () => {
  const { values, errors, handleChange, isValid } = useFormWithValidation();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userCredentials = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUserAction(userCredentials));
  };


  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profile');
    }
  }, [isLoggedIn, navigate]);

  return (
    <Form title='Вход в систему' onSubmit={handleSubmit}>
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
      <span>
        Еще нет аккаунта ?{' '}
        <Link className='text-cyan-700' to='/register'>
          Зарегестрироваться
        </Link>
      </span>

      <PrimaryButton title='Войти' type='submit' onClick={handleSubmit} disabled={!isValid} />
    </Form>
  );
};

export default LoginForm;
