import { persistReducer, persistStore } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './modules';

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigator,
);

let middleware = [thunkMiddleware];
if (__DEV__) {
  const loggerMiddleware = createLogger();
  middleware = [...middleware, loggerMiddleware, navigationMiddleware];
} else {
  middleware = [...middleware, navigationMiddleware];
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigator', 'auth', 'app', 'posts', 'users', 'reviews'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middleware)),
);

const persistor = persistStore(store, null);

// persistor.purge();

export {
  store,
  persistor,
};
