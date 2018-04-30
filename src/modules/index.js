import { combineReducers } from 'redux';
import appReducer from './app';
import navigatorReducer from './navigator';
import storageReducer from './storage';
import authReducer from './auth';

const rootReducer = combineReducers({
  app: appReducer,
  navigator: navigatorReducer,
  storage: storageReducer,
  auth: authReducer,
});

export default rootReducer;
