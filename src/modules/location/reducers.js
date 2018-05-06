import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  latitude: 47.8864,
  longitude: 106.9057,
};

const createLocation = ({
  latitude,
  longitude,
}) => ({
  latitude,
  longitude,
});

const locationReducer = handleActions({
  [types.LOCATION_UPDATED]: (state, { payload }) => createLocation(payload),
}, initialState);

export default locationReducer;
