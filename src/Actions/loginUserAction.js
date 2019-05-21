import * as types from './actions'

export const loginUserAction = (user) => {
    return {
      type: types.LOGIN_USER,
      user
    }
  }