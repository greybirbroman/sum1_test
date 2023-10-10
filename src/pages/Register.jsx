import React from 'react';
import RegisterForm from '../components/RegisterForm';
import PageTitle from '../components/PageTitle';
import PaddingWrapper from '../components/hoc/PaddingWrapper';

const Register = () => {
  return (
    <div className='flex lg:flex-row flex-grow items-center flex-col gap-10 z-10'>
      <PageTitle
        title='Пожалуйста зарегистрируйтесь'
        subtitle='Чтобы получить доступ к личному кабинету'
      />
      <RegisterForm />
    </div>
  );
};

export default PaddingWrapper(Register);
