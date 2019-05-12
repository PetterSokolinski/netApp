import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga, emailPasswordSaga, usernameSaga } from './authenticationSaga';

import * as types from '../Actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.EMAIL_PASSWORD_RESET, emailPasswordSaga)
  yield takeLatest(types.USERNAME_RESET, usernameSaga)
}