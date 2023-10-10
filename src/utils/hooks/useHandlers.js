import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from '../../features/slices/auth/authActionCreator';

const useHandlers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction());
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
