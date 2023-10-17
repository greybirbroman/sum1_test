import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Form, Fieldset, PrimaryButton } from '../components';
import useFormWithValidation from '../utils/hooks/useFormWithValidation';
import { getIsLoggedIn } from '../features/selectors/authSelectors';
import { useActions } from '../utils/hooks/useActions';

const LoginForm = () => {
  const { values, errors, handleChange, isValid } = useFormWithValidation();
  const { loginUserAction } = useActions()
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userCredentials = {
      email: values.email,
      password: values.password,
    };
    loginUserAction(userCredentials)
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

      <PrimaryButton
        title='Войти'
        type='submit'
        onClick={handleSubmit}
        disabled={!isValid}
      />
    </Form>
  );
};

export default LoginForm;
