import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../features/selectors/authSelectors';
import PageTitle from '../components/PageTitle';
import useHandlers from '../utils/hooks/useHandlers';
import PaddingWrapper from '../components/hoc/PaddingWrapper';

const Profile = () => {
  const currentUser = useSelector(getCurrentUser);

  const { handleLogout } = useHandlers();

  return (
    <div className='flex flex-grow items-center flex-col gap-10 z-10'>
      <PageTitle
        title={`Добро пожаловать, ${currentUser.name}!`}
        subtitle='Это ваша персональная страница'
      />
     
      <PrimaryButton title='Выйти' onClick={handleLogout} />
    </div>
  );
};

export default PaddingWrapper(Profile);
