import { takeLatest } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { registerUserSaga } from './registerUserSaga'
import { addProjectSaga } from './addProjectSaga'
import { assignProjectSaga } from './assignProjectSaga'
import { deleteProjectSaga } from './deleteProjectSaga'
import { deleteTaskSaga } from './deleteTaskSaga'
import { editProjectSaga } from './editProjectSaga'
import { getProjectsSaga } from './getProjectsSaga'
import { loginUserSaga } from './loginUserSaga'
import { resetEmailPasswordUsernameSaga } from './resetEmailPasswordUsernameSaga'
import { addTaskSaga } from './addTaskSaga'
import { editTaskSaga } from './editTaskSaga'
import { getMeSaga } from './getMeSaga'


export default function* watchActionsInApplication() {
  yield takeLatest(types.REGISTER_USER, registerUserSaga)
  yield takeLatest(types.LOGIN_USER, loginUserSaga)
  yield takeLatest(types.EMAIL_PASSWORD_USERNAME_RESET, resetEmailPasswordUsernameSaga)
  yield takeLatest(types.GET_PROJECTS, getProjectsSaga)
  yield takeLatest(types.ADD_TASK, addTaskSaga)
  yield takeLatest(types.DELETE_TASK, deleteTaskSaga)
  yield takeLatest(types.EDIT_TASK, editTaskSaga)
  yield takeLatest(types.ADD_PROJECT, addProjectSaga)
  yield takeLatest(types.DELETE_PROJECT, deleteProjectSaga)
  yield takeLatest(types.EDIT_PROJECT, editProjectSaga)
  yield takeLatest(types.ASSIGN_PROJECT, assignProjectSaga)
  yield takeLatest(types.GET_ME, getMeSaga)
}