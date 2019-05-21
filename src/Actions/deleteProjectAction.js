import * as types from './actions'

export const deleteProjectAction = (projectId) => {
    return {
      type: types.DELETE_PROJECT,
      projectId
    }
  }