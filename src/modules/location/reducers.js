import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  latitude: 47.8864,
  longitude: 106.9057,
};

const locationReducer = handleActions({
  [types.LOCATION_UPDATED]: (state, { payload }) => ({
    ...state,
    latitude: payload.latitude,
    longitude: payload.longitude,
  }),
}, initialState);

export default locationReducer;
