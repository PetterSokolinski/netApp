import * as types from '../Actions/actions'

export default function(state = [], action) {
  const response = action.response

  switch(action.type) {
    case types.GET_PROJECTS_SUCCESS:
      return { ...state, response }
    case types.GET_PROJECTS_ERROR:
      return { ...state, response }
    default:
      return state
  }
}