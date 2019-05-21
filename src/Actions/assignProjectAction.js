import * as types from './actions'

export const assignProjectAction = (projectId) => {
    return {
      type: types.ASSIGN_PROJECT,
      projectId
    }
  }