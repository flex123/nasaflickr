import {LOAD_PHOTOS_SUCCESS, REMOVE_PHOTOS} from '../constants/ActionTypes';
import {PhotoResult} from '../interface/PhotoResult';

const initialState = new PhotoResult();

export default function photoResult(state = initialState, action) {
  const newResult = new PhotoResult();
  switch (action.type) {
    case LOAD_PHOTOS_SUCCESS:
      newResult.pages = action.photoResult.pages;
      newResult.page = action.photoResult.page;
      newResult.total = action.photoResult.total;
      newResult.photos = state.photos.concat(action.photoResult.photos);
      return newResult;
    case REMOVE_PHOTOS:
      return initialState;
    default:
      return state;
  }
}
