import * as types from '../constants/ActionTypes';

export function getUserPhotos(userId, searchText, page, sortValue) {
  return {type: types.LOAD_PHOTOS, userId, searchText, page, sortValue};
}

export function getFullSizePhoto(photoId) {
  return {type: types.GET_FULL_SIZE_PHOTO, photoId};
}

export function removePhotos() {
  return {type: types.REMOVE_PHOTOS};
}

export function resetError() {
  return {type: types.RESET_ERROR};
}
