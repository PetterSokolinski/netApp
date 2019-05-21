import { put, call } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { editTaskService } from '../Services/index'

export function* editTaskSaga(payload) {
    try {
      const response = yield call(editTaskService, payload)
      yield [
        put({ type: types.EDIT_TASK_SUCCESS, response })
      ]
    } catch(error) {
      yield put({ type: types.EDIT_TASK_ERROR, error })
    }
  }