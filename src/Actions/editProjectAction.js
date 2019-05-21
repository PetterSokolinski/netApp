import * as types from './actions'

export const editProjectAction = (project) => {
    return {
      type: types.EDIT_PROJECT,
      project
    }
  }