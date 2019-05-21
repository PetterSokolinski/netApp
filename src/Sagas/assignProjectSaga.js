import { put, call } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { assignProjectService } from '../Services/index'

export function* assignProjectSaga(payload) {
    try {
      const response = yield call(assignProjectService, payload)
      yield [
        put({ type: types.ASSIGN_PROJECT_SUCCESS, response })
      ]
    } catch(error) {
      yield put({ type: types.ASSIGN_PROJECT_ERROR, error })
    }
  }