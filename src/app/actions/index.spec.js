import * as types from '../constants/ActionTypes';
import * as actions from './index';

describe('photos actions', () => {
  it('getUserPhotos should create LOAD_PHOTOS action', () => {
    expect(actions.getUserPhotos('testUser', 'abc', 1, 'date')).toEqual({
      type: types.LOAD_PHOTOS,
      userId: 'testUser',
      searchText: 'abc',
      page: 1,
      sortValue: 'date'
    });
  });

  it('getFullSizePhoto should create GET_FULL_SIZE_PHOTO action', () => {
    expect(actions.getFullSizePhoto('22222')).toEqual({
      type: types.GET_FULL_SIZE_PHOTO,
      photoId: '22222'
    });
  });

  it('removePhotos should create REMOVE_PHOTOS action', () => {
    expect(actions.removePhotos()).toEqual({
      type: types.REMOVE_PHOTOS
    });
  });

  it('resetError should create RESET_ERROR action', () => {
    expect(actions.resetError()).toEqual({
      type: types.RESET_ERROR
    });
  });
});
