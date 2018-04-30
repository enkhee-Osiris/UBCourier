import { createActions } from 'redux-actions';
import types from './types';

export const { loggedIn, loggedOut, errorOccured } = createActions(
  types.LOGGED_IN,
  types.LOGGED_OUT,
  types.ERROR_OCCURED,
);
