import * as types from '../Actions/actions'

export default function(state = [], action) {
  const response = action.response

  switch(action.type) {
    case types.DELETE_TASK_SUCCESS:
      return { ...state, response }
    case types.DELETE_TASK_ERROR:
      return { ...state, response }
    default:
      return state
  }
}