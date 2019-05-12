import * as types from '../Actions';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.USERNAME_RESET_SUCCESS:
      return { ...state, response };
    case types.USERNAME_RESET_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};