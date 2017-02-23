import fullSizePhotos from './fullSizePhotos';
import * as types from '../constants/ActionTypes';

describe('fullSizePhotos reducer', () => {
  it('should handle initial state', () => {
    expect(
      fullSizePhotos(undefined, {})
    ).toEqual([]);
  });

  it('should handle GET_FULL_SIZE_PHOTO_SUCCESS', () => {
    const newObject = fullSizePhotos(undefined, {type: types.GET_FULL_SIZE_PHOTO_SUCCESS, photo: {id: '111'}});
    expect(
      newObject.length
    ).toEqual(1);
  });

  it('should handle GET_FULL_SIZE_PHOTO_SUCCESS 2', () => {
    const newObject = fullSizePhotos([{id: '111'}], {type: types.GET_FULL_SIZE_PHOTO_SUCCESS, photo: {id: '222'}});
    expect(
      newObject.length
    ).toEqual(2);
  });
});
