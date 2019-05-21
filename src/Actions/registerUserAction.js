import * as types from './actions'

export const registerUserAction = (user) => {
    return {
      type: types.REGISTER_USER,
      user
    }
  }