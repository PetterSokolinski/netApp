import { put, call } from 'redux-saga/effects'
import * as types from '../Actions/actions'
import { getProjectsService } from '../Services/index'

export function* getProjectsSaga() {
    try {
      const response = yield call(getProjectsService)
      yield [
        put({ type: types.GET_PROJECTS_SUCCESS, response })
      ]
    } catch(error) {
      yield put({ type: types.GET_PROJECTS_ERROR, error })
    }
  }