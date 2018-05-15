import { handleActions } from 'redux-actions';
import types from './types';
import { insertAll } from '../../utils/stateUtils';

const initialState = {};

export const createUser = ({
  id,
  displayName,
  photoURL,
  phoneNumber,
}) => ({
  id,
  displayName,
  photoURL,
  phoneNumber,
});

const userReducer = handleActions({
  [types.USER_LOADED]: (state, { payload }) => insertAll(state, payload),
}, initialState);

export default userReducer;
