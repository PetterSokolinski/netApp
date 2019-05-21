import * as types from './actions'

export const editTaskAction = (task) => {
    return {
      type: types.EDIT_TASK,
      task
    }
  }