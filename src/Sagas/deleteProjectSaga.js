import { put, call } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { deleteProjectService } from '../Services/index'

export function* deleteProjectSaga(payload) {
    try {
      const response = yield call(deleteProjectService, payload)
      yield [
        put({ type: types.DELETE_PROJECT_SUCCESS, response })
      ]
    } catch(error) {
      yield put({ type: types.DELETE_PROJECT_ERROR, error })
    }
  }