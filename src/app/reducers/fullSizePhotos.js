import {GET_FULL_SIZE_PHOTO_SUCCESS} from '../constants/ActionTypes';

const initialState = [];

export default function fullSizePhotos(state = initialState, action) {
  switch (action.type) {
    case GET_FULL_SIZE_PHOTO_SUCCESS:
      return [action.photo, ...state];
    default:
      return state;
  }
}
