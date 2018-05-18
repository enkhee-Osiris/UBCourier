import { combineReducers } from 'redux';
import appReducer from './app';
import navigatorReducer from './navigator';
import storageReducer from './storage';
import authReducer from './auth';
import locationReducer from './location';
import userReducer from './users';
import postReducer from './posts';
import reviewReducer from './reviews';

const rootReducer = combineReducers({
  app: appReducer,
  navigator: navigatorReducer,
  storage: storageReducer,
  auth: authReducer,
  location: locationReducer,
  users: userReducer,
  posts: postReducer,
  reviews: reviewReducer,
});

export default rootReducer;
