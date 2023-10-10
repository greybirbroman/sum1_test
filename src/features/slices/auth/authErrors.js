import { setErrorMessage } from './authSlice';
import {
  EMAIL_ALREADY_EXISTS,
  LOGIN_IS_REGISTERED,
  SERVER_ERROR,
  USER_NOT_FOUND,
  INCORRECT_DATA,
  INCORRECT_PASSWORD
} from '../../constants';

export const authErrors = (dispatch, error) => {
  let errorMessage = '';

  switch (error) {
    case EMAIL_ALREADY_EXISTS:
      errorMessage = LOGIN_IS_REGISTERED;
      break;
    case USER_NOT_FOUND:
        errorMessage = INCORRECT_DATA;
        break;
    case INCORRECT_PASSWORD:
        errorMessage = INCORRECT_DATA;
        break;
    default:
      errorMessage = SERVER_ERROR;
      break;
  }
  dispatch(setErrorMessage(errorMessage));
};
