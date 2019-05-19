import * as types from '../Actions';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.GET_ME_SUCCESS:
      return { ...state, response };
    case types.GET_ME_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};