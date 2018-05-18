import { handleActions } from 'redux-actions';
import types from './types';
import { insert, insertAll } from '../../utils/stateUtils';

const initialState = {};

export const createReview = ({
  id,
  point,
  reviewerId,
  userId,
  text,
}) => ({
  id,
  point,
  reviewerId,
  userId,
  text,
});

const reviewReducer = handleActions({
  [types.REVIEW_LOADED]: (state, { payload }) => insertAll(state, payload),
  [types.REVIEW_CREATED]: (state, { payload }) => insert(state, createReview(payload)),
}, initialState);

export default reviewReducer;
