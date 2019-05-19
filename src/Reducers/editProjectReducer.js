import * as types from '../Actions';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.EDIT_PROJECT_SUCCESS:
      return { ...state, response };
    case types.EDIT_PROJECT_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};