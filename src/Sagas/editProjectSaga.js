import { put, call } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { editProjectService } from '../Services/index'

export function* editProjectSaga(payload) {
    try {
      const response = yield call(editProjectService, payload)
      yield [
        put({ type: types.EDIT_PROJECT_SUCCESS, response })
      ]
    } catch(error) {
      yield put({ type: types.EDIT_PROJECT_ERROR, error })
    }
  }