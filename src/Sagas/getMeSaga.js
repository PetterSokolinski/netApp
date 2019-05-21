import { put, call } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { getMeService } from '../Services/index'

export function* getMeSaga() {
    try {
      const response = yield call(getMeService)
      yield [
        put({ type: types.GET_ME_SUCCESS, response })
      ]
    } catch(error) {
      yield put({ type: types.GET_ME_ERROR, error })
    }
  }