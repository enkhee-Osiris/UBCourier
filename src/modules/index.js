import { combineReducers } from 'redux';
import appReducer from './app';
import navigatorReducer from './navigator';
import storageReducer from './storage';
import authReducer from './auth';
import locationReducer from './location';
import postReducer from './post';

const rootReducer = combineReducers({
  app: appReducer,
  navigator: navigatorReducer,
  storage: storageReducer,
  auth: authReducer,
  location: locationReducer,
  posts: postReducer,
});

export default rootReducer;
