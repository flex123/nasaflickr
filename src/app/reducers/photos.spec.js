import photoResult from './photos';
import * as types from '../constants/ActionTypes';

describe('photos reducer', () => {
  it('should handle initial state', () => {
    const initialObject = photoResult(undefined, {});
    expect(
      initialObject.photos.length
    ).toEqual(0);
    expect(
      initialObject.page
    ).toEqual(0);
    expect(
      initialObject.total
    ).toEqual(0);
    expect(
      initialObject.pages
    ).toEqual(0);
  });

  it('should handle LOAD_PHOTOS_SUCCESS', () => {
    const searchResult = {};
    searchResult.page = 1;
    searchResult.pages = 50;
    searchResult.total = 5000;
    searchResult.photos = [{id: '111'}, {id: '222'}, {id: '333'}];

    const newObject = photoResult(undefined, {type: types.LOAD_PHOTOS_SUCCESS, photoResult: searchResult});
    expect(
      newObject.photos.length
    ).toEqual(3);
    expect(
      newObject.page
    ).toEqual(1);
    expect(
      newObject.total
    ).toEqual(5000);
    expect(
      newObject.pages
    ).toEqual(50);
  });

  it('should handle REMOVE_PHOTOS', () => {
    const searchResult = {};
    searchResult.page = 1;
    searchResult.pages = 50;
    searchResult.total = 5000;
    searchResult.photos = [{id: '111'}, {id: '222'}, {id: '333'}];

    const newObject = photoResult(searchResult, {type: types.REMOVE_PHOTOS});
    expect(
      newObject.photos.length
    ).toEqual(0);
    expect(
      newObject.page
    ).toEqual(0);
    expect(
      newObject.total
    ).toEqual(0);
    expect(
      newObject.pages
    ).toEqual(0);
  });
});
