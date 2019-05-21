import { put, call } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { addTaskService } from '../Services/index'

export function* addTaskSaga(payload) {
    try {
      const response = yield call(addTaskService, payload)
      yield [
        put({ type: types.ADD_TASK_SUCCESS, response })
      ]
    } catch(error) {
      yield put({ type: types.ADD_TASK_ERROR, error })
    }
  }