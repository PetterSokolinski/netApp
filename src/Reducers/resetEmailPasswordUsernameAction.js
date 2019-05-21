import * as types from '../Actions/actions'

export default function(state = [], action) {
  const response = action.response

  switch(action.type) {
    case types.EMAIL_PASSWORD_USERNAME_RESET_SUCCESS:
      return { ...state, response }
    case types.EMAIL_PASSWORD_USERNAME_RESET_ERROR:
      return { ...state, response }
    default:
      return state
  }
}