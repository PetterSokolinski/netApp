import { put, call } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { deleteTaskService } from '../Services/index'

export function* deleteTaskSaga(payload) {
    try {
      const response = yield call(deleteTaskService, payload)
      yield [
        put({ type: types.DELETE_TASK_SUCCESS, response })
      ]
    } catch(error) {
      yield put({ type: types.DELETE_TASK_ERROR, error })
    }
  }