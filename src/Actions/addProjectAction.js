import * as types from './actions'

export const addProjectAction = (project) => {
    return {
      type: types.ADD_PROJECT,
      project
    }
  }