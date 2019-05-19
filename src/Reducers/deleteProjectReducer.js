import * as types from '../Actions';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.ADD_PROJECT_SUCCESS:
      return { ...state, response };
    case types.ADD_PROJECT_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};