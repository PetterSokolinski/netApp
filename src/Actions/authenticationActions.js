import * as types from './index';

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user
  }
};

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};

export const resetEmailPasswordAction = (user) => {
  return {
    type: types.EMAIL_PASSWORD_RESET,
    user
  }
}

export const resetUsername = (user) => {
  return {
    type: types.USERNAME_RESET,
    user
  }
}