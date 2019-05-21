import { put, call } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { addProjectService } from '../Services/index'

export function* addProjectSaga(payload) {
    try {
      const response = yield call(addProjectService, payload)
      yield [
        put({ type: types.ADD_PROJECT_SUCCESS, response })
      ]
    } catch(error) {
      yield put({ type: types.ADD_PROJECT_ERROR, error })
    }
  }