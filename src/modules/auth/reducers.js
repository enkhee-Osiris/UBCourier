import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const createUser = (props) => {
  const {
    email,
    uid,
  } = props;

  return { email, uid };
};

const authReducer = handleActions({
  [types.LOGGED_IN]: (state, { payload }) => ({
    ...state,
    isLoggedIn: true,
    user: createUser(payload),
  }),
  [types.LOGGED_OUT]: state => ({
    ...state,
    isLoggedIn: false,
    user: null,
  }),
}, initialState);

export default authReducer;
