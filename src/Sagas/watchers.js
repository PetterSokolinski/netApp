import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga, emailPasswordSaga, usernameSaga, getProjectsSaga, addTaskSaga, deleteTaskSaga, editTaskSaga, addProjectSaga, getMeSaga, deleteProjectSaga, editProjectSaga, assignProjectSaga } from './authenticationSaga';

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
  yield takeLatest(types.ADD_PROJECT, addProjectSaga)
  yield takeLatest(types.GET_ME, getMeSaga)
  yield takeLatest(types.DELETE_PROJECT, deleteProjectSaga)
  yield takeLatest(types.EDIT_PROJECT, editProjectSaga)
  yield takeLatest(types.ASSIGN_PROJECT, assignProjectSaga)
}