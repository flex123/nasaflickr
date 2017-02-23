import {REQUEST_ERROR, RESET_ERROR} from '../constants/ActionTypes';

const initialState = {};

export default function errors(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ERROR:
      return action.error;
    case RESET_ERROR:
      state = initialState;
      return state;
    default:
      return state;
  }
}
