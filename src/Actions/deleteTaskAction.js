import * as types from './actions'

export const deleteTaskAction = (taskId) => {
    return {
      type: types.DELETE_TASK,
      taskId
    }
  }