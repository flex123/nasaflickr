/* eslint camelcase: ["error", {properties: "never"}] */

import * as types from '../constants/ActionTypes';
import {put, take, fork} from 'redux-saga/effects';
import {PhotoResult} from '../interface/PhotoResult';

const OAUTH_CONSUMER_KEY = 'cccccccccccccccccccccccc';
const API_ENDPOINT = 'https://api.flickr.com/services/rest';

const formatPhoto = photo => {
  return {id: photo.id, title: photo.title, imgSrc: 'https://farm'.concat(photo.farm).concat('.staticflickr.com/').concat(photo.server).concat('/').concat(photo.id).concat('_').concat(photo.secret).concat('.jpg')};
};

/**  Search for user photos based on searchText
*/
const fetchUserPhotos = (userId, searchText, page, sortValue) => {
  const endpoint = API_ENDPOINT.concat('?format=json&method=flickr.photos.search&nojsoncallback=1&oauth_consumer_key=').concat(OAUTH_CONSUMER_KEY).concat('&user_id=').concat(userId).concat('&text=').concat(searchText).concat('&per_page=50').concat('&page=').concat(page).concat('&sort=').concat(sortValue);
  return fetch(endpoint).then(response => {
    return response.json().then(result => {
      if (result.stat === 'fail') {
        throw result.message;
      }
      const photos = [];
      result.photos.photo.forEach(photo => {
        photos.push(formatPhoto(photo));
      });
      const photoResult = new PhotoResult();
      photoResult.page = result.photos.page;
      photoResult.total = Number.parseInt(result.photos.total, 10);
      photoResult.pages = result.photos.pages;
      photoResult.photos = photos;
      return photoResult;
    });
  });
};

/**  Search for photo sizes based on photo id
*/
const fetchFullSizePhoto = photoId => {
  const endpoint = API_ENDPOINT.concat('?format=json&method=flickr.photos.getSizes&nojsoncallback=1&oauth_consumer_key=').concat(OAUTH_CONSUMER_KEY).concat('&photo_id=').concat(photoId);
  return fetch(endpoint).then(response => {
    return response.json().then(photoSizes => {
      if (photoSizes.stat === 'fail') {
        throw photoSizes.message;
      }
      let source = '';
      photoSizes.sizes.size.forEach(size => {
        if (size.label === 'Large') {
          source = size.source;
        }
      });
      return {id: photoId, url: source};
    });
  });
};

export function * getUserPhotos(userId, searchText, page, sortValue) {
  try {
    const photoResult = yield fetchUserPhotos(userId, searchText, page, sortValue);
    yield put({type: types.LOAD_PHOTOS_SUCCESS, photoResult});
  } catch (exception) {
    const error = {message: exception};
    yield put({type: types.REQUEST_ERROR, error});
  }
}

export function * getFullSizePhoto(photoId) {
  try {
    const photo = yield fetchFullSizePhoto(photoId);
    yield put({type: types.GET_FULL_SIZE_PHOTO_SUCCESS, photo});
  } catch (exception) {
    const error = {message: exception};
    yield put({type: types.REQUEST_ERROR, error});
  }
}

export function * watchForGetUserPhotos() {
  for (;;) {
    const {userId, searchText, page, sortValue} = yield take(types.LOAD_PHOTOS);
    yield fork(getUserPhotos, userId, searchText, page, sortValue);
  }
}

export function * watchForGetFullSizePhoto() {
  for (;;) {
    const {photoId} = yield take(types.GET_FULL_SIZE_PHOTO);
    yield fork(getFullSizePhoto, photoId);
  }
}

export default function * rootSaga() {
  yield fork(watchForGetUserPhotos);
  yield fork(watchForGetFullSizePhoto);
}
