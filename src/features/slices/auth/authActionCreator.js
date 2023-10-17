import { register, authorization } from '../../../utils/api';

import { IS_LOGGED_IN, REGISTER_SUCCESS, CURRENT_USER } from '../../constants';
import {
  setUser,
  setIsLoggedIn,
  setErrorMessage,
  setSuccessMessage,
  logoutUser,
} from './authSlice';

import { authErrors } from './authErrors';

const checkIsLoggedIn = () => (dispatch) => {
  const loggedIn = localStorage.getItem(IS_LOGGED_IN);
  const user = JSON.parse(localStorage.getItem(CURRENT_USER));
  if (loggedIn && user) {
    dispatch(setUser(user));
    dispatch(setIsLoggedIn(loggedIn));
  }
};

const registerUserAction = (userData) => async (dispatch) => {
  try {
    const response = await register(userData);
    if (response.accessToken) {
      dispatch(setSuccessMessage(REGISTER_SUCCESS));
    }
  } catch (error) {
    authErrors(dispatch, error);
  }
};

const loginUserAction = (userData) => async (dispatch) => {
  try {
    const response = await authorization(userData);
    if (response.user) {
      dispatch(setUser(response.user));
      dispatch(setIsLoggedIn(true));
      localStorage.setItem(IS_LOGGED_IN, 'true');
      localStorage.setItem(CURRENT_USER, JSON.stringify(response.user));
    }
  } catch (error) {
    authErrors(dispatch, error);
  }
};

const resetFormMessageAction = () => (dispatch) => {
  dispatch(setErrorMessage(''));
  dispatch(setSuccessMessage(''));
};
const logoutAction = () => (dispatch) => {
  localStorage.removeItem(CURRENT_USER);
  localStorage.removeItem(IS_LOGGED_IN);
  dispatch(logoutUser());
};

export {
  checkIsLoggedIn,
  registerUserAction,
  loginUserAction,
  resetFormMessageAction,
  logoutAction,
};
