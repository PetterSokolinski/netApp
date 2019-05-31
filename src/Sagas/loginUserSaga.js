import { put, call } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { loginUserService } from '../Services/index'

export function* loginUserSaga(payload) {
  try {
    const response = yield call(loginUserService, payload)
    yield [
      put({ type: types.LOGIN_USER_SUCCESS, response })
    ]
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}