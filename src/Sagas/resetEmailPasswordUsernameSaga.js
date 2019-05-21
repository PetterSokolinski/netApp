import { put, call } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { resetEmailPasswordUsernameService } from '../Services/index'

export function* resetEmailPasswordUsernameSaga(payload) {
    try {
      const response = yield call(resetEmailPasswordUsernameService, payload)
      yield [
        put({ type: types.EMAIL_PASSWORD_USERNAME_RESET_SUCCESS, response })
      ]
    } catch(error) {
      yield put({ type: types.EMAIL_PASSWORD_USERNAME_RESET_ERROR, error })
    }
  }