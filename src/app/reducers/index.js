import {combineReducers} from 'redux';
import photoResult from './photos';
import fullSizePhotos from './fullSizePhotos';
import sites from './sites';
import errors from './errors';

const rootReducer = combineReducers({
  photoResult,
  fullSizePhotos,
  sites,
  errors
});

export default rootReducer;
