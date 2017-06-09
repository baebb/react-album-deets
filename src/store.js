import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { routerForBrowser } from 'redux-little-router';

import rootReducer from './reducers';

const routes = {
  '/': {
    title: 'Home'
  },
  '/album': {
    title: 'Album details'
  }
};

const { reducer, middleware, enhancer } = routerForBrowser({ routes });

const composedMiddleware = [
  applyMiddleware(thunk, promise, middleware)
];

if (process.env.NODE_ENV !== 'production') {
  window.__REDUX_DEVTOOLS_EXTENSION__
  && composedMiddleware.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default function configureStore(initialState) {
  return createStore(
    combineReducers({ router: reducer, rootReducer }),
    initialState,
    compose(enhancer, ...composedMiddleware)
  )
}