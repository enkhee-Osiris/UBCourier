import { handleActions } from 'redux-actions';
import types from './types';
import { insert, insertAll, update, remove } from '../../utils/stateUtils';

const initialState = {};

export const createPost = ({
  id,
  name,
  weight,
  volume,
  price,
  imageURL,
  userId,
  currentLocation,
  targetLocation,
  isDelivered,
  delivererId,
}) => ({
  id,
  name,
  weight,
  volume,
  price,
  imageURL,
  userId,
  currentLocation,
  targetLocation,
  isDelivered,
  delivererId,
});

const postReducer = handleActions({
  [types.POST_LOADED]: (state, { payload }) => insertAll(state, payload),
  [types.POST_CREATED]: (state, { payload }) => insert(state, createPost(payload)),
  [types.POST_UPDATED]: (state, { payload }) => update(state, payload.id, payload),
  [types.POST_DELETED]: (state, { payload }) => remove(state, payload),
}, initialState);

export default postReducer;
