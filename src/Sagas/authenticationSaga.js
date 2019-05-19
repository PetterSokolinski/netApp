import { put, call } from 'redux-saga/effects';
import { registerUserService, loginUserService, emailPasswordUsernameService, getProjects, addTaskService, deleteTaskService, editTaskService, addProjectService, getMeService, deleteProjectService, editProjectService, assignProjectService } from '../Services/authenticationService';

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

export function* getProjectsSaga() {
  try {
    const response = yield call(getProjects);
    yield [
      put({ type: types.USERNAME_RESET_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.USERNAME_RESET_ERROR, error })
  }
}

export function* addTaskSaga(payload) {
  try {
    const response = yield call(addTaskService, payload);
    yield [
      put({ type: types.ADD_TASK_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ADD_TASK_ERROR, error })
  }
}

export function* deleteTaskSaga(payload) {
  try {
    const response = yield call(deleteTaskService, payload);
    yield [
      put({ type: types.DELETE_TASK_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.DELETE_TASK_ERROR, error })
  }
}

export function* editTaskSaga(payload) {
  try {
    const response = yield call(editTaskService, payload);
    yield [
      put({ type: types.EDIT_TASK_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.EDIT_TASK_ERROR, error })
  }
}

export function* getMeSaga() {
  try {
    const response = yield call(getMeService);
    yield [
      put({ type: types.GET_ME_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.GET_ME_ERROR, error })
  }
}

export function* addProjectSaga(payload) {
  try {
    const response = yield call(addProjectService, payload);
    yield [
      put({ type: types.ADD_PROJECT_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ADD_PROJECT_ERROR, error })
  }
}

export function* deleteProjectSaga(payload) {
  try {
    const response = yield call(deleteProjectService, payload);
    yield [
      put({ type: types.DELETE_PROJECT_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.DELETE_PROJECT_ERROR, error })
  }
}

export function* editProjectSaga(payload) {
  try {
    const response = yield call(editProjectService, payload);
    yield [
      put({ type: types.EDIT_PROJECT_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.EDIT_PROJECT_ERROR, error })
  }
}

export function* assignProjectSaga(payload) {
  try {
    const response = yield call(assignProjectService, payload);
    yield [
      put({ type: types.ASSIGN_PROJECT_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ASSIGN_PROJECT_ERROR, error })
  }
}







