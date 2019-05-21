import * as types from './actions'

export const addTaskAction = (task) => {
    return {
      type: types.ADD_TASK,
      task
    }
  }