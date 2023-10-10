// AUTH

const AUTH = 'auth';
const CURRENT_USER = 'currentUser';
const IS_LOGGED_IN = 'isLoggedIn';
const REGISTER_SUCCESS = 'Регистрация прошла успешно!';
const EMAIL_ALREADY_EXISTS = 'Email already exists';
const USER_NOT_FOUND = 'Cannot find user';
const INCORRECT_PASSWORD = 'Incorrect password';
const LOGIN_IS_REGISTERED = 'Пользователь с таким логином уже зарегистрирован!';
const REGISTER_SERVER_ERROR =
  'Произошла ошибка при регистрации, пожалуйста попробуйте еще раз!';
const SERVER_ERROR = 'Призошла ошибка на сервере';
const INCORRECT_DATA = 'Имя пользователя или пароль введены не верно';

export {
  AUTH,
  CURRENT_USER,
  REGISTER_SUCCESS,
  SERVER_ERROR,
  REGISTER_SERVER_ERROR,
  EMAIL_ALREADY_EXISTS,
  INCORRECT_PASSWORD,
  USER_NOT_FOUND,
  LOGIN_IS_REGISTERED,
  IS_LOGGED_IN,
  INCORRECT_DATA,
};
