import React from 'react';
import { LoginForm, PageTitle } from '../components';
import PaddingWrapper from '../components/hoc/PaddingWrapper';

const Login = () => {
  return (
    <div className='flex lg:flex-row flex-grow items-center flex-col gap-10 z-10'>
      <PageTitle
        title='Пожалуйста выполните вход'
        subtitle='Для доступа к личному кабинету'
      />
      <LoginForm />
    </div>
  );
};

export default PaddingWrapper(Login);
