import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/requestHelper';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
