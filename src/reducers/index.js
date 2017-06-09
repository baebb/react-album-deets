import { combineReducers } from 'redux';

import albumReducer from './reducer_albums';

const rootReducer = combineReducers({
  albums: albumReducer
});

export default rootReducer;
