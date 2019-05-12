import { put, call } from 'redux-saga/effects';
import { registerUserService, loginUserService, emailPasswordUsernameService } from '../Services/authenticationService';

import * as types from '../Actions'

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield [
      put({ type: types.REGISTER_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield [
      put({ type: types.LOGIN_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}


export function* emailPasswordSaga(payload) {
  try {
    const response = yield call(emailPasswordUsernameService, payload);
    yield [
      put({ type: types.EMAIL_PASSWORD_RESET_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.EMAIL_PASSWORD_RESET_ERROR, error })
  }
}

export function* usernameSaga(payload) {
  try {
    const response = yield call(emailPasswordUsernameService, payload);
    yield [
      put({ type: types.USERNAME_RESET_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.USERNAME_RESET_ERROR, error })
  }
}