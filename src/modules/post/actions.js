import { createActions } from 'redux-actions';
import types from './types';

export const {
  postLoaded,
  postCreated,
  postUpdated,
  postDeleted,
} = createActions(
  types.POST_LOADED,
  types.POST_CREATED,
  types.POST_UPDATED,
  types.POST_DELETED,
);
