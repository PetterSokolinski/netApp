import * as types from './actions'

export const resetEmailPasswordUsernameAction = (user) => {
    return {
      type: types.EMAIL_PASSWORD_USERNAME_RESET,
      user
    }
  }