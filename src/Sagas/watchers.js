import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga, emailPasswordSaga, usernameSaga, getProjectsSaga, addTaskSaga, deleteTaskSaga, editTaskSaga } from './authenticationSaga';

import * as types from '../Actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.EMAIL_PASSWORD_RESET, emailPasswordSaga)
  yield takeLatest(types.USERNAME_RESET, usernameSaga)
  yield takeLatest(types.GET_PROJECTS, getProjectsSaga)
  yield takeLatest(types.ADD_TASK, addTaskSaga)
  yield takeLatest(types.DELETE_TASK, deleteTaskSaga)
  yield takeLatest(types.EDIT_TASK, editTaskSaga)
}