import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const createUser = ({
  email,
  displayName,
  photoURL,
  uid,
}) => ({
  email,
  displayName,
  photoURL,
  uid,
});

const authReducer = handleActions({
  [types.LOGGED_IN]: (state, { payload }) => ({
    ...state,
    isLoggedIn: true,
    user: createUser(payload),
    error: null,
  }),
  [types.LOGGED_OUT]: state => ({
    ...state,
    isLoggedIn: false,
    user: null,
  }),
  [types.ERROR_OCCURED]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
  [types.CLEAR_ERROR]: state => ({
    ...state,
    error: null,
  }),
}, initialState);

export default authReducer;
