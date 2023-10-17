import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from './useActions';

const useHandlers = () => {
  const {logoutAction} = useActions()
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAction()
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1)
  }

  return {
    handleLogout,
    handleGoBack
  };
};

export default useHandlers;
