import { createActions } from 'redux-actions';
import types from './types';

export const { locationUpdated } = createActions(types.LOCATION_UPDATED);
