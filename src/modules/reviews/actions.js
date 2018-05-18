import { createActions } from 'redux-actions';
import types from './types';

export const {
  reviewLoaded,
  reviewCreated,
} = createActions(
  types.REVIEW_LOADED,
  types.REVIEW_CREATED,
);
