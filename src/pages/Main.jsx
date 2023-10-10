import React from 'react';
import PageTitle from '../components/PageTitle';
import PaddingWrapper from '../components/hoc/PaddingWrapper';
import TechList from '../components/TechList';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../features/selectors/authSelectors';

const Main = () => {

  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <div className='flex flex-grow items-center flex-col gap-10 z-10'>
      <PageTitle
        title='Добро пожаловать на главную страницу приложения!'
        subtitle='В данном приложении используется: React, React Router 6, ReduxToolkit, JSON - server - auth, TailwindCSS и Framer-Motion.
        После входа в систему здесь появятся анимированные карточки с технологиями.'
      />
      {isLoggedIn && <TechList />}
    </div>
  );
};

export default PaddingWrapper(Main);
