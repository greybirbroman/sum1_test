import { register, authorization } from '../../../utils/api';

import { IS_LOGGED_IN, REGISTER_SUCCESS, CURRENT_USER } from '../../constants';
import {
  setUser,
  setErrorMessage,
  setSuccessMessage,
  logoutUser,
} from './authSlice';

import { authErrors } from './authErrors';

export const registerUserAction = (userData) => async (dispatch) => {
  try {
    const response = await register(userData);
    if (response.accessToken) {
      dispatch(setSuccessMessage(REGISTER_SUCCESS));
    }
  } catch (error) {
    authErrors(dispatch, error);
  }
};

export const loginUserAction = (userData) => async (dispatch) => {
  try {
    const response = await authorization(userData);
    if (response.user) {
      dispatch(setUser(response.user));
      localStorage.setItem(IS_LOGGED_IN, 'true');
      localStorage.setItem(CURRENT_USER, JSON.stringify(response.user));
    }
  } catch (error) {
    authErrors(dispatch, error);
  }
};

export const resetFormMessageAction = () => (dispatch) => {
  dispatch(setErrorMessage(''));
  dispatch(setSuccessMessage(''));
};

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem(CURRENT_USER);
  localStorage.removeItem(IS_LOGGED_IN);
  dispatch(logoutUser());
};
