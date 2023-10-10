import React from 'react';
import { PrimaryButton, PageTitle } from '../components';
import PaddingWrapper from '../components/hoc/PaddingWrapper';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../features/selectors/authSelectors';
import useHandlers from '../utils/hooks/useHandlers';

const Profile = () => {
  const currentUser = useSelector(getCurrentUser);
  const { handleLogout } = useHandlers();

  return (
    <div className='flex flex-grow items-center flex-col gap-10 z-10'>
      <PageTitle
        title={`Добро пожаловать, ${currentUser?.name}!`}
        subtitle='Это ваша персональная страница'
      />
     
      <PrimaryButton title='Выйти' onClick={handleLogout} />
    </div>
  );
};

export default PaddingWrapper(Profile);
