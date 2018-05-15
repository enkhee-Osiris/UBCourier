import { combineReducers } from 'redux';
import appReducer from './app';
import navigatorReducer from './navigator';
import storageReducer from './storage';
import authReducer from './auth';
import locationReducer from './location';
import userReducer from './users';
import postReducer from './posts';

const rootReducer = combineReducers({
  app: appReducer,
  navigator: navigatorReducer,
  storage: storageReducer,
  auth: authReducer,
  location: locationReducer,
  users: userReducer,
  posts: postReducer,
});

export default rootReducer;
