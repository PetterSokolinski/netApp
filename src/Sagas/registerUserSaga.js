import { put, call } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { registerUserService } from '../Services/index'

export function* registerUserSaga(payload) {
    try {
      const response = yield call(registerUserService, payload)
      yield [
        put({ type: types.REGISTER_USER_SUCCESS, response })
      ]
    } catch(error) {
      yield put({ type: types.REGISTER_USER_ERROR, error })
    }
  }